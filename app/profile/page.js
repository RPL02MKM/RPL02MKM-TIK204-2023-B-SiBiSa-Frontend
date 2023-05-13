/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  const { logout, currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem(currentUser));
  //   return;
  // }, []);

  return (
    <div>
      <h1 className="text-3xl mb-10 text-center font-bold text-green-400">
        <span className="mr-4">
          <FontAwesomeIcon icon={faUserCircle} />
        </span>
        Profile
      </h1>

      {/* <p>Email: {currentUser.email}</p> */}
      <div className="text-center mt-40">
        <Link href="/user">
          <button className="ml-6 px-4 py-2 rounded-2xl text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-green-700 transition duration-150 ease-in-out">
            Dashboard
          </button>
        </Link>

        <button
          onClick={() => {
            logout();
          }}
          className="ml-6 px-4 py-2 rounded-2xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:bg-green-700 transition duration-150 ease-in-out"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
