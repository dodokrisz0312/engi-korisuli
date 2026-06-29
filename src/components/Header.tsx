"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Menu, Snowflake, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";

function isActiveLink(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isSignupActive = isActiveLink(pathname, "/jelentkezes");

  return (
    <header className="site-header">
      <Link href="/" className="logo" aria-label="Engi Korisuli kezdőlap">
        <span className="logo-mark">
          <Snowflake size={18} />
          <span>⛸</span>
        </span>
        <span className="logo-text">Engi Korisuli</span>
      </Link>

      <nav className="desktop-nav" aria-label="Főmenü">
        {navItems.map((item) => {
          const active = isActiveLink(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "is-active" : undefined}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link
        className={`header-cta ${isSignupActive ? "is-active" : ""}`}
        href="/jelentkezes"
        aria-current={isSignupActive ? "page" : undefined}
      >
        <CalendarDays size={18} /> Jelentkezés
      </Link>

      <button
        className="menu-button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Menü megnyitása"
      >
        {open ? <X /> : <Menu />}
      </button>

      <div id="mobile-menu" className={`mobile-panel ${open ? "is-open" : ""}`}>
        {navItems.map((item) => {
          const active = isActiveLink(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={active ? "is-active" : undefined}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          className={`mobile-cta ${isSignupActive ? "is-active" : ""}`}
          href="/jelentkezes"
          onClick={() => setOpen(false)}
        >
          <CalendarDays size={18} /> Jelentkezés
        </Link>
      </div>
    </header>
  );
}
