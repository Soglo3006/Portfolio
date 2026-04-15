"use client"

import { useState } from "react"
import { FileText, Github, Linkedin, Mail, Phone } from "lucide-react"

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexandre-booh-louha/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Soglo3006",
    icon: Github,
    external: true,
  },
  {
    label: "CV / Resume",
    href: "/cv.pdf",
    icon: FileText,
    external: false,
  },
  {
    label: "Email",
    href: "mailto:ablbooh0@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "514-581-0256",
    href: "tel:+15145810256",
    icon: Phone,
    external: false,
  },
]

function CornerMarkers() {
  const s = 8
  const style = (pos: React.CSSProperties): React.CSSProperties => ({
    position: "absolute",
    width: s,
    height: s,
    ...pos,
  })
  const b = "1.5px solid var(--foreground)"

  return (
    <>
      <span style={style({ top: 10, left: 10, borderTop: b, borderLeft: b })} />
      <span style={style({ top: 10, right: 10, borderTop: b, borderRight: b })} />
      <span style={style({ bottom: 10, left: 10, borderBottom: b, borderLeft: b })} />
      <span style={style({ bottom: 10, right: 10, borderBottom: b, borderRight: b })} />
    </>
  )
}

function ContactCard({ label, href, icon: Icon, external }: typeof LINKS[0]) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: "1",
        borderRadius: "1rem",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        textDecoration: "none",
        overflow: "hidden",
      }}
    >
      <CornerMarkers />

      {/* Icon */}
      <Icon
        style={{
          width: 32,
          height: 32,
          color: "var(--muted-foreground)",
          strokeWidth: 1.25,
          transition: "transform 0.35s ease",
          transform: hovered ? "translateY(-12px)" : "translateY(0px)",
        }}
      />

      {/* Label — slides up from below on hover */}
      <span
        style={{
          position: "absolute",
          bottom: "28%",
          fontSize: "0.8rem",
          fontWeight: 500,
          color: "var(--foreground)",
          letterSpacing: "0.01em",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0px)" : "translateY(10px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </a>
  )
}

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
          width: "100%",
          maxWidth: 560,
        }}
      >
        {LINKS.map((link) => (
          <ContactCard key={link.label} {...link} />
        ))}
      </div>
    </main>
  )
}
