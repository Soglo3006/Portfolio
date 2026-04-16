"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const NAV = [
  { label: "Home",    href: "/",        key: "H" },
  { label: "Work",    href: "/work",    key: "W" },
  { label: "About Me", href: "/about",   key: "A" },
  { label: "Contact", href: "/contact", key: "C" },
]

export default function Header() {
  const pathname = usePathname()
  const router   = useRouter()
  const { theme, setTheme } = useTheme()

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const nav = NAV.find((n) => n.key === e.key.toUpperCase())
      if (nav) router.push(nav.href)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [router])

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-0.5 px-2 py-1.5 rounded-2xl border border-border/40 bg-background/75 backdrop-blur-md shadow-sm">
        {NAV.map(({ label, href, key }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`px-3.5 py-1.5 rounded-xl text-sm transition-all duration-200 ${
                isActive
                  ? "text-foreground font-semibold bg-foreground/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </Link>
          )
        })}

        {/* Divider */}
        <div className="w-px h-4 bg-border/50 mx-1" />

        {/* Theme toggle */}
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center justify-center w-8 h-8 rounded-xl text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label="Toggle theme"
        >
          <Sun className="h-3.5 w-3.5 hidden dark:block" />
          <Moon className="h-3.5 w-3.5 block dark:hidden" />
        </button>
      </nav>
    </header>
  )
}
