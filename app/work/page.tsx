"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const PROJECTS = [
  {
    name: "Uneden",
    url: "https://uneden.ca",
    github: null,
    image: "/Logo.png",
    bg: "#111",
  },
  {
    name: "PL Match Predictor",
    url: "https://premierleaguesimulator.netlify.app",
    github: null,
    image: "/premierleague.jpg",
    bg: "#111",
  },
  {
    name: "UdeM Entreprend",
    url: "https://udementreprend.ca/",
    github: null,
    image: "/UE.jpg",
    bg: "#111",
  },
  {
    name: "AI Fake News Detector",
    url: null,
    github: "https://github.com/Soglo3006/ai_fake_news_detector_2",
    image: "/fakenews.jpg",
    bg: "#111",
  },
  {
    name: "FlappyEnemy",
    url: null,
    github: "https://github.com/Soglo3006/FlappyEnemy",
    image: "/FlappyEnemy.png",
    bg: "#111",
  },
  {
    name: "MaVille",
    url: null,
    github: "https://github.com/Soglo3006/MaVille",
    image: null,
    bg: "#111118",
  },
]

function ProjectCard({ name, url, github, image, bg }: typeof PROJECTS[0]) {
  const [hovered, setHovered] = useState(false)

  const link = url || github
  const isExternal = !!url

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: bg,
        aspectRatio: "1 / 1",
        border: "1px solid rgba(255,255,255,0.07)",
        cursor: link ? "pointer" : "default",
      }}
    >
      {/* Image (if exists) */}
      {image && (
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      )}

      {/* No image — centered name */}
      {!image && (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <p
            className="text-white/70 font-semibold text-lg text-center leading-snug"
            style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
          >
            {name}
          </p>
        </div>
      )}

      {/* Bottom gradient + name (only when image exists) */}
      {image && (
        <div
          className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-10"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }}
        >
          <p
            className="text-white font-semibold text-sm"
            style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}
          >
            {name}
          </p>
        </div>
      )}

      {/* Name at bottom when no image */}
      {!image && (
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
          <p
            className="text-white/40 font-mono text-xs"
          >
            {name}
          </p>
        </div>
      )}

      {/* Hover overlay */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: hovered ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s ease, background 0.3s ease",
          }}
        >
          <span
            className="flex items-center gap-2 font-mono text-sm font-medium px-5 py-2.5 rounded-xl"
            style={{
              background: "rgba(232,160,32,0.15)",
              color: "#E8A020",
              border: "1px solid rgba(232,160,32,0.4)",
              backdropFilter: "blur(8px)",
              transform: hovered ? "translateY(0)" : "translateY(10px)",
              transition: "transform 0.35s ease",
            }}
          >
            {isExternal ? <ExternalLink className="w-3.5 h-3.5" /> : <Github className="w-3.5 h-3.5" />}
            {isExternal ? "View" : "GitHub"}
          </span>
        </a>
      )}
    </div>
  )
}

export default function Work() {
  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-16 pt-28 pb-20 max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-10">
        <h1
          className="leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-inter-tight), sans-serif",
            fontWeight: 900,
            fontStyle: "italic",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
          }}
        >
          Work
        </h1>
        <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase hidden sm:block">
          {PROJECTS.length} projects
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </main>
  )
}
