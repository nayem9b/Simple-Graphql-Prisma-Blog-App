import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Query = {
  users: async (parent: any, args: any, context: any) => {
    const users = await prisma.user.findMany();
    return users;
  },
};
