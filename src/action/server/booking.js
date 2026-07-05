"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

const bookingCollection = dbConnect(collections.BOOKING);

export const postBooking = async (payload) => {
  const newBooking = {
    ...payload,
    date: new Date().toISOString(),
  };
  const result = bookingCollection.insertOne(newBooking);

  return { success: Boolean((await result).acknowledged) };
};
