"use client";
import NavBar from "@/components/NavBar";
import React from "react";
import * as motion from "framer-motion/client";
import { useAnimate } from "framer-motion";

function Hero() {
  const [scope, animate] = useAnimate();

  // useEffect(() => {
  //   animate(scope.current, { opacity: 0, x: -200 }, { duration: 0 });
  // }, [animate, scope]);

  return (
    <div className="flex-1">
      <div className="relative flex flex-1 h-screen lg:h-[100vh] bg-[url('../public/images/bg.jpg')] bg-cover bg-no-repeat bg-center">
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="w-full z-10 flex-1">
          <NavBar />
          <div className="flex flex-col text-white h-full items-center justify-end pb-[400px] md:pb-64 self-center">
            <div className="max-w-fit flex flex-col">
              <motion.h1
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "linear",
                  duration: 0.8,
                  damping: 150,
                  stiffness: 500,
                }}
                onAnimationComplete={(definition) => {
                  console.log(definition);

                  animate(scope.current, { opacity: 1, x: 0 });
                }}
                className="font-brittany text-7xl sm:text-4xl md:text-9xl"
              >
                Event Studios
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                ref={scope}
                className="font-raleway self-end text-2xl lg:text-xl md:text-lg sm:text-base mt-5"
              >
                Photography
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
