import { postAJobFormSchema } from '@/lib/schemas/schemas';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    const result = postAJobFormSchema.safeParse(body);
    let zodErrors = {};
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
      });
      return NextResponse.json({ errors: zodErrors }, { status: 400 });
    }
    // const session = await stripe.checkout.sessions.create({
    //     mode: "payment",
    //     payment_method_types: ['card'],
    //     line_items: [
    //         {
    //             price: "",
    //             quantity: 1,
    //         }
    //     ],
    //     success_url: `${process.env.HOST_NAME}/success?session_id={CHECKOUT_SESSION_ID}`,
    //     cancel_url: `${process.env.HOST_NAME}/`
    // })

    // redirect(session.url ?? '/')
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Internal Error:', error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
