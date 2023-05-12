/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function UserDashboard() {
  const { currentUser } = useAuth();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(currentUser));
    return;
  }, []);

  return (
    <div>
      <h1>
        Berhasil Login
        <span>
          <FontAwesomeIcon icon={faUserCircle} />
        </span>
      </h1>
      <h1>Welcome</h1>
      <p>Email: {currentUser.email}</p>
    </div>
  );
}
