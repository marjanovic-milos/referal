"use client";

import { useAuth } from "@/app/hooks/users/useAuth";
function GoogleLogin() {
  const { handleGoogleLogin } = useAuth();
  // const login = async () => {
  //   const provider = new GoogleAuthProvider();
  //   const result = await signInWithPopup(auth, provider);

  //   console.log(result.user);
  // };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
}

export default GoogleLogin;
