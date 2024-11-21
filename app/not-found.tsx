import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex w-full bg-primary h-screen flex-col items-center justify-center">
      <h1 className="text-xl font-bold text-primary-foreground">404</h1>
      <p className="text-lg text-primary-foreground">Page not found</p>
      <Link href="/" className="pt-4 text-primary-foreground underline">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
