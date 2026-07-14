"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./logo";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Buy",
    href: "/buy",
    dropdown: false,
  },
  {
    name: "Sell",
    href: "/sell",
        
  },
  {
    name: "About Us",
    href: "/#about",
  },
  {
    name: "Our Process",
    href: "/#process",
  },
  {
    name: "Testimonials",
    href: "/#testimonials",
  },
    {
    name: "Explore Properties",
    href: "/#featuredProperties",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#071A2F]/95 backdrop-blur-lg shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-1 text-sm font-medium text-white transition hover:text-[#C89B4D]"
              >
                {item.name}

                {item.dropdown && (
                  <ChevronDown
                    size={16}
                    className="transition group-hover:rotate-180"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
          <button className="rounded-xl bg-gradient-to-r from-[#f8e75a] via-[#e9b33a] via-[#d58b2e] to-[#c65a22] px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Let's Talk
          </button>


          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#071A2F] transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="container-custom py-6">
          <div className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between border-b border-white/10 pb-3 text-white"
              >
                {item.name}

                {item.dropdown && <ChevronDown size={18} />}
              </Link>
            ))}

            <button className="mt-4 rounded-xl bg-[#C89B4D] py-3 font-semibold text-white">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}