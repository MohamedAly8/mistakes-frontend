"use client";

import ParticlesBackground from "@/components/ParticlesBackground";
import { useEffect, useState } from "react";
import IntakeForm from "@/components/IntakeForm";
import Link from "next/link";

const quotes = [
  "The only real mistake is the one from which we learn nothing.",
  "Mistakes are the portals of discovery.",
  "Our greatest glory is not in never failing, but in rising up every time we fail.",
  "The best way to not make mistakes is to not make decisions.",
  "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
  "It is wise to profit by the mistakes of others.",
  "We make mistakes, but in the grand scheme of things, these mistakes can lead to something beautiful.",
  "Don't be afraid to fail. Be afraid not to try.",
  "Every mistake you make is progress.",
  "The art of living lies less in eliminating our troubles than in growing with them.",
];

export default function Page() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTransitioning(true); // Start fade out

      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setTransitioning(false); // End fade in (opacity will go back to 1)
      }, 500); // Duration should match the CSS transition
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative flex flex-col p-b-20 p-5">
      <div className="absolute inset-0 z-[-1]">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-300">
        {/* div only displayed when size less than md */}

        <Link
          className="absolute top-5 left-5 text-gray-300 hover:text-gray-500"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <h1 className="md:mt-20 text-6xl font-bold">Mistakes</h1>
        <h2 className="mt-4 mb-10 text-2xl font-semibold text-center">
          A platform to share and learn from mistakes
        </h2>

        <IntakeForm />
        <p
          className={`text-xl transition-opacity duration-500 text-center ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {quotes[currentQuoteIndex]}
        </p>
      </div>
    </div>
  );
}
