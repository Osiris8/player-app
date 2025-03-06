"use client";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";
import React from "react"; // Import React for type definitions

interface AuthProviderProps {
  children: React.ReactNode; // Define the type for the `children` prop
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  return <KindeProvider>{children}</KindeProvider>;
};
