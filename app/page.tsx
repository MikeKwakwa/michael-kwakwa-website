'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Mail, Instagram } from 'lucide-react';

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [showTAGMessage, setShowTAGMessage] = useState(false);
  const [showHEALMessage, setShowHEALMessage] = useState(false);
  const [showOwnPlayMessage, setShowOwnPlayMessage] = useState(false);

  useEffect(() => {
    if (showOwnPlayMessage) {
      const timer = setTimeout(() => {
        setShowOwnPlayMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showOwnPlayMessage]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <header className="text-center">
          <h1 className="text-xs tracking-[0.25em] uppercase text-neutral-500">
            MICHAEL KWAKWA
          </h1>
          <p className="text-xs mt-1 text-neutral-500">
            Creative Director · Founder · Visionary
          </p>
          <div className="mt-4 h-px w-24 bg-neutral-200 mx-auto" />
        </header>

        <div className="mt-20 md:mt-24" />

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 lg:gap-x-12">

          {/* FairPlayer - Flagship Platform */}
          <a
            href="https://www.fairplayer.io"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 lg:col-span-3"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              FairPlayer
            </h2>

            <p className="mt-5 text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
              The future of music streaming
            </p>
          </a>

          {/* Mikey Shy */}
          <a
            href="https://www.youtube.com/@mikeyshy"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
          >
            <div className="h-28 flex items-center justify-center">
              <Image
                src="/logos/mikey-shy-logo-blk-tbf.png"
                alt="Mikey Shy logo"
                width={220}
                height={112}
                className="max-h-full w-auto object-contain"
              />
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Music · Visuals · Storytelling
            </p>
          </a>

          {/* OwnPlay */}
          <button
            onClick={() => setShowOwnPlayMessage(true)}
            className="group flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 cursor-pointer"
          >
            <div className="flex items-center justify-center h-28">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[10px] border-l-black border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1" />
                </div>
                <span className="text-3xl font-bold tracking-tight text-neutral-900">
                  OwnPlay™
                </span>
              </div>
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Creative Ecosystem
            </p>
          </button>

          {/* H.E.A.L Part One */}
          <a
            href="https://rebrand.ly/Heal-by-MichaelKwakwa"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900"
          >
            <div className="h-28 flex items-center justify-center">
              <Image
                src="/logos/h.e.a.l_alt_cover_1.2_(ebook).jpg"
                alt="H.E.A.L Part One book cover"
                width={110}
                height={112}
                className="max-h-full w-auto object-contain shadow-md"
              />
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              H.E.A.L Part One · A mental help guide
            </p>
          </a>

          {/* H.E.A.L Part Two */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowHEALMessage(true);
            }}
            className="group flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 relative cursor-pointer"
          >
            <div className="absolute -top-3 right-1/2 translate-x-1/2">
              <span className="inline-block px-2 py-0.5 text-[9px] tracking-[0.15em] uppercase bg-emerald-100 text-emerald-700 border border-emerald-300 rounded">
                In Development
              </span>
            </div>

            <div className="flex flex-col items-center justify-center h-28">
              <span className="text-2xl font-semibold tracking-[0.2em] text-sky-500">
                H.E.A.L
              </span>
              <span className="text-xs mt-1 text-neutral-500">Part Two</span>
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Hope · Empowerment · Attitude · Legacy
            </p>
          </a>

          {/* This Ability Group CIC */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowTAGMessage(true);
            }}
            className="group flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 cursor-pointer"
          >
            <div className="flex items-center justify-center h-28">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full border-4 border-blue-600 flex items-center justify-center bg-white">
                  <div className="flex flex-col items-center -space-y-1">
                    <span className="text-blue-600 font-bold text-sm">TA</span>
                    <span className="text-cyan-500 font-bold text-sm">G</span>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-lg font-bold text-blue-600 leading-tight">This</span>
                  <span className="text-lg font-bold text-blue-600 leading-tight">Ability</span>
                  <span className="text-lg font-bold leading-tight">
                    <span className="text-blue-600">Group </span>
                    <span className="text-black">CIC</span>
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Inclusive opportunities
            </p>
          </a>

          {/* Future Projects Placeholder */}
          <div className="flex flex-col items-center text-center opacity-40">
            <div className="flex items-center justify-center h-28">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-neutral-300 flex items-center justify-center">
                <span className="text-4xl text-neutral-300">+</span>
              </div>
            </div>
            <p className="mt-6 text-xs text-neutral-400 tracking-[0.15em] uppercase">
              More Projects
            </p>
            <p className="mt-1 text-[10px] text-neutral-400">
              Coming Soon
            </p>
          </div>

        </main>
      </div>

      {/* New Footer Section */}
      <footer className="py-12 text-center bg-white">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a
            href="mailto:Letswork@michaelkwakwa.com"
            className="text-neutral-900 dark:text-white hover:opacity-70 transition-all duration-200 hover:scale-105"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@_somebodyshero"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-900 dark:text-white hover:opacity-70 transition-all duration-200 hover:scale-105"
            aria-label="TikTok"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/somebodyshero/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-900 dark:text-white hover:opacity-70 transition-all duration-200 hover:scale-105"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          © 2026 Michael Kwakwa. All rights reserved.
        </p>
        <p className="text-xs font-light text-neutral-400 dark:text-neutral-500">
          Built by Michael Kwakwa — OWNPLAY™ Ecosystem.
        </p>
      </footer>

      {/* This Ability Group Modal */}
      {showTAGMessage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowTAGMessage(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-20 h-20 mx-auto rounded-full border-4 border-blue-600 flex items-center justify-center bg-white shadow-lg mb-6">
              <div className="flex flex-col items-center -space-y-1">
                <span className="text-blue-600 font-bold text-lg">TA</span>
                <span className="text-cyan-500 font-bold text-lg">G</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              This Ability Group CIC
            </h3>
            <p className="text-lg text-neutral-600 mb-6">
              Launching April 2026
            </p>
            <button
              onClick={() => setShowTAGMessage(false)}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* H.E.A.L Part Two Modal */}
      {showHEALMessage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowHEALMessage(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center justify-center mb-6">
              <span className="text-4xl font-semibold tracking-[0.2em] text-sky-500">
                H.E.A.L
              </span>
              <span className="text-base mt-1 text-neutral-500">Part Two</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Hope · Empowerment · Attitude · Legacy
            </h3>
            <p className="text-lg text-neutral-600 mb-6">
              In Development
            </p>
            <button
              onClick={() => setShowHEALMessage(false)}
              className="px-6 py-2 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* OwnPlay Modal */}
      {showOwnPlayMessage && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
          onClick={() => setShowOwnPlayMessage(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full text-center animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-2xl font-medium text-neutral-900">
              OWNPLAY™ — Launching 2026
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
