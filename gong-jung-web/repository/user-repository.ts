// import prisma from "@/lib/prisma";

export async function createUser(email: string, password: string) {
  // const user = await prisma.user.create({
  //   data: {
  //     name: email,
  //     password,
  //   },
  //   select: {
  //     id: true,
  //     name: true,
  //   },
  // });
  // return user;
  return "ok";
}
// export async function getUserByUserId(userId: number) {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId,
//     },
//   });

//   return user;
// }

export async function getUserByUserEmail(email: string) {
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: email,
  //   },
  // });

  // return user;
  return "ok";
}

// export async function updateUserImageTokenR(
//   userId: number,
//   updatedImageToken: number
// ) {
//   const user = await prisma.user.update({
//     where: {
//       id: userId,
//     },
//     data: {
//       imageToken: updatedImageToken,
//     },
//   });

//   return user;
// }

// export async function updateIncreaseUserGenerationCountR(
//   userId: number,
//   qty: number
// ) {
//   const user = await prisma.user.update({
//     where: {
//       id: userId,
//     },
//     data: {
//       generationCount: {
//         increment: qty,
//       },
//     },
//   });

//   return user;
// }

export async function deleteUserR(
  userId: number,
  email: string,
  reason: string | null
) {
  // const [withdrawalUser, deletedUser] = await prisma.$transaction([
  //   prisma.withdrawalUser.create({
  //     data: {
  //       email,
  //       reason,
  //     },
  //   }),
  //   prisma.user.delete({
  //     where: {
  //       id: userId,
  //     },
  //   }),
  // ]);

  return "deletedUser";
}

export async function getWithdrawalUserCheck(email: string) {
  // const withdrawalUser = await prisma.withdrawalUser.findUnique({
  //   where: {
  //     email,
  //   },
  //   select: {
  //     id: true,
  //     email: true,
  //   },
  // });

  return "withdrawalUser";
}
