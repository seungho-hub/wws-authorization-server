import { Prisma } from '@prisma/client';
import prismaClient from '../database';

export const createUser = async (body: Prisma.UserCreateInput) => {
  return;
};

export const updateUser = async (body: Prisma.UserUpdateInput) => {
  return;
};

export const deleteUser = async (body: Prisma.UserSelect) => {
  return;
};

export const getUser = async (body: Prisma.UserWhereInput) => {
  const user = await prismaClient.user.findFirst({
    where: body,
  });

  return user;
};
