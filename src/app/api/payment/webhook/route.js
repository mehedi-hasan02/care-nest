"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (bookingPayload) => {
  const { serviceTitle, totalCost, serviceId } = bookingPayload;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "bdt",
          product_data: {
            name: serviceTitle,
            description: `CareNest booking — ${
              bookingPayload.durationType === "hour"
                ? `${bookingPayload.durationValue} hour(s)`
                : `${bookingPayload.durationValue} day(s)`
            }`,
          },
          // Stripe expects amount in smallest currency unit (poisha for BDT)
          unit_amount: totalCost * 100,
        },
        quantity: 1,
      },
    ],
    metadata: {
      // Pass full booking payload as metadata so webhook can save it
      serviceId,
      serviceTitle,
      durationType: bookingPayload.durationType,
      durationValue: String(bookingPayload.durationValue),
      totalCost: String(totalCost),
      division: bookingPayload.location.division,
      district: bookingPayload.location.district,
      city: bookingPayload.location.city,
      area: bookingPayload.location.area,
      address: bookingPayload.location.address,
      userEmail: bookingPayload.userEmail,
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/${serviceId}`,
  });

  return { url: session.url };
};

export const getPaymentSession = async (sessionId) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return {
    serviceTitle: session.metadata?.serviceTitle,
    totalCost: session.metadata?.totalCost,
    status: session.payment_status,
  };
};
