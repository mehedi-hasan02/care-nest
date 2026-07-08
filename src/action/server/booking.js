"use server";

import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";

const bookingCollection = dbConnect(collections.BOOKING);

export const postBooking = async (payload) => {
  const { user } = (await getServerSession(authOptions)) || {};

  if(!user) {
    return {seccess: false}
  }

  const newBooking = {
    ...payload,
    date: new Date().toISOString(),
  };
  const result = bookingCollection.insertOne(newBooking);

  return { success: Boolean((await result).acknowledged) };
};
