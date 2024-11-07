import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center md:grid w-full grid-cols-6 gap-3 p-4">
      <h3 className=" col-span-2">&copy;Copyright 2024 Event Studios</h3>
      <div className="col-span-2"></div>
      <h3 className=" col-span-2">built by Mershack</h3>
    </footer>
  );
}

export default Footer;
