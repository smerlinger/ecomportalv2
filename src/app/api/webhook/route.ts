import { error } from 'next/dist/build/output/log';
import { NextRequest, NextResponse } from 'next/server';
// import { getLogger } from '@/app/lib/logger';
import Stripe from 'stripe';
import connectDB from '@/service/database';
import Order from '@/lib/models/order.model';
import JobPost from '@/lib/models/jobPost.model';

// if (!process.env.STRIPE_WEBHOOK_SECRET) {
//   throw new Error('STRIPE_WEBHOOK_SECRET is not defined');
// }

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-06-20',
});

export const POST = async (req: NextRequest, res: NextResponse) => {
  // const logger = getLogger();
  const body = await req.text();
  const sig = req.headers.get('stripe-signature') as string;

  let event: Stripe.Event;

  console.info('[Stripe] Processing webhook');

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig as string,
      process.env.STRIPE_WEBHOOK_SECRET ?? ''
    );

    console.info({ type: event.type }, `[Stripe] Listening to Webhook Event!`);
  } catch (err) {
    error(err as string);
    return new Response(`Webhook Error: ${(err as Error).message}`, {
      status: 400,
    });
  }

  try {
    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const completedSession = event.data.object as Stripe.Checkout.Session;

        console.info(
          { completedSession },
          `[Stripe] Checkout Session Completed! Session ID: ${completedSession.id}`
        );

        // add to database
        await connectDB();
        const order = new Order({
          sessionId: completedSession.id,
          paymentStatus: completedSession.payment_status,
          amountTotal: completedSession.amount_total,
          currency: completedSession.currency,
          customerEmail: completedSession.customer_details?.email,
        });

        await order.save();

        const updatedJobPost = await JobPost.findOneAndUpdate(
          { sessionId: completedSession.id },
          { paymentStatus: 'paid' }
        );
        if (!updatedJobPost)
          return NextResponse.json(
            { error: 'Failed to update Job Post' },
            { status: 500 }
          );
        break;
      case 'checkout.session.async_payment_failed':
        const failedSession = event.data.object as Stripe.Checkout.Session;

        // don't do anything but return an error to customer
        console.log({ failedSession, event });

        break;
      default:
        // Unexpected event type
        console.warn(event.type, `🤷‍♀️ Unhandled event type`);
        break;
    }
  } catch (err) {
    console.error({ err }, `[Stripe] Webhook Error`);
    return new Response('Webhook handler failed. View logs.', {
      status: 400,
    });
  }

  console.info(`[Stripe] Successfully ran Webhook!`);

  return NextResponse.json({ success: true });
};
