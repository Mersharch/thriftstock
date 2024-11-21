import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="flex flex-row flex-1 min-h-screen px-10 lg:pt-10">
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        <div className="flex-1 flex flex-col items-center">
          <h1 className="font-brittany text-primary text-6xl md:text-7xl lg:text-8xl">
            About Us
          </h1>
          <h3 className="font-bold lg:text-xl pt-6 md:pt-12">
            Connect with us on our social media platforms!
          </h3>
          <div className="flex  items-center space-x-4 pt-5">
            <Phone className="w-5 h-5" />
            <span className="font-bold text-lg">+233 32 456 5677</span>
          </div>
        </div>
        <div className="text-black flex-1 space-y-4 md:space-y-5">
          <p className="text-base lg:text-sm xl:text-lg leading-7 text-justify">
            <span className="text-black font-bold">At Event Studios,</span> we
            take immense pride in being recognized as a premier photography
            company that is wholeheartedly dedicated to capturing the essence of
            your most cherished moments.{" "}
          </p>
          <p className="text-base lg:text-sm xl:text-lg leading-7 text-justify">
            Our passion for photography drives us to go above and beyond,
            ensuring that every shot reflects the beauty and emotion of the
            occasion.{" "}
          </p>
          <p className="text-base lg:text-sm xl:text-lg leading-7 text-justify">
            Whether it’s a joyous wedding celebration, an important corporate
            event, or a heartfelt family gathering, our talented and experienced
            team is committed to providing you with breathtaking images that not
            only capture the moment but also tell your unique story in a way
            that resonates with you for years to come.{" "}
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-end">
        <Image
          src={"/images/about-img.png"}
          width={500}
          height={500}
          alt="about-img"
          className="object-cover object-center self-end right-40 relative w-[400px] h-[400px] rounded-xl"
          priority
        />
      </div>
    </div>
  );
}

export default About;
