"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"

const ACCENT = "#E8A020"

const EXPERIENCE = [
  {
    period: "Avril 2026 — Present",
    role: "Co-founder & CTO",
    company: "Uneden",
    url: "https://uneden.ca",
    bullets: [
      "Built a full-stack local services marketplace (Next.js, Node.js, Supabase).",
      "Implemented a complete payment system with Stripe.",
      "Integrated real-time messaging, push notifications and FR/EN i18n.",
      "Deployed to production with CI/CD GitHub Actions, Sentry monitoring and 70+ automated tests.",
    ],
  },
  {
    period: "Sept 2025 — Present",
    role: "VP Innovation & Technology",
    company: "UdeM Entreprend",
    url: null,
    bullets: [
      "Built the official club website full-stack (React, FastAPI, PostgreSQL).",
      "Managed online registrations and event ticketing.",
      "Handled continuous maintenance and technical support.",
    ],
  },
  {
    period: "Oct — Déc 2025",
    role: "Web Developer",
    company: "Studio Soccer",
    url: null,
    bullets: [
      "Redesigned the official website with improved UX/UI.",
      "Collaborated with stakeholders to prioritize and deliver iterative improvements.",
    ],
  },
]

const EDUCATION = [
  {
    period: "In progress",
    degree: "Bachelor in Computer Science",
    school: "Université de Montréal",
    detail: "Algorithms, software engineering, AI, databases and systems.",
    current: true,
  },
  {
    period: "Completed",
    degree: "French Baccalaureate",
    school: "Collège Marie de France",
    detail: "Equivalent to College Diploma (DEC).",
    current: false,
  },
]

export default function About() {
  const [openJob, setOpenJob] = useState<number | null>(null)

  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-24 pt-28 pb-20 max-w-5xl mx-auto">

      {/* Bio */}
      <section className="space-y-8 mb-20">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-inter-tight), sans-serif" }}>
            Alexandre Booh Louha
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">Full-Stack Developer · Co-founder & CTO</p>
        </div>

        <div className="space-y-6 text-2xl sm:text-3xl text-muted-foreground leading-snug">
          <p>
            I'm a full-stack developer and computer science student at Université de Montréal,
            passionate about building software that solves real problems from conception to production.
          </p>
          <p>
            Right now, I'm Co-founder & CTO at{" "}
            <a href="https://uneden.ca" target="_blank" rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 decoration-1"
              style={{ textDecorationColor: ACCENT }}>
              Uneden
            </a>
            , a marketplace for local services where I handle all technical decisions.
          </p>
          <p>
            I'm also VP of Innovation & Technology at UdeM Entreprend, where I lead the tech
            strategy and built the club's full-stack platform from scratch.
          </p>
          <p>
            I care about the details: clean code, sharp interfaces, and shipping products
            that people actually use.
          </p>
        </div>

      </section>

      {/* Experience */}
      <section className="mb-20">
        <h2 className="mb-10 text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">
          Experience
        </h2>

        <div>
          {EXPERIENCE.map((job, i) => {
            const isOpen = openJob === i
            return (
              <div key={i} className="border-t border-border/40">
                <button
                  type="button"
                  onClick={() => setOpenJob(isOpen ? null : i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                >
                  <div className="flex gap-6 sm:gap-10 items-start">
                    <span className="font-mono text-xs text-muted-foreground mt-1.5 shrink-0 w-24 hidden sm:block leading-relaxed">
                      {job.period}
                    </span>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {job.role}
                        </h3>
                        {job.url && (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${job.company}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                      <p
                        className="font-mono text-xs overflow-hidden transition-all duration-300"
                        style={{ maxHeight: isOpen ? "0px" : "18px", opacity: isOpen ? 0 : 0.4 }}
                      >
                        Click for more
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-muted-foreground mt-1.5 shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="pb-6 pl-0 sm:pl-[calc(6rem+2.5rem)]">
                    <ul className="space-y-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: ACCENT }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
          <div className="border-t border-border/40" />
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="mb-10 text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">
          Education
        </h2>

        <div>
          {EDUCATION.map((edu, i) => (
            <div key={i} className="border-t border-border/40 py-6 flex gap-6 sm:gap-10">
              <div className="w-24 shrink-0 hidden sm:flex items-start gap-2 pt-1">
                {edu.current && <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shrink-0 mt-1" />}
                <span className="font-mono text-xs text-muted-foreground leading-relaxed">{edu.period}</span>
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-medium">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
                <p className="font-mono text-xs text-muted-foreground/60">{edu.detail}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-border/40" />
        </div>
      </section>

    </main>
  )
}
