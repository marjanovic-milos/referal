"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../services/users";

function CreateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      // Invalidate and refetch users
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleCreate = () => {
    mutation.mutate({
      name: "Milos",
      email: "milos@test.com",
    });
  };
  // const deleteMutation = useMutation({
  //   mutationFn: deleteUser,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["users"] });
  //   },
  // });

  //   const updateMutation = useMutation({
  //   mutationFn: ({ id, data }) => updateUser(id, data),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["users"] });
  //   },
  // });

  // mutation.mutate({
  //   id: "USER_ID",
  //   data: { name: "Updated Name" },
  // });
  return (
    <button onClick={handleCreate} disabled={mutation.isPending}>
      {mutation.isPending ? "Creating..." : "Create User"}
    </button>
  );
}

export default CreateUser;
