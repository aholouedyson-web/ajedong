import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white mt-auto">
      {/* Wave */}
      <div className="relative h-16 bg-gray-50 overflow-hidden">
        <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,64 L0,32 Q360,0 720,32 Q1080,64 1440,32 L1440,64 Z" fill="#052e16" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                <svg width="44" height="44" viewBox="0 0 200 200" className="w-11 h-11">
                  <defs>
                    <radialGradient id="g1f" cx="35%" cy="30%">
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#14532d" />
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="92" fill="url(#g1f)" />
                  <polygon points="100,40 112,86 160,86 120,112 132,158 100,132 68,158 80,112 40,86 88,86" fill="#d02626" opacity="0.95" />
                  <path d="M120 110c6-8 18-10 28-6 4 2 6 6 6 10 0 8-8 18-22 20-10 1-24-2-32-12" fill="#2b9bf0" opacity="0.95" />
                  <path d="M50 120c20 18 46 24 74 6" stroke="#0ea05b" strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-lg text-green-300" style={{ fontFamily: "var(--font-display)" }}>
                  AJED
                </div>
                <div className="text-xs text-green-400">Association Des Jeunes Étoiles de Demain</div>
              </div>
            </div>
            <p className="text-green-200/70 text-sm leading-relaxed max-w-sm">
              Une organisation à but non lucratif qui aspire à un monde de solidarité, facilitant
              les échanges autour des activités socioculturelles, éducatives et sportives.
            </p>
            <div className="flex gap-3 mt-5">
              {["facebook", "instagram", "twitter", "youtube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors duration-300 text-sm"
                  aria-label={s}
                >
                  {s === "facebook" && "f"}
                  {s === "instagram" && "ig"}
                  {s === "twitter" && "tw"}
                  {s === "youtube" && "yt"}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-green-300 mb-4 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Accueil" },
                { to: "/galerie", label: "Galerie" },
                { to: "/a-propos", label: "À Propos" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link href={l.to} className="text-green-200/70 hover:text-green-300 text-sm transition-colors duration-200">
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-green-300 mb-4 uppercase text-xs tracking-widest">Nous Rejoindre</h4>
            <ul className="space-y-2 text-sm text-green-200/70">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">📍</span>
                <span>Siège social, Votre Ville</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">✉</span>
                <span>contact@ajed.org</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-0.5">☎</span>
                <span>+00 00 00 00 00</span>
              </li>
            </ul>
            <Link
              href="/contact#soutenir"
              className="mt-5 inline-block text-sm font-bold px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white transition-colors duration-300"
            >
              ❤ Faire un Don
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-green-900/60 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-green-400/60">
          <span>© 2025 AJED — Association Des Jeunes Étoiles de Demain. Tous droits réservés.</span>
          <span>Un coup de main à l&apos;autre rassure un meilleur avenir à tous.</span>
        </div>
      </div>
    </footer>
  );
}
