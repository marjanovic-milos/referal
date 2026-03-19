"use client";
import { useEffect, useState, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/db";
const AuthContext = createContext(null);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext must be used inside AuthGuard");
  return context;
}

export function AuthGuard({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        router.replace("/login");
      }
      setLoading(false);
    });

    return () => unsub();
  }, [router]);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return <AuthContext.Provider value={{ user, logout }}>{children}</AuthContext.Provider>;
}
