import Hero from "./_components/Hero";
import OurWork from "./_components/OurWork";
import Partners from "./_components/Partners";

export default function Home() {
  return (
    <main className=" flex-1 w-full flex flex-col min-h-screen 2xl:container ">
      <Hero />
      <Partners />
      <OurWork />
    </main>
  );
}
