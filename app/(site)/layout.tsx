import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { SanityLive } from "@/sanity/lib/live";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const brittanySignature = localFont({
  src: "../fonts/BrittanySignature.ttf",
  variable: "--font-brittany-signature",
  weight: "100 900",
});
const centuryGothic = localFont({
  src: "../fonts/centurygothic.ttf",
  variable: "--font-century-gothic",
  weight: "400",
});
const crimsonText = localFont({
  src: "../fonts/CrimsonText-Bold.ttf",
  variable: "--font-crimson-text",
  weight: "900",
});
const ralewayBold = localFont({
  src: "../fonts/Raleway-Bold.ttf",
  variable: "--font-rale-bold",
  weight: "700",
});
const ralewayExtraBold = localFont({
  src: "../fonts/Raleway-ExtraBold.ttf",
  variable: "--font-rale-extra-bold",
  weight: "800",
});
const ralewayExtraLight = localFont({
  src: "../fonts/Raleway-ExtraLight.ttf",
  variable: "--font-rale-extra-light",
  weight: "200",
});
const ralewayLight = localFont({
  src: "../fonts/Raleway-Light.ttf",
  variable: "--font-rale-light",
  weight: "300",
});
const ralewayMedium = localFont({
  src: "../fonts/Raleway-Medium.ttf",
  variable: "--font-rale-medium",
  weight: "500",
});
const ralewayRegular = localFont({
  src: "../fonts/Raleway-Regular.ttf",
  variable: "--font-rale-regular",
  weight: "400",
});
const ralewaySemiBold = localFont({
  src: "../fonts/Raleway-SemiBold.ttf",
  variable: "--font-rale-semi-bold",
  weight: "600",
});

export const metadata: Metadata = {
  title: "The ThriftStock",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${brittanySignature.variable} 
          ${centuryGothic.variable} 
          ${crimsonText.variable} 
          ${ralewayExtraLight.variable} 
          ${ralewayLight.variable} 
          ${ralewayRegular.variable} 
          ${ralewayMedium.variable} 
          ${ralewaySemiBold.variable} 
          ${ralewayBold.variable} 
          ${ralewayExtraBold.variable} 
          antialiased flex-1 overflow-x-hidden bg-background scroll-smooth font-raleway`}
      >
        {/* NAVBAR */}
        <NavBar />
        <ScrollToTop />
        {children}
        <SanityLive />
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
