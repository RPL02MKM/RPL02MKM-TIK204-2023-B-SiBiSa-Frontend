import React, { useState, useEffect, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/firebase/config";

export default function useFetchWastes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [waste, setWaste] = useState(null);
}
