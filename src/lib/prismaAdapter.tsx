import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import  prisma from "./prisma";

export const adapter = new PrismaAdapter(prisma.session, prisma.users);