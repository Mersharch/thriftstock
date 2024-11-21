import NavBar from "@/components/NavBar";
import React from "react";

const OthersLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div
      className="flex-1 space-y-20
    "
    >
      <NavBar />
      {children}
    </div>
  );
};

export default OthersLayout;
