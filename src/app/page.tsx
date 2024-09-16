import React from "react";
import ThreeScene from "@/components/ThreeScene";
import BoxesHero from "@/components/Boxes-Hero";

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

    <main className="grid grid-cols-4 grid-rows-1 gap-4">
      <div className="relative w-[100vw] h-[100vh]">
        <div className="absolute inset-0 overflow-hidden">
          <ThreeScene />
        </div>
        <div className="absolute inset-0 z-10">
          <BoxesHero />
        </div>
      </div>
    </main>
  );
};

export default Home;
