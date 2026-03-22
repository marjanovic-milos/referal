"use client";
import { useEffect, useState, createContext, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/db";
import { useAuth } from "@/app/hooks/users/useAuth";

const AuthContext = createContext(null);

const ROLE_REDIRECTS = {
  admin: "/admin",
  user: "/user",
  default: "/",
};
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuthContext must be used inside AuthGuard");
  return context;
}
function getRedirectPath(role, pathname) {
  const isPublicRoute = pathname === "/";
  const isAdminRoute = pathname.startsWith("/admin");
  const isUserRoute = pathname.startsWith("/user");

  if (role === "admin") {
    if (isPublicRoute) return ROLE_REDIRECTS.admin;
    if (isUserRoute) return ROLE_REDIRECTS.admin;
    return null;
  }

  if (role === "user") {
    if (isPublicRoute) return ROLE_REDIRECTS.user;
    if (isAdminRoute) return ROLE_REDIRECTS.user;
    return null;
  }

  if (!isPublicRoute) return ROLE_REDIRECTS.default;
  return null;
}

export function AuthGuard({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { checkUser } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const { data } = await checkUser(firebaseUser?.uid);
        setUser(data);

        const redirect = getRedirectPath(data?.role, pathname);
        if (redirect) router.replace(redirect);
      } else {
        setUser(null);
        const redirect = getRedirectPath(null, pathname);
        if (redirect) router.replace(redirect);
      }
      setLoading(false);
    });

    return () => unsub();
  }, [router, pathname]);

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    router.replace("/");
  };

  const isAdmin = user?.role === "admin";
  const isAuthenticated = !!user;

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ user, logout, isAdmin, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
