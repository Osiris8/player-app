"use client";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

import Card from "@/components/Card";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  const { isAuthenticated } = useKindeBrowserClient();
  return (
    isAuthenticated && (
      <div>
        <Navbar />
        <Hero />
        <Card />
        <Footer />
      </div>
    )
  );
}
