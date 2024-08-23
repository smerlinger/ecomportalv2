import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-06-20"
})

export async function POST(request: NextRequest) {
    try {
        const { cart } = await request.json();

        const session = await stripe.checkout.sessions.create({
            mode: "payment",
            payment_method_types: ['card'],
            line_items: [
                {
                    price: "",
                    quantity: 1,
                }
            ],
            success_url: `${process.env.HOST_NAME}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.HOST_NAME}/`
        })

        redirect(session.url ?? '/')
    } catch (error) {
        console.error("Internal Error:", error);
        return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 }
        )
    }
}