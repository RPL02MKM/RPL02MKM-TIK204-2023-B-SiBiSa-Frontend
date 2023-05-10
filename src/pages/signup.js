import React from "react";
import Head from "next/head";
import signupAuth from "@/firebase/auth/signup-auth";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passworrdConfirm, setPassworrdConfirm] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signupAuth(
      username,
      email,
      password,
      passworrdConfirm
    );

    if (error) {
      return alert(error);
    }
    console.log(result);
    return router.push("/");
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <Head>
        <title>Signup Page</title>
      </Head>
      <div className="w-full max-w-md">
        <form
          onSubmit={handleForm}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Sign Up</h1>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              required
              type="username"
              name="username"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
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
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-gray-700 font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              onChange={(e) => setPassworrdConfirm(e.target.value)}
              required
              type="password"
              name="password-confirm"
              id="password-confirm"
              className="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
