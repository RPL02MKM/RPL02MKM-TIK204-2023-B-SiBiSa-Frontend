"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(true);
  const { login, signup, currentUser } = useAuth();
  const router = useRouter();

  console.log(currentUser);

  async function submitHandler() {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (isLoggingIn) {
      try {
        await login(email, password);
        localStorage.setItem("user", JSON.stringify(currentUser));
        router.push("/admin");
      } catch (err) {
        if (err.code === "auth/wrong-password") {
          setError("Incorrect email or password");
        } else {
          setError(
            "An error occurred while logging in. Please try again later."
          );
        }
      }
      return;
    }
    try {
      await signup(email, password);
      return setIsLoggingIn(!isLoggingIn);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("The email address you entered is already in use.");
      } else {
        setError("An error occurred while signing up. Please try again later.");
      }
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="shadow-2xl rounded-3xl px-8 pt-6 pb-8 mb-4">
          <h1 className="font-extrabold select-none text-2xl sm:text-4xl text-center mb-14">
            {isLoggingIn ? "Login" : "Register"}
          </h1>
          {error && (
            <div className="w-full max-w-[40ch] rounded-lg border-rose-400 border text-center border-solid text-rose-400 py-2 mb-10">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="outline-none duration-300 border-b-2 border-solid border-green-300 focus:border-green-600 text-slate-900 p-2 w-full max-w-[40ch]"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-green-300 focus:border-green-600 mb-10"
            />
            <button
              onClick={submitHandler}
              className="w-full max-w-[40ch] rounded-xl bg-green-600 hover:bg-green-700 py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-green-900 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-white"
            >
              <h2 className="relative z-20">Submit</h2>
            </button>
            <h2
              className="duration-300 text-blue-600 hover:scale-110 cursor-pointer text-center mt-5"
              onClick={() => setIsLoggingIn(!isLoggingIn)}
            >
              {!isLoggingIn ? "Login" : "Register"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
