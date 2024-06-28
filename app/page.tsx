'use client'
import Image from "next/image";
import { Navbar } from "./components/navbar"
import { motion } from "framer-motion"
import { Spotlight } from "./components/ui/Spotlight";

import { FlipWords } from "./components/ui/flip-words";
export default function Home() {
  const words = ["Productivity", "Collaboration", "Communication", "Management", "Shaduling",]
  return (
    <div className="overflow-x-hidden">
      <Navbar></Navbar>
      <div className="max-w-screen-lg m-auto transition  delay-200 duration-200">

        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="absolute top-[15%] sm:top-[30%] left-[50%] sm:left-[20%] translate-x-[-50%] w-[90%] text-center sm:text-left sm:w-auto  sm:translate-x-0 text-2xl   sm:text-6xl font-bold">
          NexOffice is a purpose-built
          <br></br>tool for
          <FlipWords words={words} /> <br />
          <div className="text-lg font-light mt-3">Platform for modern business operations.</div>
          <button className="bg-white text-black mt-3nexths rounded-lg py-2 px-4 text-base font-normal transition hover:bg-white/90 hover:scale-110 duration-300">Start building</button>
        </div>
      </div>
    </div>
  );
}
