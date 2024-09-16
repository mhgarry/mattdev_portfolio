"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words1 = `Matthew Garry`;
const words2 = `Full-stack web developer with a passion for creating beautiful and functional web applications.`;

export function TextGenerate1() {
  return <TextGenerateEffect words={words1} />;
}

export default function Header() {
  return (
    <div className="h-62 max-w-7xl bg-background flex flex-col items-center justify-start overflow-hidden rounded-md  ">
      <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center text-foreground relative z-20">
        Matthew Garry
      </h1>
      <p className="text-center mt-2  relative z-20 lg:text-xl md:text-lg text-sm text-foreground mb-1">
        Full-stack web developer with a passion for creating beautiful and
        functional web applications.
      </p>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-accent to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-accent to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#003d04"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] mt-2"></div>
      </div>
    </div>
  );
}
