import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.URI;
const dbname = process.env.DB_NAME;

export const collections = {
  USER: "user",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (cname) => {
  return client.db(dbname).collection(cname);
};
