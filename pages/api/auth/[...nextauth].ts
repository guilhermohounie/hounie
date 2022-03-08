import { prisma } from "@lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";

// Authentication
export default NextAuth({
  providers: [],
  adapter: PrismaAdapter(prisma),
});
