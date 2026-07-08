import { loginUser } from "@/action/server/auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { collections, dbConnect } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        console.log(credentials);
        const user = await loginUser({
          email: credentials.email,
          password: credentials.password,
        });
        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isExist = await dbConnect(collections.USERS).findOne({
        email: user?.email,
      });

      if (isExist) {
        return true;
      }

      const newUser = {
        providers: account?.providers,
        email: user?.email,
        password: user?.password,
        image: user?.image,
        role: "user",
      };

      const result = await dbConnect(collections.USERS).insertOne(newUser);

      return result.acknowledged;
    },
    async session({ session, token }) {
      if (token) {
        session.role = token.role,
        session.email = token.email
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user){
        token.role = user?.role,
        token.email = user?.email
      }
      return token;
    },
  },
};
