import { useState } from "react";

const NAV_LINKS: string[] = ["Home", "Technologies", "Projects", "About", "Contact"];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Mobile: hamburger on the left */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>

        {/* Logo + brand name (centered on mobile via flex-1, left-aligned on desktop) */}
        <a
          href="#home"
          className="flex flex-1 items-center justify-center gap-2 md:mr-8 md:flex-none md:justify-start"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-sm font-bold text-white">
            DS
          </span>
          <span className="text-lg font-bold">
            Dev <span className="text-brand-gradient">Stack</span>
          </span>
        </a>

        {/* Desktop center nav links */}
        <ul className="hidden flex-1 items-center justify-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link, index) => (
            <li key={link}>
              <a
                href={index === 0 ? "#home" : `#${link.toLowerCase()}`}
                className={
                  index === 0
                    ? "text-pink-600"
                    : "transition hover:text-pink-600"
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3 md:gap-4">
          <button
            type="button"
            className="whitespace-nowrap text-xs font-medium text-slate-700 hover:text-slate-900 sm:text-sm"
          >
            Sign In
          </button>
          <button
            type="button"
            className="whitespace-nowrap rounded-full bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-4 sm:py-2 sm:text-sm"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <ul className="flex animate-[fadeIn_0.15s_ease-out] flex-col gap-1 border-t border-slate-100 bg-white px-6 py-3 text-sm font-medium text-slate-600 md:hidden">
          {NAV_LINKS.map((link, index) => (
            <li key={link}>
              <a
                href={index === 0 ? "#home" : `#${link.toLowerCase()}`}
                className="block rounded-md px-2 py-2 hover:bg-slate-50 hover:text-pink-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
