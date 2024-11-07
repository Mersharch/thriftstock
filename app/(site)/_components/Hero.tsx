import NavBar from "@/components/NavBar";
import React from "react";

function Hero() {
  return (
    <div className="flex-1">
      <div className="relative flex flex-1 h-screen lg:h-[85vh]  bg-[url('../public/images/bg.jpg')] bg-cover">
        <div className="absolute inset-0 bg-black opacity-75 "></div>
        <div className="w-full z-10">
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default Hero;
