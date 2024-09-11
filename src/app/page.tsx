import React from "react";
import ThreeScene from "@/components/ThreeScene";
import StickyCards from "@/components/StickyCards";

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
        <div className="overflow-hidden  absolute">
          <ThreeScene />
        </div>
      </div>
      <div className="opacity-15  col-span-2">
        <StickyCards />
      </div>
    </main>
  );
};

export default Home;
