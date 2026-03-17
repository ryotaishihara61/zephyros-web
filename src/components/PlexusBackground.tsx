"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function PlexusBackground() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: !isMobile, mode: "grab" },
        resize: { enable: true },
      },
      modes: {
        grab: { distance: 160, links: { opacity: 0.5 } },
      },
    },
    particles: {
      number: {
        value: isMobile ? 40 : 90,
        density: { enable: true },
      },
      color: { value: "#a8c0e8" },
      links: {
        enable: true,
        color: "#a8c0e8",
        distance: 140,
        opacity: 0.18,
        width: 0.8,
      },
      move: {
        enable: true,
        speed: isMobile ? 0.4 : 0.7,
        direction: "none",
        outModes: { default: "bounce" },
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2.5 } },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <Particles
      id="plexus"
      options={options}
      className="absolute inset-0 z-0"
    />
  );
}
