"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Camera,
  Car,
  GraduationCap,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import SmoothScrollLink from "@/components/SmoothScrollLink";
import { useEffect, useState } from "react";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const skills = [
    "Content Writing & Captioning",
    "Social Media Strategy & Publishing",
    "SEO Basics & Research",
    "Client Coordination & Campaign Planning",
    "Canva & Google Suite",
    "Meta Business Suite",
  ];

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/riffattonmoy/",
      Icon: Linkedin,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/riffat.tonmoy1",
      Icon: Facebook,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/riffat_tonmoy/",
      Icon: Instagram,
    },
    {
      label: "Flickr",
      href: "https://www.flickr.com/photos/riffattonmoy/",
      Icon: Camera,
    },
  ];

  const navLinks = [
    { label: "Ventures", href: "#ventures" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const experience = [
    {
      role: "Founder & Owner",
      company: "Crystal Valley",
      period: "Present",
      bullets: [
        "Leading operations, branding, and customer experience for a premium auto detailing studio.",
      ],
    },
    {
      role: "Head of Business",
      company: (
        <a href="https://grayvally.tech" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600">
          GrayVally Software Solutions
        </a>
      ),
      period: "Jan 2026 — Present",
      bullets: [
        "Overseeing business strategy, growth, and client relations for a dynamic software solutions company.",
        "Driving innovation and leading teams to deliver impactful digital products and services.",
      ],
    },
    {
      role: "Digital Marketing Executive",
      company: "BayShore Communication",
      period: "Nov 2024 — Dec 2025",
      bullets: [
        "Conduct legal and healthcare content research and plan digital marketing campaigns.",
        "Write engaging social media captions and posts; schedule and publish across Facebook, Instagram, and LinkedIn.",
        "Manage 8–14 client accounts monthly, coordinating with creative, strategy, and analytics teams.",
      ],
    },
    {
      role: "Content Manager",
      company: "Authlab",
      period: "Apr 2019 — Aug 2023",
      bullets: [
        "Led content strategy and creation across blog posts, articles, and marketing collateral.",
        "Collaborated with designers and developers to ensure content quality and consistency.",
        "Implemented basic SEO practices to improve organic search visibility.",
      ],
    },
  ];

  const education = [
    {
      title: "Bachelor of Arts in English",
      school: "American International University–Bangladesh (AIUB)",
      period: "Jan 2017 — Feb 2024",
      details: [
        "Major in Literature",
        "Second Major: Marketing Management",
      ],
    },
    {
      title: "Higher Secondary School Certificate",
      school: "Notre Dame College",
      period: "2014 — 2016",
      details: [],
    },
  ];

  return (
    <div
      id="top"
      className="min-h-screen bg-white/50 dark:bg-zinc-950/35 text-zinc-900 dark:text-zinc-100 selection:bg-blue-600 selection:text-white"
    >
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/55 dark:bg-zinc-950/35 backdrop-blur-md border-b border-zinc-200/70 dark:border-zinc-800/70">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            Riffat Tonmoy
          </Link>
          <div className="hidden sm:flex gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            {navLinks.map((item) => (
              <SmoothScrollLink
                key={item.label}
                href={item.href}
                className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                {item.label}
              </SmoothScrollLink>
            ))}
          </div>
          <button
            type="button"
            className="sm:hidden inline-flex flex-col gap-1.5 rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/80 dark:bg-zinc-900/80 p-2 backdrop-blur transition-opacity hover:opacity-80"
            aria-label="Toggle navigation"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="h-0.5 w-6 bg-zinc-900 dark:bg-zinc-100"></span>
            <span className="h-0.5 w-6 bg-zinc-900 dark:bg-zinc-100"></span>
            <span className="h-0.5 w-6 bg-zinc-900 dark:bg-zinc-100"></span>
          </button>
        </div>
      </nav>

      {isNavOpen && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/90 dark:bg-zinc-950/70 p-6 shadow-2xl backdrop-blur-xl sm:hidden">
          <div className="flex flex-col gap-4 text-lg text-zinc-900 dark:text-zinc-100">
            {navLinks.map((item) => (
              <SmoothScrollLink
                key={item.label}
                href={item.href}
                onClick={() => setIsNavOpen(false)}
                className="block font-semibold hover:text-blue-600 dark:hover:text-cyan-400"
              >
                {item.label}
              </SmoothScrollLink>
            ))}
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="mb-24">
          <div className="grid gap-10 md:grid-cols-[1.6fr_0.9fr] md:items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/70 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200/70 dark:border-zinc-800/70 text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Based in Dhaka, Bangladesh
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Building businesses.<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-700 to-indigo-700 opacity-80 saturate-75">
                  Perfecting details.
                </span>
              </h1>

              <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
                I am <strong className="text-zinc-900 dark:text-zinc-100">Riffat Tonmoy</strong>. An entrepreneur and car enthusiast turning passion into precision. Currently transforming the auto detailing industry at Crystal Valley.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://crystalvalley.autos"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
                >
                  Visit Crystal Valley <ExternalLink size={18} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-medium"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="md:pt-10">
              <div className="mx-auto max-w-[320px] overflow-hidden rounded-3xl shadow-sm">
                <div className="relative aspect-4/5 w-full">
                  <Image
                    src="/riffattonmoy.png"
                    alt="Riffat Tonmoy"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 320px, 280px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Venture (Spotlight) */}
        <section id="ventures" className="mb-24 scroll-mt-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8">Current Venture</h2>
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/60 backdrop-blur-sm border border-zinc-200/70 dark:border-zinc-800/70 p-8 md:p-12 transition-all hover:border-blue-500/50">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                    <Car size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Crystal Valley</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-lg mb-6">
                  A premium car detailing business ensuring showroom perfection. We combine technical expertise with a passion for automotive aesthetics.
                </p>
                <Link 
                  href="https://crystalvalley.autos" 
                  target="_blank"
                  className="inline-flex items-center text-blue-600 font-medium hover:underline underline-offset-4"
                >
                  Explore the Studio <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              {/* Decorative Element mimicking a shine/polish */}
              <div className="hidden md:block w-32 h-32 bg-linear-to-tr from-blue-500 to-teal-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="mb-24 scroll-mt-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2">
            <Briefcase size={16} /> Work Experience
          </h2>

          <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm overflow-hidden">
            {experience.map((item, idx) => (
              <div
                key={`${item.role}-${item.company}`}
                className={
                  "p-6 md:p-8 " +
                  (idx === 0
                    ? ""
                    : "border-t border-zinc-200/70 dark:border-zinc-800/70")
                }
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {item.company}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    {typeof item.period === 'string' && item.period.includes('Present') ? (
                      <span className="text-green-600 dark:text-green-400">{item.period}</span>
                    ) : (
                      <span className="text-zinc-500 dark:text-zinc-400">{item.period}</span>
                    )}
                  </p>
                </div>

                {item.bullets.length > 0 ? (
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mb-24 scroll-mt-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8 flex items-center gap-2">
            <GraduationCap size={16} /> Education
          </h2>

          <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm overflow-hidden">
            {education.map((item, idx) => (
              <div
                key={`${item.title}-${item.school}`}
                className={
                  "p-6 md:p-8 " +
                  (idx === 0
                    ? ""
                    : "border-t border-zinc-200/70 dark:border-zinc-800/70")
                }
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {item.school}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {item.period}
                  </p>
                </div>

                {item.details.length > 0 ? (
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* Key Skills */}
        <section id="skills" className="mb-24 scroll-mt-24">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-8">Key Skills</h2>

          <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm p-6 md:p-8">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/70 dark:bg-zinc-900/60 px-3 py-1 text-sm text-zinc-700 dark:text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="pt-12 border-t border-zinc-200 dark:border-zinc-800 scroll-mt-24">
          <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 backdrop-blur-sm p-6 md:p-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-bold text-xl mb-2">Let&apos;s Connect</h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-md">
                  Open for collaborations and business inquiries.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:riffattonnoy@gmail.com"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white"
                  >
                    <Mail size={18} /> riffattonnoy@gmail.com
                  </a>
                  <a
                    href="tel:+8801717158385"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    <Phone size={18} /> +8801717158385
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-zinc-50/60 dark:bg-zinc-900/50 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100/70 dark:hover:bg-zinc-900/70 transition-colors"
                      aria-label={s.label}
                      title={s.label}
                    >
                      <s.Icon size={16} />
                      <span>{s.label}</span>
                      <ExternalLink size={14} className="opacity-70" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} Riffat Tonmoy. All rights reserved. Developed by{" "}
            <a
              href="https://grayvally.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 underline underline-offset-4"
            >
              GrayVally Software Solutions
            </a>
            .
          </div>
        </section>

      </main>

      <SmoothScrollLink
        href="#top"
        className={`fixed bottom-5 right-5 z-50 rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-950/50 backdrop-blur-sm px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-200 hover:bg-white/85 dark:hover:bg-zinc-950/70 transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        Back to top
      </SmoothScrollLink>
    </div>
  );
}