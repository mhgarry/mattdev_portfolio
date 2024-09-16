import React from "react";
import Hero from "@/components/Hero";
const Home = () => {
  return (
    //     <div className="relative inset-0 z-100">
    //     <ThreeScene />
    //   </div>

    // <div className="relative w-full h-screen">
    //   {/* Three.js Scene */}

    //   {/* Components on top of the Three.js Scene */}
    //   <div className="absolute z-10 w-lg max-w-3xl">
    //     <StickyCards />
    //   </div>
    // </div>

    <main className="flex flex-col g-background items-center h-[100vh] bg-background">
      <div className="max-w-7xl py-6">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
