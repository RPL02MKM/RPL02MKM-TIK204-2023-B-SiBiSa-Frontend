"use client";

import Check from "./Check";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CheckSampah() {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  return (
    <div className="min-h-screen mx-auto items-center">
      {currentUser && <Check />}
    </div>
  );
}
