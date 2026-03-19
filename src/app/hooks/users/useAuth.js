import { useMutation, useQueryClient } from "@tanstack/react-query";
import { auth } from "@/firebase/db";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUser, getUser } from "@/app/services/users";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter(); // ✅ Uncomment this

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      enqueueSnackbar("Uspesna registracija!");
      router.push("/admin");
    },
  });

  const checkUser = async (id) => {
    const { status } = await getUser(id);
    return status;
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    if (user) {
      try {
        const data = await checkUser(user?.uid);
        if (!data) {
          mutation.mutate({
            uid: user?.uid,
            displayName: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
          });
        } else {
          router.push("/admin"); // ✅ Navigate for existing users
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return { handleGoogleLogin };
};
