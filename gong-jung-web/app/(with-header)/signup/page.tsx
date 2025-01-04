"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUpUser } from "@/queries/query/user";
import { signIn } from "next-auth/react";
import { toast } from "@/components/toast";

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { mutateAsync: signup, error, status } = useSignUpUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const createUserRes = await signup({
        userEmail: email,
        password: password,
      });

      toast.success(createUserRes.message);
      router.push("/api/auth/signin");
    } catch (error: any) {
      const err = error.response.data;
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[375px] rounded shadow-lg p-6 bg-main-800 m-auto">
        <h1 className="text-2xl font-semibold text-center mb-2 text-white">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold text-white mb-2">
              아이디{" "}
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-600 rounded-lg bg-main-950"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block font-semibold text-white mb-2"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-600 rounded-lg bg-main-950"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block font-semibold text-white mb-2"
              htmlFor="confirm-password"
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-600 rounded-lg bg-main-950"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full border-2 border-main-100/20 text-white bg-main-950 p-3 rounded-lg hover:bg-main-50 hover:text-main-950 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm font-semibold text-center my-6 text-gray-500">
          Already have an account?{" "}
          <button
            type="button"
            className="text-white hover:underline"
            onClick={() => signIn()}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
