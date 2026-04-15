import Link from "next/link"

const ACCENT = "#E8A020"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">

      {/* Name */}
      <h1
        style={{
          fontFamily: "var(--font-inter-tight), sans-serif",
          fontWeight: 900,
          fontStyle: "italic",
          fontSize: "clamp(3rem, 9vw, 7rem)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        Alexandre Booh Louha
      </h1>

      {/* Thin divider */}
      <div style={{ width: "100%", maxWidth: 600, height: 1, background: "var(--border)", margin: "1.5rem 0" }} />

      {/* Role */}
      <p className="text-base sm:text-lg text-muted-foreground">
        Full-Stack Developer · Co-founder & CTO at{" "}
        <a
          href="https://uneden.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline underline-offset-4 decoration-1"
          style={{ textDecorationColor: ACCENT }}
        >
          Uneden
        </a>
      </p>

      {/* Availability */}
      <div className="flex items-center gap-2 mt-6">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          Open to internships · Full-time · Freelance
        </span>
      </div>

      {/* CTA */}
      <div className="flex gap-6 mt-10">
        <Link
          href="/work"
          className="font-mono text-xs tracking-widest uppercase text-foreground transition-colors duration-200"
        >
          Work →
        </Link>
        <Link
          href="/about"
          className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          About Me →
        </Link>
        <Link
          href="/contact"
          className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Contact →
        </Link>
      </div>

    </main>
  )
}
