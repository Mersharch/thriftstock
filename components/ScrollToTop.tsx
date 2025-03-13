"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUpToLineIcon } from "lucide-react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <div className="hidden md:block fixed  bottom-5 right-20 cursor-pointer z-40">
        <Button onClick={scrollToTop} className="rounded-full w-min  p-4 ">
          <ArrowUpToLineIcon className="w-6 h-6 text-primary-foreground" />
        </Button>
      </div>
    )
  );
};

export default ScrollToTop;
