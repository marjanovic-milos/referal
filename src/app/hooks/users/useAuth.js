import { useMutation, useQueryClient } from "@tanstack/react-query";
import { auth } from "@/firebase/db";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createUser, getUser } from "@/app/services/users";
import { useSnackbar } from "notistack";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      router.push("/admin");
    },
  });

  const phoneToEmail = (phone) => `${phone.replace(/\s+/g, "")}@yourapp.com`;

  const checkUser = async (id) => await getUser(id);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);

    if (user) {
      try {
        const { status } = await checkUser(user?.uid);

        if (!status) {
          createUserMutation.mutate({
            uid: user?.uid,
            displayName: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL,
            role: "user",
          });
        } else {
          router.push("/admin");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleRegistration = async ({ phone, password }) => {
    const email = phoneToEmail(phone);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      if (user) {
        createUserMutation.mutate({
          uid: user?.uid,
          displayName: "",
          email: user?.email,
          photoURL: "",
          role: "user",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async ({ phone, password }) => {
    const email = phoneToEmail(phone);
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return { handleGoogleLogin, handleRegistration, handleLogin, checkUser };
};
