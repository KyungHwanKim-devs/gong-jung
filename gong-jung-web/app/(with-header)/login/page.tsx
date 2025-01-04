"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LogIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string[]>([]);

  const handleLogIn = async (e: any) => {
    setErrorMsg([]);

    e.preventDefault();
    const result = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
      callbackUrl: "/",
    });

    if (!result?.ok) {
      setErrorMsg([
        "Sign in failed.",
        "Check the details you provided are correct.",
      ]);
      return;
    }

    router.push("/");
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-[375px] rounded shadow-lg p-6 bg-main-800 m-auto">
        <h1 className="text-2xl font-semibold text-center mb-2 text-white">
          LogIn
        </h1>

        {errorMsg.length > 0 && (
          <div className="bg-error px-4 py-2 rounded text-sm mb-6">
            {errorMsg.map((msg) => (
              <React.Fragment key={msg}>
                {msg}
                <br />
              </React.Fragment>
            ))}
          </div>
        )}

        <form onSubmit={handleLogIn}>
          <div className="mb-4">
            <label className="block font-semibold text-white mb-2">
              아이디
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
              Password
            </label>

            <input
              type="password"
              className="w-full p-2 border border-gray-600 rounded-lg bg-main-950"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full border-2 border-main-100/20 text-white bg-main-950 p-3 rounded-lg hover:bg-main-50 hover:text-main-950 transition duration-200"
          >
            Log In
          </button>
        </form>

        <p className="text-sm font-semibold text-center my-6 text-gray-500">
          forget your password?{" "}
          <button
            type="button"
            className="text-white hover:underline"
            onClick={() => alert("Preparing")}
          >
            find password
          </button>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
