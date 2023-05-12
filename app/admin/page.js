"use client";

import UserDashboard from "../userDashboard/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Admin() {
  const { logout, currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  return (
    <div className="min-h-screen mx-auto items-center">
      <h1>Ini Halaman Admin</h1>
      {currentUser && <UserDashboard />}
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}
