'use client';

import MainBody from "@/components/MainBody";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative">
      
      <div className="fixed inset-0 -z-10">
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-full object-cover">
          <source src="./background3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative z-10">
        <NavBar />
        <MainBody />
      </div>
    </div>
  );
}

