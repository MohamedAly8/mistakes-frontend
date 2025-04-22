"use client";

import MistakeMasonry from "@/components/MistakeMasonry";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col overflow-y-auto bg-gray-100 h-full justify-center  ">
      <div className="fixed top-0 shadow-sm bg-white w-full z-50 flex justify-between items-center p-5 gap-2 ">
        <div className="flex items-center gap-5">
          <div className="w-8 h-8 bg-slate-600 rounded-full"></div>
          <button className="font-display text-2xl text-slate-600 cursor-pointer">
            Mistakes
          </button>
          <Link
            href="/"
            className="bg-slate-600 p-2 pl-5 pr-5 text-white rounded-lg hover:bg-slate-700 cursor-pointer"
          >
            Home
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="/intakeform"
            className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 cursor-pointer"
          >
            Contribute
          </Link>
        </div>
      </div>

      <MistakeMasonry />

      {/* Daily Quote  */}
      <div className="relative flex justify-center w-9/10 md:w-1/2 items-center p-5 gap-2 bg-[url(/mountains.jpg)] text-white mx-auto rounded-2xl h-100 bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-slate-600 opacity-80 rounded-2xl"></div>
        <div className="relative z-10 text-center p-10 h-full flex flex-col justify-between">
          <div className="text-4xl">Daily Quote</div>
          <div className="text-3xl">
            A man will have nothing but what he strives for.
          </div>
          <div className="text-2xl ml-auto">Quran 53:39</div>
        </div>
      </div>

      {/* Share a mistake title */}
      <div className="flex justify-center items-center mt-10 pt-20 pb-20">
        <h1 className="text-4xl font-bold text-slate-600">Share a Mistake</h1>
        <Link
          href="/intakeform"
          className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 cursor-pointer ml-5"
        >
          Contribute
        </Link>
      </div>

      {/* footer with copyright */}
      <div className="flex justify-center items-center mt-10 mb-5">
        <h1 className="text-sm font-bold text-slate-600">
          © 2025 Mistakes. All rights reserved.
        </h1>
      </div>
    </div>
  );
}
