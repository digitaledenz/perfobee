
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Menu,
    X,
    ArrowUpRight,
    ChevronDown,
    BookOpen,
    BriefcaseBusiness,
} from "lucide-react";

import ThemeToggle from "./theme-toggle";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
];

const resourceItems = [
    {
        name: "Blog",
        href: "/blog",
        icon: BookOpen,
    },
    {
        name: "Case Study",
        href: "/case-study",
        icon: BriefcaseBusiness,
    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const checkScroll = () => {
            setScrolled(window.scrollY > 180);
        };

        checkScroll();

        window.addEventListener("scroll", checkScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);


    return (
        <header className="relative z-50 w-full">
            <nav className="mx-auto flex h-20 w-full max-w-[1470px] items-center justify-between gap-4 px-6 lg:h-24 lg:px-12">

                {/* Brand Logo */}
                <Link
                    href="/"
                    aria-label="PerfoBee Home"
                    className="shrink-0"
                >
                    <Image
                        src="/perfobee-logo.svg"
                        alt="PerfoBee CRM"
                        width={170}
                        height={45}
                        priority
                        className="h-auto w-[145px] sm:w-[170px]"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-9 lg:flex">

                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-[var(--brand-primary)] dark:text-zinc-300 dark:hover:text-[var(--brand-secondary)]"
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* Desktop Resources Dropdown */}
                    <div
                        className="group relative"
                        onMouseEnter={() => setResourcesOpen(true)}
                        onMouseLeave={() => setResourcesOpen(false)}
                    >

                        <button
                            type="button"
                            aria-haspopup="true"
                            aria-expanded={resourcesOpen}
                            onClick={() => setResourcesOpen(!resourcesOpen)}
                            onMouseEnter={() => setResourcesOpen(true)}
                            onFocus={() => setResourcesOpen(true)}
                            className="flex cursor-pointer items-center gap-1.5 py-4 text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-[var(--brand-primary)] dark:text-zinc-300"
                        >
                            Resources
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${resourcesOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Animated Dropdown */}
                        <div
                            onMouseEnter={() => setResourcesOpen(true)}
                            onMouseLeave={() => setResourcesOpen(false)}
                            className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-2 transition-all duration-300 ease-out ${resourcesOpen
                                ? "visible translate-y-0 opacity-100"
                                : "invisible -translate-y-2 opacity-0 pointer-events-none"
                                }`}
                        >
                            <div className="overflow-hidden rounded-2xl border border-[#e8d8c9] bg-white/95 p-2 shadow-[0_22px_60px_rgba(100,55,15,0.16)] backdrop-blur-xl dark:border-[#493324] dark:bg-[#211a16]/95">

                                {resourceItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setResourcesOpen(false)}
                                            className="group/item flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-zinc-800 transition-all duration-200 hover:bg-[#fbf0e3] hover:text-[#9c500d] dark:text-zinc-200 dark:hover:bg-[#3c281b] dark:hover:text-[#f0ac49]"
                                        >
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f9e7d2] text-[#ae6014] transition-all duration-300 group-hover/item:bg-[#eac18f] dark:bg-[#49301e] dark:text-[#f0ac49]">
                                                <Icon size={19} strokeWidth={1.8} />
                                            </span>

                                            <span>{item.name}</span>

                                            <ArrowUpRight
                                                size={15}
                                                className="ml-auto text-[#bd741c] opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                                            />
                                        </Link>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <Link
                        href="/contact"
                        className="brand-button hidden items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold sm:inline-flex"
                    >
                        Get Started
                        <ArrowUpRight size={16} />
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        type="button"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                            setResourcesOpen(false);
                        }}
                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-[#e8d8c9] text-zinc-900 transition-colors hover:bg-[#fbf0e3] lg:hidden dark:border-[#493324] dark:text-white dark:hover:bg-[#3c281b]"
                    >
                        {menuOpen ? <X size={23} /> : <Menu size={23} />}
                    </button>
                </div>
            </nav>

            {/* Animated Mobile Menu */}

            {/* Animated Mobile Menu */}
            <div
                id="mobile-menu"
                inert={!menuOpen}
                aria-hidden={!menuOpen}
                className={`absolute left-4 right-4 top-20 z-50 grid
    transition-[grid-template-rows,opacity,transform]
    duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    motion-reduce:transition-none
    lg:hidden
    ${menuOpen
                        ? "grid-rows-[1fr] translate-y-0 opacity-100"
                        : "pointer-events-none grid-rows-[0fr] -translate-y-3 opacity-0"
                    }`}
            >
                <div className="min-h-0 overflow-hidden">
                    <div
                        className="rounded-2xl border border-[#e8d8c9]
      bg-white/95 p-4
      shadow-[0_25px_60px_rgba(100,55,15,0.16)]
      backdrop-blur-xl
      dark:border-[#493324]
      dark:bg-[#211a16]/95"
                    >
                        <div className="flex flex-col">

                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="rounded-xl px-4 py-3.5 text-sm
            font-medium text-zinc-800
            transition-colors duration-200
            hover:bg-[#fbf0e3]
            hover:text-[#9c500d]
            dark:text-white
            dark:hover:bg-[#3c281b]"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile Resources */}
                            <button
                                type="button"
                                onClick={() => setResourcesOpen(!resourcesOpen)}
                                aria-expanded={resourcesOpen}
                                aria-controls="mobile-resources"
                                className="flex w-full items-center
          justify-between rounded-xl px-4 py-3.5
          text-left text-sm font-medium
          text-zinc-800 transition-colors
          hover:bg-[#fbf0e3]
          dark:text-white
          dark:hover:bg-[#3c281b]"
                            >
                                Resources

                                <ChevronDown
                                    size={17}
                                    className={`transition-transform duration-300
              ${resourcesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Animated Resources Submenu */}
                            <div
                                id="mobile-resources"
                                inert={!resourcesOpen || !menuOpen}
                                className={`grid
            transition-[grid-template-rows,opacity]
            duration-300 ease-in-out
            motion-reduce:transition-none
            ${resourcesOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    <div className="ml-4 border-l-2 border-[#c57217]/40 pl-3">
                                        {resourceItems.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    onClick={() => {
                                                        setMenuOpen(false);
                                                        setResourcesOpen(false);
                                                    }}
                                                    className="flex items-center gap-3
                    rounded-xl px-4 py-3 text-sm
                    text-zinc-700 transition-colors
                    hover:bg-[#fbf0e3]
                    dark:text-zinc-200
                    dark:hover:bg-[#3c281b]"
                                                >
                                                    <span
                                                        className="flex h-9 w-9 items-center
                      justify-center rounded-lg
                      bg-[#f9e7d2] text-[#ae6014]
                      dark:bg-[#49301e]
                      dark:text-[#f0ac49]"
                                                    >
                                                        <Icon size={17} />
                                                    </span>

                                                    {item.name}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Mobile CTA */}
                            <Link
                                href="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="brand-button mt-4 rounded-xl
          px-5 py-3 text-center text-sm
          font-semibold sm:hidden"
                            >
                                Get Started
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}
