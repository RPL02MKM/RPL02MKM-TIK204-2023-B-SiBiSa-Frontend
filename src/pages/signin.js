import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/navigation";
import signInAuth from "@/firebase/auth/signin-auth";
import Link from "next/link";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signInAuth(email, password);

    if (error) {
      return console.log(error);
    }

    console.log(result);
    return router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Login Page</title>
      </Head>
      <div className="w-full max-w-md">
        <form
          onSubmit={handleForm}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Login</h1>
          <div className="mb-4">
            <label
              htmlFor="username"
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
              placeholder="Enter your username or email"
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <Link href="/lupapaswword">
              <p className="inline-block align-baseline font-medium text-sm text-gray-700 hover:text-green-600">
                Forgot Password?
              </p>
            </Link>
          </div>
        </form>
        <div className="flex item-center justify-evenly mx-20 mt-4">
          <span className="text-gray-600">Dont have an account yet?</span>
          <Link href="/signup">
            <p className="text-gray-700 hover:text-green-600 font-medium ml-2">
              Sign up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
