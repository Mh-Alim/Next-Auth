import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        // credentials data
        // db call to verify
        // get id from db
        return {
          id: "3984sd934",
          name: "alim",
          email: "alim@gmal.com",
          password: "password",
          otherData: "other data",
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: ({ user }: any) => {
      return false;
      if (user.email == "random@gmail.com") return null;
      return true;
    },
    jwt: ({ token, user }: any) => {
      console.log("token", token);
      console.log("user: ", user);
      token.userId = "custome user id";
      return token;
    },

    session: ({ session, token, user }: any) => {
      console.log("session: ", session);
      console.log("token", token);
      console.log("user", user);
      session.user.id = token.sub;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
