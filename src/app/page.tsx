"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
}) {
  const { ref, visible } = useScrollAnimation();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${className} transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
}

function StatCounter({ target, label, icon }: { target: number; label: string; icon: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useScrollAnimation();

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center p-6 flex flex-col items-center">
      <div className="text-4xl mb-3 text-primary/80">{icon}</div>
      <div className="text-4xl font-black text-primary" style={{ fontFamily: "var(--font-display)" }}>
        {count}+
      </div>
      <div className="text-sm text-gray-600 mt-1 font-medium">{label}</div>
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "Campagne de Solidarité Alimentaire",
    description:
      "Distribution de repas et kits alimentaires à plus de 300 familles vulnérables lors de la période de crise. Une action concrète pour lutter contre la précarité alimentaire dans notre communauté.",
    category: "Solidarité",
    categoryColor: "bg-red-100 text-red-700",
    image: "https://images.unsplash.com/photo-1694286066866-4324f80d7906?w=600&h=400&fit=crop&auto=format",
    date: "Mars 2024",
  },
  {
    id: 2,
    title: "Tournoi Sportif Inter-Quartiers",
    description:
      "Organisation d'un tournoi de football et volleyball réunissant 12 équipes de jeunes issus de différents quartiers. Sport, fair-play et cohésion sociale au programme.",
    category: "Sport",
    categoryColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1627423896085-e3e694d88e40?w=600&h=400&fit=crop&auto=format",
    date: "Juin 2024",
  },
  {
    id: 3,
    title: "Atelier Éducatif & Numérique",
    description:
      "Sessions de formation en informatique et alphabétisation numérique pour 80 jeunes sans accès aux outils digitaux. Réduire la fracture numérique, un pas vers l'égalité des chances.",
    category: "Éducation",
    categoryColor: "bg-green-100 text-green-700",
    image: "https://images.unsplash.com/photo-1632932693914-89b90ae3d16d?w=600&h=400&fit=crop&auto=format",
    date: "Septembre 2024",
  },
  {
    id: 4,
    title: "Fête Culturelle des Nations",
    description:
      "Grand événement socioculturel célébrant la diversité avec danses, musiques et cuisines du monde. Plus de 500 participants pour une journée de partage et de découverte.",
    category: "Culture",
    categoryColor: "bg-yellow-100 text-yellow-700",
    image: "https://images.unsplash.com/photo-1515657834497-26509e295154?w=600&h=400&fit=crop&auto=format",
    date: "Décembre 2024",
  },
  {
    id: 5,
    title: "Opération École Propre",
    description:
      "Campagne de nettoyage et de rénovation de trois écoles primaires : peinture des salles, jardins éducatifs, dons de fournitures. Un cadre sain pour de meilleures conditions d'apprentissage.",
    category: "Environnement",
    categoryColor: "bg-emerald-100 text-emerald-700",
    image: "https://images.unsplash.com/photo-1652664845183-c6083bc286fc?w=600&h=400&fit=crop&auto=format",
    date: "Février 2025",
  },
  {
    id: 6,
    title: "Caravane Santé Communautaire",
    description:
      "Consultations médicales gratuites, sensibilisations et dépistages offerts à plus de 400 personnes en zones défavorisées, en partenariat avec des professionnels de santé bénévoles.",
    category: "Santé",
    categoryColor: "bg-pink-100 text-pink-700",
    image: "https://images.unsplash.com/photo-1744972974629-daa2fdaa15ee?w=600&h=400&fit=crop&auto=format",
    date: "Avril 2025",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen">
      {/* ── HERO ── */}
      <div ref={heroRef} className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-light/10 blur-3xl animate-float" />
          <div
            className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-secondary-light/10 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-accent-light/10 blur-2xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          {/* Stars pattern */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                top: `${(i * 37) % 100}%`,
                left: `${(i * 53) % 100}%`,
                animationDelay: `${(i % 4)}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up delay-100"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="text-white">Étoiles</span>
              <br />
              <span className="text-white">de Demain,</span>
              <br />
              <span className="text-secondary-light">Ensemble</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-lg mb-8 animate-fade-up delay-200">
              Nous aspirons à un monde de solidarité en aidant et en facilitant les échanges
              amicaux autour des activités socioculturelles, éducatives et sportives.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                href="/contact#soutenir"
                className="btn-pulse inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-dark text-white font-bold text-base transition-all duration-300 shadow-xl shadow-black/20"
              >
                ❤ Nous Soutenir
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-base transition-all duration-300"
              >
                Découvrir l&apos;AJED →
              </Link>
            </div>
            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-10 animate-fade-up delay-400">
              <div className="text-center">
                <div className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                  500+
                </div>
                <div className="text-xs text-white/60">Bénéficiaires</div>
              </div>
              <div className="w-px h-10 bg-white/30" />
              <div className="text-center">
                <div className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                  20+
                </div>
                <div className="text-xs text-white/60">Projets réalisés</div>
              </div>
              <div className="w-px h-10 bg-white/30" />
              <div className="text-center">
                <div className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-display)" }}>
                  50+
                </div>
                <div className="text-xs text-white/60">Bénévoles actifs</div>
              </div>
            </div>
          </div>

          {/* Logo hero */}
          <div className="hidden sm:flex justify-center animate-fade-right delay-300 lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl animate-float overflow-hidden">
                <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-white flex items-center justify-center relative shadow-inner overflow-hidden">
                  <Image
                    src="/images/logo-ajed.png"
                    alt="Logo Officiel AJED"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    priority
                  />
                </div>
              </div>
              {/* Orbiting dots */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent shadow-lg shadow-accent/50 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute -bottom-2 -left-4 w-6 h-6 rounded-full bg-primary shadow-lg shadow-primary/50 animate-float"
                style={{ animationDelay: "1.5s" }}
              />
              <div
                className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-yellow-400 shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* ── MISSION BAND ── */}
      <div className="bg-white py-6 shadow-sm border-b border-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-500">
          {[
            { label: "Éducation & Formation", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg> },
            { label: "Sport & Jeunesse", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
            { label: "Culture & Arts", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
            { label: "Solidarité", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
            { label: "Environnement", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> },
            { label: "Santé Communautaire", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <AnimatedSection className="py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-star mb-4">
              <span className="text-secondary font-bold text-sm uppercase tracking-widest">Notre Impact</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              Des chiffres qui parlent
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-3xl shadow-xl shadow-gray-200 p-4">
            <StatCounter target={500} label="Bénéficiaires aidés" icon={<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} />
            <StatCounter target={20} label="Projets réalisés" icon={<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} />
            <StatCounter target={50} label="Bénévoles actifs" icon={<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>} />
            <StatCounter target={5} label="Années d'engagement" icon={<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>} />
          </div>
        </div>
      </AnimatedSection>

      {/* ── PROJECTS ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="divider-star mb-4">
              <span className="text-secondary font-bold text-sm uppercase tracking-widest">Nos Réalisations</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Projets qui transforment
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Chaque projet est une étoile allumée dans la vie de nos bénéficiaires.
              Voici quelques-unes de nos actions récentes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 80}>
                <article className="project-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl group h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden bg-green-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${project.categoryColor}`}>
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 text-white/80 text-xs font-medium bg-black/30 px-2 py-1 rounded-full">
                      {project.date}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-primary text-lg mb-3 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{project.description}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Voir toute la galerie →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER BAND ── */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-primary-dark to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white blur-2xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-light font-semibold text-sm uppercase tracking-widest block mb-3">Rejoignez-nous</span>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Devenez Bénévole
            </h2>
            <p className="text-white/80 leading-relaxed mb-6">
              L&apos;AJED grandit grâce à des personnes engagées et généreuses. Que vous ayez du temps,
              des compétences ou de l&apos;enthousiasme, votre contribution fait la différence.
              Ensemble, nous construisons un futur plus juste.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Accompagner des jeunes en difficulté scolaire",
                "Organiser des événements sportifs et culturels",
                "Participer aux campagnes de sensibilisation",
                "Apporter votre expertise professionnelle",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                  <svg className="w-5 h-5 text-secondary-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact#benevole"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-dark font-bold hover:bg-neutral-50 transition-all duration-300 shadow-lg"
            >
              Devenir Bénévole →
            </Link>
          </div>
          <div className="hidden lg:block relative h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1778864874888-a23ff77b51d2?w=600&h=450&fit=crop&auto=format"
              alt="Bénévoles AJED"
              fill
              sizes="600px"
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* ── SPONSORS ── */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-star mb-4">
              <span className="text-secondary font-bold text-sm uppercase tracking-widest">Partenaires</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Cherchons des Sponsors
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Votre entreprise peut devenir acteur du changement en soutenant nos missions.
              Ensemble, construisons un impact durable et visible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                tier: "Or",
                icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.47-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" /></svg>,
                price: "5 000 €+",
                color: "from-yellow-400 to-yellow-600",
                perks: [
                  "Logo sur tous nos supports",
                  "Présence aux événements",
                  "Rapport d'impact trimestriel",
                  "Droit de parole lors des événements",
                ],
              },
              {
                tier: "Argent",
                icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.47-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" /></svg>,
                price: "2 000 €+",
                color: "from-gray-300 to-gray-500",
                perks: ["Logo sur le site web", "Présence aux événements", "Rapport d'impact annuel"],
              },
              {
                tier: "Bronze",
                icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.47-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" /></svg>,
                price: "500 €+",
                color: "from-orange-400 to-orange-600",
                perks: ["Mention sur le site web", "Certificat de partenariat"],
              },
            ].map((tier) => (
              <div key={tier.tier} className="project-card rounded-2xl border-2 border-gray-100 overflow-hidden">
                <div className={`bg-gradient-to-br ${tier.color} p-6 text-white flex flex-col items-center`}>
                  <div className="mb-2">{tier.icon}</div>
                  <div className="font-bold text-xl" style={{ fontFamily: "var(--font-display)" }}>
                    Sponsor {tier.tier}
                  </div>
                  <div className="text-2xl font-black mt-1">{tier.price}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {tier.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-secondary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact#sponsor"
                    className="mt-5 block text-center py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-colors duration-300"
                  >
                    Devenir Sponsor
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── DONATION CTA ── */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-accent-dark via-accent to-accent-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3c1.54 0 2.946.654 3.937 1.705C12.614 3.654 14.02 3 15.562 3c2.974 0 5.438 2.322 5.438 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Un coup de main à l&apos;autre
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Chaque don, quelle que soit sa taille, permet à l&apos;AJED de financer ses projets
            éducatifs, sportifs et culturels. Rejoignez notre mouvement de solidarité.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["5 €", "10 €", "25 €", "50 €", "100 €", "Autre"].map((amount) => (
              <Link
                key={amount}
                href="/contact#soutenir"
                className="px-6 py-3 rounded-full border-2 border-white/40 hover:bg-white hover:text-accent font-bold transition-all duration-300"
              >
                {amount}
              </Link>
            ))}
          </div>
          <Link
            href="/contact#soutenir"
            className="btn-pulse inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-accent font-black text-lg hover:shadow-xl transition-all duration-300"
          >
            ❤ Faire un Don Maintenant
          </Link>
          <p className="mt-4 text-xs text-white/60">
            Don 100% sécurisé · Reçu fiscal disponible · Transparent
          </p>
        </div>
      </AnimatedSection>

      {/* ── TESTIMONIALS ── */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="divider-star mb-4">
              <span className="text-secondary font-bold text-sm uppercase tracking-widest">Témoignages</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              Ils témoignent
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie K.",
                role: "Bénéficiaire – Programme Éducation",
                text: "Grâce à l'AJED, j'ai pu accéder à des cours gratuits et obtenir mon diplôme. Aujourd'hui j'ai un emploi stable. Ces jeunes m'ont redonné espoir.",
                avatar: "MK",
                color: "bg-secondary/10 text-secondary",
              },
              {
                name: "Thomas D.",
                role: "Bénévole depuis 3 ans",
                text: "M'engager avec l'AJED est la plus belle décision que j'aie prise. L'énergie de l'équipe et l'impact visible de notre travail me motivent chaque jour.",
                avatar: "TD",
                color: "bg-primary/10 text-primary",
              },
              {
                name: "Entreprise Solaris",
                role: "Sponsor Officiel",
                text: "Notre partenariat avec l'AJED reflète nos valeurs RSE. Leur sérieux, leur transparence et leur impact sur le terrain nous inspirent confiance.",
                avatar: "S",
                color: "bg-yellow-100 text-yellow-700",
              },
            ].map((t) => (
              <div key={t.name} className="project-card p-8 rounded-2xl border border-gray-100 shadow-md bg-white">
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-gray-800">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
