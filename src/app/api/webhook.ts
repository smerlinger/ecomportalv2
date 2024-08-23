import { error } from "next/dist/build/output/log"
import { NextRequest, NextResponse } from "next/server"
import { getLogger } from "@/app/lib/logger"
import Stripe from "stripe";
import connectDB from "@/service/database";

if (!process.env.STRIPE_WEBHOOK_SECRET) {
    throw new Error("STRIPE_WEBHOOK_SECRET is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20"
})


export const POST = async (req: NextRequest, res: NextResponse) => {
    const logger = getLogger()
    const body = await req.text()
    const sig = req.headers.get("stripe-signature") as string;

    let event: Stripe.Event

    logger.info("[Stripe] Processing webhook")

    try {
        event = stripe.webhooks.constructEvent(body, sig as string, process.env.STRIPE_WEBHOOK_SECRET!)

        logger.info({ type: event.type }, `[Stripe] Listening to Webhook Event!`)
    } catch (err) {
        error(err as string)
        return new Response(`Webhook Error: ${(err as Error).message}`, {
            status: 400,
        })
    }

    try {
        // Handle the event
        switch (event.type) {
            case "checkout.session.completed":
                const completedSession = event.data.object as Stripe.Checkout.Session

                logger.info({ completedSession }, `[Stripe] Checkout Session Completed! Session ID: ${completedSession.id}`)

                // add to database
                await connectDB();


                // fulfill order
                fulfillCheckout(completedSession.id);
                break
            case "checkout.session.async_payment_failed":
                const failedSession = event.data.object as Stripe.Checkout.Session

                // don't do anything but return an error to customer
                console.log({ failedSession, event })

                break
            default:
                // Unexpected event type
                logger.warn(event.type, `🤷‍♀️ Unhandled event type`)
                break
        }
    } catch (err) {
        logger.error({ err }, `[Stripe] Webhook Error`)
        return new Response("Webhook handler failed. View logs.", {
            status: 400,
        })
    }

    logger.info(`[Stripe] Successfully ran Webhook!`)

    return NextResponse.json({ success: true })
}