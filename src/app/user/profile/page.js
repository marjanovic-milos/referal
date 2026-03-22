"use client";

import React from "react";
import { Container } from "@chakra-ui/react";

import PageGuard from "@/app/components/pageGuard/authGuard";
import { UserLayout } from "@/app/components/userLayout/UserLayout";

import ProfileCard from "@/app/components/profileCard/ProfileCard";
const UserProfile = () => {
  return (
    <PageGuard>
      <UserLayout>
        <Container>
          <ProfileCard />
        </Container>
      </UserLayout>
    </PageGuard>
  );
};

export default UserProfile;
