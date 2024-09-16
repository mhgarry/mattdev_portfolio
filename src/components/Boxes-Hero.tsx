"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";

export default function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-primary z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1
        className={cn(
          "md:text-4xl text-xl text-primary-foreground relative z-20"
        )}
      >
        Hi, I'm <span className="text-secondary">Matthew Garry</span>
      </h1>
      <p className="text-center mt-2 text-primary-foreground relative z-20 text-xl">
        I'm a full-stack web developer with a passion for creating beautiful and
        functional web applications.
      </p>
    </div>
  );
}
