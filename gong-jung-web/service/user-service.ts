import * as bcrypt from "bcryptjs";

import {
  createUser,
  deleteUserR,
  getUserByUserEmail,
} from "@/repository/user-repository";

export async function signUpUser(email: string, password: string) {
  // const withdrawalUserCheck = await getWithdrawalUserCheck(email);
  // if (withdrawalUserCheck?.email) {
  //   return {
  //     status: 409,
  //     message:
  //       "Conflict: This email was previously registered and has since been deleted. Please sign up with a different email or contact support.",
  //   };
  // }

  const existingUser = await getUserByUserEmail(email);

  // if (existingUser?.name) {
  //   return {
  //     status: 409,
  //     message:
  //       "Conflict: This email is already in use. Please use a different email address.",
  //   };
  // }

  const hashedPassword = await bcrypt.hash(password, 12);
  const createUserRes = await createUser(email, hashedPassword);

  return {
    status: 201,
    // message: "Sign up successful",
    // ...createUserRes,
  };
}

// export async function updateUserImageTokenS(
//   userId: number,
//   imageToken: number
// ) {
//   return await updateUserImageTokenR(userId, imageToken);
// }

export async function deleteUserS(
  userId: number,
  email: string,
  reason: string | null
) {
  return await deleteUserR(userId, email, reason);
}
