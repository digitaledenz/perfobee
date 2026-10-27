
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Mail } from "lucide-react";
import CopyrightYear from "./copyright-year";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";


const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Blog", href: "/blog" },
  { label: "Case Study", href: "/case-study" },
  { label: "Book a Demo", href: "/#book-demo" },
];


const socialItems = [
  { name: "Facebook", icon: FaFacebookF },
  { name: "Instagram", icon: FaInstagram },
  { name: "LinkedIn", icon: FaLinkedinIn },
  { name: "YouTube", icon: FaYoutube },
];


export default function Footer() {
  

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-[#e6d3bb] bg-[#f8f1e8] text-[#211910] dark:border-[#503625] dark:bg-[#17120f] dark:text-white"
    >
      {/* Ambient Copper Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_5%_100%,rgba(198,113,34,.10),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_5%_100%,rgba(198,113,34,.12),transparent_50%)]"
      />

      <div className="relative mx-auto w-full max-w-[1470px] px-6 pt-14 lg:px-12 lg:pt-20">

        {/* Footer Top */}
        <div className="grid gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">

          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="PerfoBee Home"
              className="inline-block"
            >
              <Image
                src="/perfobee-logo.svg"
                alt="PerfoBee CRM"
                width={180}
                height={55}
                className="h-auto w-[170px]"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-stone-600 dark:text-[#c5b7ab]">
              PerfoBee is a smart CRM solution designed
              to simplify customer management, organize
              sales opportunities and help businesses
              work more efficiently.
            </p>

            <Link
              href="/#book-demo"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9c500d] transition-colors hover:text-[#c57217] dark:text-[#f0ac49]"
            >
              Explore PerfoBee
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-base font-semibold tracking-tight">
              Quick Links
            </h2>

            <div className="mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#9c500d] to-[#e39124]" />

            <nav
              aria-label="Footer quick links"
              className="mt-6 grid gap-4"
            >
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-stone-600 transition-[color,transform] duration-200 hover:translate-x-1 hover:text-[#a65c12] dark:text-[#c5b7ab] dark:hover:text-[#f0ac49]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-base font-semibold tracking-tight">
              Social Media
            </h2>

            <div className="mt-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-[#9c500d] to-[#e39124]" />

            <p className="mt-6 text-sm leading-7 text-stone-600 dark:text-[#c5b7ab]">
              Connect with PerfoBee on social media.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialItems.map((social) => {
                const Icon = social.icon;

                return (
                  <span
                    key={social.name}
                    title={`${social.name} - link coming soon`}
                    aria-label={`${social.name} profile coming soon`}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e7cfaf] bg-white/80 text-[#a65c12] shadow-sm dark:border-[#64452c] dark:bg-[#2a2019] dark:text-[#e7a64d]"
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                );
              })}
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm text-stone-600 dark:text-[#c5b7ab]">
              <Mail size={18} className="text-[#b96510]" />
              <span>Have questions? Book a demo.</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#e6d3bb] py-6 text-center dark:border-[#493529] md:flex-row md:text-left">

          <p className="text-xs text-stone-600 dark:text-[#b9aaa0] sm:text-sm">
           &copy; <CopyrightYear /> PerfoBee. All Rights Reserved.
          </p>

          <p className="text-xs text-stone-600 dark:text-[#b9aaa0] sm:text-sm">
            Designed &amp; Developed by{" "}
            <a
              href="https://digitaledenz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="brand-gradient-text inline-flex items-center gap-1 font-bold hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c57217]"
            >
              Digital Edenz
              <ArrowUpRight
                size={15}
                className="text-[#c57217]"
              />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
