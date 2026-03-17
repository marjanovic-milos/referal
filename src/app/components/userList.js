"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/users";

function UsersList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users</p>;

  return (
    <div>
      {data?.map((user) => (
        <div key={user.id}>
          {user.name} — {user.lastname}
        </div>
      ))}
    </div>
  );
}
export default UsersList;
