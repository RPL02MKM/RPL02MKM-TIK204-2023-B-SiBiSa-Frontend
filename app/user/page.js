"use client";

import UserDashboard from "./UserDashboard";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Admin() {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  return (
    <div className="min-h-screen mx-auto items-center">
      {currentUser && <UserDashboard />}
    </div>
  );
}
