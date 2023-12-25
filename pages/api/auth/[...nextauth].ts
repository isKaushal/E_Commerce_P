import bcrypt from "bcrypt";
import Users from "@/models/users.tsx";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { randomBytes, randomUUID } from "crypto";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    // Google({}),
    Credentials({
      type: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { email, password } = credentials;
        const user = await Users.findOne({ email });
        const passCompare = bcrypt.compareSync(password, user.password);

        if (!user) {
          return {
            msg: "You Don't Have Account Please SignUp First",
          };
        }

        if (passCompare === true) {
          return user;
        }

        return { msg: "Thank You But SignIn First" };
      },
    }),
  ],
  pages: {
    signIn: "user/login",
    error: "",
  },
  secret: process.env.NEXTAUTH_SECRET,
});
