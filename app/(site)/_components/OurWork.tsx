import { Button } from "@/components/ui/button";
import React from "react";

const OurWork = () => {
  return (
    <div className="flex-1">
      <div className="relative flex  flex-1 max-h-fit  bg-primary">
        <div className="absolute inset-0 bg-gradient-to-tl from-white opacity-20 from-5% to-60% "></div>
        <div className="w-full z-10  flex-1 flex p-20 justify-between">
          <div className="bg-primary-foreground  aspect-square flex-1  max-h-96 rounded-lg"></div>
          <div className=" max-w-[600px] flex flex-col space-y-10">
            <h2 className=" text-white font-brittany text-2xl">Our Works</h2>
            <p className=" text-white text-sm">
              At Event Studios, we specialize in creating breathtaking
              photography that immortalizes your most cherished moments. From
              elegant weddings to dynamic corporate events and joyful family
              gatherings, our team is{" "}
              <span className=" font-bold">
                dedicated to delivering stunning images
              </span>{" "}
              that tell your unique story.
            </p>
            <Button className="bg-secondary text-black rounded-full font-bold max-w-fit hover:bg-primary-foreground hover:scale-95 transition-all ease-in-out">
              See Our Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
