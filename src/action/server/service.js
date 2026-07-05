import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const serviceCollection = dbConnect(collections.SESRVICE);

export const getAllService = async () => {
  const result = await serviceCollection.find().toArray();

  return result;
};

export const getSingleService = async (id) => {
  const query = { _id: new ObjectId(id) };

  const result = await serviceCollection.findOne(query);

  return { ...result, _id: result._id.toString() } || {};
};
