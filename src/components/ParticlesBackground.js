"use client";

import React, { useCallback } from "react";
import { loadStarsPreset } from "tsparticles-preset-stars";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          color: {
            value: "#05002c", // Set the background color to black
          },
        },
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              area: 800,
            },
          },
          move: {
            enable: true,
            speed: 1.5, // Adjust speed as needed
            straight: true,
            direction: "bottom-right", // Set the direction
            outModes: {
              default: "out",
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 400, // Adjust the repulsion distance
                duration: 0.4,
              },
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
