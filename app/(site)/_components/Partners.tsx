import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1 flex items-center justify-center">
        <Image
          src={"/svgs/arrows-left.svg"}
          alt="arrows-left"
          width={100}
          height={100}
          priority
          className="hidden md:block"
        />
        <p className="text-center w-full max-w-[400px] text-slate-400 text-lg">
          <span className="text-black">Event Studios</span> is a top photography
          company that captures unforgettable moments,{" "}
          <span className="text-black">provides stunning images</span> for
          weddings, corporate events and family gatherings.
        </p>
        <Image
          src={"/svgs/arrows-right.svg"}
          alt="arrows-left"
          width={100}
          height={100}
          priority
          className="hidden md:block"
        />
      </section>
    </main>
  );
};

export default Partners;
