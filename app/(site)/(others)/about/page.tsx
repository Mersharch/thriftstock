import { Facebook, Instagram, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  const socials = [
    {
      name: "Instagram",
      link: "",
      icon: <Instagram className="w-6 h-6 text-black" />,
    },
    {
      name: "Twitter",
      link: "",
      icon: <Twitter className="w-6 h-6 text-black" />,
    },
    {
      name: "Facebook",
      link: "",
      icon: <Facebook className="w-6 h-6 text-black" />,
    },
  ];
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12 lg:py-16 overflow-x-hidden">
      {/* Main content section */}
      <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-8 lg:space-y-0 mb-12 lg:mb-20">
        {/* Title and contact section */}
        <div className="flex-1 flex flex-col items-center lg:items-center space-y-10">
          <h1 className="font-brittany text-primary text-6xl  lg:text-7xl xl:text-8xl text-center lg:text-left">
            About Us
          </h1>
          <h3 className="font-bold text-lg lg:text-xl  text-center lg:text-left">
            Connect with us on our social media platforms!
          </h3>
          {/* SOCIALS */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {socials.map((social, index) => (
              <Link
                href={social.link}
                className="flex items-center justify-center rounded-xl border border-slate-500 
                     cursor-pointer hover:bg-slate-50 transition-colors
                     w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                key={index}
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <Phone className="w-5 h-5" />
            <span className="font-bold text-base sm:text-lg">
              +233 32 456 5677
            </span>
          </div>
        </div>

        {/* Text content section */}
        <div className="flex-1 space-y-4 md:space-y-5 px-2 sm:px-4 lg:px-0">
          <p className="text-sm sm:text-base lg:text-sm xl:text-lg leading-relaxed text-justify">
            <span className="text-black font-bold">At Event Studios,</span> we
            take immense pride in being recognized as a premier photography
            company that is wholeheartedly dedicated to capturing the essence of
            your most cherished moments.
          </p>
          <p className="text-sm sm:text-base lg:text-sm xl:text-lg leading-relaxed text-justify">
            Our passion for photography drives us to go above and beyond,
            ensuring that every shot reflects the beauty and emotion of the
            occasion.
          </p>
          <p className="text-sm sm:text-base lg:text-sm xl:text-lg leading-relaxed text-justify">
            Whether it&apos;s a joyous wedding celebration, an important
            corporate event, or a heartfelt family gathering, our talented and
            experienced team is committed to providing you with breathtaking
            images that not only capture the moment but also tell your unique
            story in a way that resonates with you for years to come.
          </p>
        </div>
      </div>

      {/* Images section */}
      <div className="relative h-80 sm:h-96 md:h-[400px] lg:h-[400px] mt-8 lg:mt-0">
        <Image
          src="/images/about-img.png"
          width={500}
          height={500}
          alt="about-img"
          className="absolute object-cover object-center 
               w-72 sm:w-80 md:w-[400px] 
               h-56 sm:h-64 md:h-72 lg:h-[300px] 
               rounded-xl lg:rounded-3xl 
               transform lg:-rotate-[35deg] 
              left-[200px] md:left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:right-40
               top-10 lg:top-auto lg:bottom-10
               z-10"
          priority
        />
        <Image
          src="/images/about-blur.png"
          width={500}
          height={500}
          alt="about-img"
          className="absolute object-cover object-center 
               w-full lg:w-[350px] 
               h-full lg:h-72 
               rounded-xl lg:rounded-3xl 
               transform lg:rotate-[10deg] lg:-scale-x-100
               left-0 lg:left-auto lg:-right-32
               top-0 lg:top-auto lg:bottom-40"
          priority
        />
      </div>
    </div>
  );
}

export default About;
