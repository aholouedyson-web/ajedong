"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoAjed from "@/components/LogoAjed";
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

function StatCounter({ target, label, icon }: { target: number; label: string; icon: string }) {
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
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center p-6">
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-4xl font-black text-green-700" style={{ fontFamily: "var(--font-display)" }}>
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
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-green-400/10 blur-3xl animate-float" />
          <div
            className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-red-400/10 blur-2xl animate-float"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-400/20 border border-green-400/30 text-green-200 text-sm font-semibold mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Organisation à but non lucratif
            </div>
            <h1
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up delay-100"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <span className="shimmer-text">Étoiles</span>
              <br />
              <span className="text-white">de Demain,</span>
              <br />
              <span className="text-green-300">Ensemble</span>
            </h1>
            <p className="text-green-100/80 text-lg leading-relaxed max-w-lg mb-8 animate-fade-up delay-200">
              Nous aspirons à un monde de solidarité en aidant et en facilitant les échanges
              amicaux autour des activités socioculturelles, éducatives et sportives.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Link
                href="/contact#soutenir"
                className="btn-pulse inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-base transition-all duration-300 shadow-xl shadow-red-900/40"
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
                <div className="text-2xl font-black text-green-300" style={{ fontFamily: "var(--font-display)" }}>
                  500+
                </div>
                <div className="text-xs text-green-200/60">Bénéficiaires</div>
              </div>
              <div className="w-px h-10 bg-green-400/30" />
              <div className="text-center">
                <div className="text-2xl font-black text-green-300" style={{ fontFamily: "var(--font-display)" }}>
                  20+
                </div>
                <div className="text-xs text-green-200/60">Projets réalisés</div>
              </div>
              <div className="w-px h-10 bg-green-400/30" />
              <div className="text-center">
                <div className="text-2xl font-black text-green-300" style={{ fontFamily: "var(--font-display)" }}>
                  50+
                </div>
                <div className="text-xs text-green-200/60">Bénévoles actifs</div>
              </div>
            </div>
          </div>

          {/* Logo hero */}
          <div className="flex justify-center animate-fade-right delay-300 lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl animate-float">
                <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-white/20 flex items-center justify-center">
                  <LogoAjed width={240} height={240} />
                </div>
              </div>
              {/* Orbiting dots */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-red-500 shadow-lg shadow-red-500/50 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute -bottom-2 -left-4 w-6 h-6 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 animate-float"
                style={{ animationDelay: "1.5s" }}
              />
              <div
                className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-yellow-400 shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-green-300/60 animate-bounce">
          <span className="text-xs">Défiler</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ── MISSION BAND ── */}
      <div className="bg-white py-6 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-600">
          {[
            "🎓 Éducation & Formation",
            "⚽ Sport & Jeunesse",
            "🎭 Culture & Arts",
            "🤝 Solidarité",
            "🌱 Environnement",
            "❤ Santé Communautaire",
          ].map((item) => (
            <span key={item} className="flex items-center gap-1 hover:text-green-700 transition-colors cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="divider-star mb-4">
              <span className="text-green-700 font-bold text-sm uppercase tracking-widest">Notre Impact</span>
            </div>
            <h2 className="text-4xl font-bold text-green-900" style={{ fontFamily: "var(--font-display)" }}>
              Des chiffres qui parlent
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-3xl shadow-xl shadow-green-100 p-4">
            <StatCounter target={500} label="Bénéficiaires aidés" icon="👥" />
            <StatCounter target={20} label="Projets réalisés" icon="🚀" />
            <StatCounter target={50} label="Bénévoles actifs" icon="🙌" />
            <StatCounter target={5} label="Années d'engagement" icon="⭐" />
          </div>
        </div>
      </AnimatedSection>

      {/* ── PROJECTS ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="divider-star mb-4">
              <span className="text-green-700 font-bold text-sm uppercase tracking-widest">Nos Réalisations</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
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
                    <h3 className="font-bold text-green-900 text-lg mb-3 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-700 hover:bg-green-800 text-white font-bold transition-all duration-300 shadow-lg shadow-green-700/30"
            >
              Voir toute la galerie →
            </Link>
          </div>
        </div>
      </section>

      {/* ── VOLUNTEER BAND ── */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white blur-2xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-widest block mb-3">Rejoignez-nous</span>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Devenez Bénévole
            </h2>
            <p className="text-blue-100/80 leading-relaxed mb-6">
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
                <li key={item} className="flex items-start gap-2 text-sm text-blue-100">
                  <span className="text-green-400 mt-0.5 font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact#benevole"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-800 font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg"
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
              <span className="text-green-700 font-bold text-sm uppercase tracking-widest">Partenaires</span>
            </div>
            <h2 className="text-4xl font-bold text-green-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
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
                icon: "🥇",
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
                icon: "🥈",
                price: "2 000 €+",
                color: "from-gray-300 to-gray-500",
                perks: ["Logo sur le site web", "Présence aux événements", "Rapport d'impact annuel"],
              },
              {
                tier: "Bronze",
                icon: "🥉",
                price: "500 €+",
                color: "from-orange-400 to-orange-600",
                perks: ["Mention sur le site web", "Certificat de partenariat"],
              },
            ].map((tier) => (
              <div key={tier.tier} className="project-card rounded-2xl border-2 border-gray-100 overflow-hidden">
                <div className={`bg-gradient-to-br ${tier.color} p-6 text-white text-center`}>
                  <div className="text-4xl mb-2">{tier.icon}</div>
                  <div className="font-bold text-xl" style={{ fontFamily: "var(--font-display)" }}>
                    Sponsor {tier.tier}
                  </div>
                  <div className="text-2xl font-black mt-1">{tier.price}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {tier.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-600 font-bold">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact#sponsor"
                    className="mt-5 block text-center py-3 rounded-xl bg-green-700 hover:bg-green-800 text-white font-bold text-sm transition-colors duration-300"
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
      <AnimatedSection className="py-24 bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <div className="text-6xl mb-6">❤</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Un coup de main à l&apos;autre
          </h2>
          <p className="text-red-100/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Chaque don, quelle que soit sa taille, permet à l&apos;AJED de financer ses projets
            éducatifs, sportifs et culturels. Rejoignez notre mouvement de solidarité.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["5 €", "10 €", "25 €", "50 €", "100 €", "Autre"].map((amount) => (
              <Link
                key={amount}
                href="/contact#soutenir"
                className="px-6 py-3 rounded-full border-2 border-white/40 hover:bg-white hover:text-red-700 font-bold transition-all duration-300"
              >
                {amount}
              </Link>
            ))}
          </div>
          <Link
            href="/contact#soutenir"
            className="btn-pulse inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-red-700 font-black text-lg hover:shadow-xl transition-all duration-300"
          >
            ❤ Faire un Don Maintenant
          </Link>
          <p className="mt-4 text-xs text-red-200/60">
            Don 100% sécurisé · Reçu fiscal disponible · Transparent
          </p>
        </div>
      </AnimatedSection>

      {/* ── TESTIMONIALS ── */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="divider-star mb-4">
              <span className="text-green-700 font-bold text-sm uppercase tracking-widest">Témoignages</span>
            </div>
            <h2 className="text-4xl font-bold text-green-900" style={{ fontFamily: "var(--font-display)" }}>
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
                color: "bg-green-100 text-green-700",
              },
              {
                name: "Thomas D.",
                role: "Bénévole depuis 3 ans",
                text: "M'engager avec l'AJED est la plus belle décision que j'aie prise. L'énergie de l'équipe et l'impact visible de notre travail me motivent chaque jour.",
                avatar: "TD",
                color: "bg-blue-100 text-blue-700",
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
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
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
