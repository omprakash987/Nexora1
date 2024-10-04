'use client'



import MainBody from "@/components/MainBody";
import NavBar from "@/components/NavBar";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <MainBody />
      
    </div>
  );
}
