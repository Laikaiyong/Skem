"use client";

import ProfileCard from "../components/profileCard";
import TokenSwap from "../components/tokenSwap";

export default function Profile() {
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-[#7F664F] to-[#A4AD89] text-transparent bg-clip-text">
        Profile
      </h1>
      <ProfileCard />
    </main>
  );
}
