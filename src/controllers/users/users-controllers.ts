import { prismaClient } from "../../extras/prisma";
import { GetMeError, userError, type GetMeResult } from "./users-types";

export const getMe = async (parameters: { userId: string }): Promise<GetMeResult> => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: parameters.userId,
    },
  });

  if (!user) {
    throw GetMeError.BAD_REQUEST;
  }

  return {
    user,
  };
};

import { type userResult } from "./users-types";

export const getAllUsers = async (): Promise<userResult> => {
    const users = await prismaClient.user.findMany();
    if (!users) {
      throw userError.BAD_REQUEST;
    }
    return {
      users,
    };
  };


  



