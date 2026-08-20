"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = ["Tous", "Éducation", "Sport", "Culture", "Solidarité", "Santé", "Environnement"];

const mediaItems = [
  {
    id: 1, type: "photo", category: "Solidarité",
    src: "https://images.unsplash.com/photo-1694286066866-4324f80d7906?w=700&h=500&fit=crop&auto=format",
    title: "Distribution Alimentaire", desc: "Aide aux familles vulnérables lors de la campagne hivernale 2024", date: "Mars 2024",
  },
  {
    id: 2, type: "photo", category: "Éducation",
    src: "https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?w=700&h=500&fit=crop&auto=format",
    title: "Atelier Numérique Jeunes", desc: "Formation informatique pour 80 jeunes dans nos locaux", date: "Sept 2024",
  },
  {
    id: 3, type: "photo", category: "Sport",
    src: "https://images.unsplash.com/photo-1627423896085-e3e694d88e40?w=700&h=500&fit=crop&auto=format",
    title: "Tournoi Inter-Quartiers", desc: "12 équipes en compétition amicale de football et volleyball", date: "Juin 2024",
  },
  {
    id: 4, type: "photo", category: "Culture",
    src: "https://images.unsplash.com/photo-1515657834497-26509e295154?w=700&h=500&fit=crop&auto=format",
    title: "Fête Culturelle des Nations", desc: "Célébration de la diversité avec 500+ participants", date: "Déc 2024",
  },
  {
    id: 5, type: "photo", category: "Environnement",
    src: "https://images.unsplash.com/photo-1652664845183-c6083bc286fc?w=700&h=500&fit=crop&auto=format",
    title: "Opération École Propre", desc: "Rénovation et nettoyage de 3 écoles primaires", date: "Fév 2025",
  },
  {
    id: 6, type: "photo", category: "Santé",
    src: "https://images.unsplash.com/photo-1744972974629-daa2fdaa15ee?w=700&h=500&fit=crop&auto=format",
    title: "Caravane Santé", desc: "Consultations gratuites pour 400 personnes en zones défavorisées", date: "Avr 2025",
  },
  {
    id: 7, type: "photo", category: "Éducation",
    src: "https://images.unsplash.com/photo-1700939482429-32b47926845e?w=700&h=500&fit=crop&auto=format",
    title: "Remise de Fournitures", desc: "Distribution de kits scolaires aux enfants défavorisés", date: "Janv 2024",
  },
  {
    id: 8, type: "photo", category: "Solidarité",
    src: "https://images.unsplash.com/photo-1776013700766-64ed864bf36a?w=700&h=500&fit=crop&auto=format",
    title: "Marche de la Solidarité", desc: "300 participants pour sensibiliser contre les discriminations", date: "Oct 2024",
  },
  {
    id: 9, type: "photo", category: "Sport",
    src: "https://images.unsplash.com/photo-1607053075566-9855c961eb83?w=700&h=500&fit=crop&auto=format",
    title: "Journée Cyclisme Jeunes", desc: "Initiation au vélo et sensibilisation à la mobilité douce", date: "Mai 2024",
  },
];

function AnimSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useScrollAnimation();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${className} transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("Tous");
  const [lightbox, setLightbox] = useState<(typeof mediaItems)[0] | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = active === "Tous" ? mediaItems : mediaItems.filter((m) => m.category === active);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="hero-gradient pt-32 pb-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white mb-4">
            Galerie
          </span>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Nos Projets en Images
          </h1>
          <p className="text-white/70 text-lg">
            Chaque image raconte une histoire de solidarité, d&apos;espoir et d&apos;engagement collectif.
            Découvrez nos actions à travers cette galerie vivante.
          </p>
        </div>
      </div>

      {/* Filter */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6 flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex-shrink-0 ${
                active === cat
                  ? "bg-primary text-white shadow-md shadow-primary/30"
                  : "bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
              {cat !== "Tous" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({mediaItems.filter((m) => m.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item, i) => (
              <AnimSection key={item.id} delay={i * 60}>
                <button
                  className="w-full break-inside-avoid group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 block cursor-pointer bg-neutral-100"
                  onClick={() => setLightbox(item)}
                  aria-label={`Voir ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold mb-1 bg-white/20 text-white border border-white/30">
                      {item.category}
                    </span>
                    <h3 className="text-white font-bold text-sm leading-tight">{item.title}</h3>
                    <p className="text-white/70 text-xs mt-0.5">{item.date}</p>
                  </div>
                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </button>
              </AnimSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">📷</div>
              <p className="font-medium">Aucun média dans cette catégorie pour l&apos;instant.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video section */}
      <AnimSection className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">Vidéos</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Revivez nos événements
          </h2>
          <p className="text-gray-600 mb-10">
            Bientôt disponibles – nos vidéos de terrain, interviews et reportages sur nos projets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Reportage – Caravane Santé 2025", duration: "4:32", thumb: "https://images.unsplash.com/photo-1744972974629-daa2fdaa15ee?w=600&h=340&fit=crop&auto=format" },
              { title: "Tournoi Sportif – Résumé officiel", duration: "7:15", thumb: "https://images.unsplash.com/photo-1627423896085-e3e694d88e40?w=600&h=340&fit=crop&auto=format" },
            ].map((v) => (
              <div key={v.title} className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative w-full h-52">
                  <Image
                    src={v.thumb}
                    alt={v.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="text-white font-semibold text-sm">{v.title}</div>
                  <div className="text-white/60 text-xs mt-0.5">Durée : {v.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimSection>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center text-xl transition-colors"
              aria-label="Fermer"
            >
              ×
            </button>
            <div className="relative w-full max-h-[70vh] h-[70vh]">
              <Image
                src={lightbox.src.replace("w=700", "w=1200")}
                alt={lightbox.title}
                fill
                sizes="900px"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-2">
                {lightbox.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
                {lightbox.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{lightbox.desc}</p>
              <p className="text-xs text-gray-400 mt-2">{lightbox.date}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
