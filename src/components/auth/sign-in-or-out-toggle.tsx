"use client"

import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";

export default function SignInOrOutToggle() {
  const { sessionId } = useAuth();

  if (!sessionId) {
    return (
      <div>
        <SignInButton />
      </div>
    );
  }

  return (
    <div>
      <SignOutButton signOutOptions={{ sessionId }} />
    </div>
  );
}
