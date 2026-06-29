'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Mail, Linkedin } from 'lucide-react';

export default function Home() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Michael Kwakwa",
    "jobTitle": "Creative Director",
    "url": "https://michaelkwakwa.com",
    "email": "Letswork@michaelkwakwa.com",
    "sameAs": [
      "https://www.linkedin.com/in/michael-akwasi-kwakwa-",
      "https://www.tiktok.com/@whoismichaelkwakwa_",
      "https://www.youtube.com/@mikeyshy"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "FairPlayer",
        "url": "https://www.fairplayer.io",
        "description": "The future of music streaming"
      },
      {
        "@type": "Organization",
        "name": "OwnPlay",
        "description": "Creative Ecosystem"
      }
    ],
    "foundingMember": [
      {
        "@type": "Organization",
        "name": "This Ability Group CIC",
        "description": "Inclusive opportunities",
        "foundingDate": "2026-06"
      }
    ],
    "creator": [
      {
        "@type": "CreativeWork",
        "name": "H.E.A.L Part One",
        "description": "A mental help guide",
        "url": "https://rebrand.ly/Heal-by-MichaelKwakwa",
        "genre": "Self-Help"
      },
      {
        "@type": "CreativeWork",
        "name": "Mikey Shy",
        "description": "Music, Visuals, Storytelling",
        "url": "https://www.youtube.com/@mikeyshy"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16">
        <header className="text-center opacity-0 animate-fade-in">
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

          {/* OwnPlayer - Flagship Platform */}
          <button
            onClick={() => setShowComingSoon(true)}
            className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer lg:col-span-3 opacity-0 animate-fade-in-up animation-delay-200"
          >
            <div className="h-52 flex items-center justify-center">
              <Image
                src="/logos/OWNPLAYER.IO_LOGO.png"
                alt="OwnPlayer logo"
                width={900}
                height={260}
                className="max-h-full w-auto object-contain"
              />
            </div>
            <p className="mt-5 text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
              Coming Soon
            </p>
          </button>

          {/* FairPlayer Smartlinks */}
          <a
            href="https://fairplayer.io/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer opacity-0 animate-fade-in-up animation-delay-300"
          >
            <div className="h-36 flex items-center justify-center">
              <Image
                src="/logos/FairPlayer_logo_2 copy.png"
                alt="FairPlayer Smartlinks logo"
                width={560}
                height={144}
                className="max-h-full w-auto object-contain"
              />
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Visit FairPlayer.io
            </p>
          </a>

          {/* Mikey Shy */}
          <a
            href="https://www.youtube.com/@mikeyshy"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 opacity-0 animate-fade-in-up animation-delay-300"
          >
            <div className="h-36 flex items-center justify-center">
              <Image
                src="/logos/Mikey-Shy-Logo-blk-tbf copy.png"
                alt="Mikey Shy logo"
                width={280}
                height={144}
                className="max-h-full w-auto object-contain"
              />
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Music · Visuals · Storytelling
            </p>
          </a>

          {/* H.E.A.L Part One */}
          <a
            href="https://rebrand.ly/Heal-by-MichaelKwakwa"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 opacity-0 animate-fade-in-up animation-delay-500"
          >
            <div className="h-36 flex items-center justify-center">
              <Image
                src="/logos/H.E.A.L_Alt_cover_1.2_(eBook) copy.jpg"
                alt="H.E.A.L Part One book cover"
                width={140}
                height={144}
                className="max-h-full w-auto object-contain shadow-md"
              />
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              H.E.A.L Part One · A mental help guide
            </p>
          </a>

          {/* H.E.A.L Part Two */}
          <button
            onClick={() => setShowComingSoon(true)}
            className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer relative opacity-0 animate-fade-in-up animation-delay-300"
          >
            <div className="h-36 flex items-center justify-center">
              <Image
                src="/logos/H_E_A_L_Part_2_cover_1-1 copy.png"
                alt="H.E.A.L Part 2 cover"
                width={112}
                height={144}
                className="max-h-full w-auto object-contain shadow-md"
              />
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              H.E.A.L Part 2
            </p>
            <p className="mt-1 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Coming Soon
            </p>
          </button>

          {/* This Ability Group CIC */}
          <button
            onClick={() => setShowComingSoon(true)}
            className="group flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 cursor-pointer opacity-0 animate-fade-in-up animation-delay-400"
          >
            <div className="h-36 flex items-center justify-center">
              <Image
                src="/logos/ChatGPT_Image_Sep_3,_2025,_06_59_19_PM copy.png"
                alt="This Ability Group CIC logo"
                width={144}
                height={144}
                className="max-h-full w-auto object-contain"
              />
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Inclusive opportunities
            </p>
          </button>

          {/* OwnPlay Technologies */}
          <button
            onClick={() => setShowComingSoon(true)}
            className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 cursor-pointer opacity-0 animate-fade-in-up animation-delay-600"
          >
            <div className="h-36 flex items-center justify-center">
              <Image
                src="/logos/OWNPLAY_TECHNOLOGIES.png"
                alt="OwnPlay Technologies logo"
                width={360}
                height={144}
                className="max-h-full w-auto object-contain"
              />
            </div>
            <p className="mt-6 text-xs text-neutral-600 leading-relaxed max-w-xs mx-auto">
              Coming Soon
            </p>
          </button>

        </main>
      </div>

      {/* New Footer Section */}
      <footer className="py-12 text-center bg-white opacity-0 animate-fade-in animation-delay-600">
        <div className="flex items-center justify-center gap-6 mb-4">
          <a
            href="mailto:Letswork@michaelkwakwa.com"
            className="text-neutral-900 dark:text-white hover:opacity-70 transition-all duration-200 hover:scale-105"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://www.tiktok.com/@whoismichaelkwakwa_"
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://www.linkedin.com/in/michael-akwasi-kwakwa-"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 dark:text-white hover:opacity-70 transition-all duration-200 hover:scale-105"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
          © 2026 Michael Kwakwa. All rights reserved.
        </p>
        <p className="text-xs font-light text-neutral-400 dark:text-neutral-500">
          Built by Michael Kwakwa — OWNPLAY™ Ecosystem.
        </p>
      </footer>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowComingSoon(false)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-2xl font-bold text-neutral-900">
              Coming Soon
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
