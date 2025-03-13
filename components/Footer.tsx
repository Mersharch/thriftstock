import { Facebook, Instagram, Link2, Phone, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  const socials = [
    {
      name: "Instagram",
      link: "",
      icon: <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />,
    },
    {
      name: "Twitter",
      link: "",
      icon: <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />,
    },
    {
      name: "Facebook",
      link: "",
      icon: <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />,
    },
  ];

  return (
    <footer className="w-full flex flex-col space-y-3 px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 md:pt-10 pb-4 sm:pb-5 border-t-[0.5px] border-slate-400">
      <div className="w-full flex flex-col-reverse sm:flex-row items-center space-y-5 sm:space-y-0 sm:justify-between">
        {/* COPYRIGHT */}
        <span className="text-slate-700 text-xs sm:text-sm font-bold mt-3 sm:mt-0">
          &copy;Thriftstock&trade; All rights reserved.
        </span>

        {/* LINKS */}
        <div className="flex items-center space-x-4">
          <Link
            href={"/customer-care"}
            className="text-slate-700 text-xs sm:text-sm font-bold hover:text-slate-900 transition-colors"
          >
            FAQs
          </Link>
          <Link
            href={"/customer-care/#returns"}
            className="text-slate-700 text-xs sm:text-sm font-bold hover:text-slate-900 transition-colors"
          >
            Return Policy
          </Link>
        </div>

        {/* SOCIALS */}
        <div className="flex flex-row items-center space-x-3 sm:space-x-2">
          {socials.map((social, index) => (
            <Link
              target="_blank"
              href={social.link}
              key={index}
              className="flex items-center hover:scale-110 transition-transform"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* <Link href={""} target="_blank" className=" flex space-x-2">
        <span className="text-slate-600 text-sm">Built by Mershack</span>

        <Link2 className="w-5 h-5 text-slate-300" />
      </Link> */}
    </footer>
  );
}

export default Footer;
