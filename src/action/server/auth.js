"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { name, email, number, nid, pass } = payload;

  if (!email || !pass) {
    return false;
  }

  const user = await dbConnect(collections.USERS).findOne({ email });

  if (user) {
    return { success: false, message: "Already Use this Email" };
  }

  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(pass, 10),
    number,
    nid,
    register: new Date().toISOString(),
    role: "user"
  };

  // console.log(newUser);

  const result = await dbConnect(collections.USERS).insertOne(newUser);

  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;

  // console.log({ email, password });

  if (!email || !password) {
    return null;
  }

  const user = await dbConnect(collections.USERS).findOne({ email });

  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user?.password);

  if (isMatch) {
    return user;
  } else {
    return null;
  }
};
