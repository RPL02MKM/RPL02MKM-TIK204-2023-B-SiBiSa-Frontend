"use client";

import React, { useContext, useState, useEffect, useRef } from "react";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userInfo = useRef();

  function signup(email, password, username) {
    createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    updateDisplayName(user, username);
    setCurrentUser(user);
    return;
  }

  function updateDisplayName(user, username) {
    updateProfile(user, {
      displayName: username,
    });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  // function updateUserData(userId, userData) {
  //   const userDocRef = doc(db, "user", userId);
  //   try {
  //     userDocRef.update(userData);
  //     userInfo.current = { ...userInfo.current, ...userData };
  //   } catch (error) {
  //     console.error("Error updating user document:", error);
  //   }
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    userInfo,
    // updateUserData,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-green-900 to-green-200 text-transparent bg-clip-text">
            ...
          </h1>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
