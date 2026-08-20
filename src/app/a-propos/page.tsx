"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const team = [
  { name: "Président(e)", role: "Fondateur & Directeur exécutif", initials: "P", color: "bg-primary" },
  { name: "Vice-Président(e)", role: "Coordination des projets", initials: "VP", color: "bg-secondary" },
  { name: "Secrétaire Général(e)", role: "Administration & Communication", initials: "SG", color: "bg-accent" },
  { name: "Trésorier(ère)", role: "Finances & Partenariats", initials: "T", color: "bg-yellow-600" },
  { name: "Responsable Éducation", role: "Programmes scolaires", initials: "RE", color: "bg-primary-light" },
  { name: "Responsable Sport", role: "Activités sportives & santé", initials: "RS", color: "bg-secondary-light" },
];

const values = [
  { icon: <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>, title: "Solidarité", desc: "Nous croyons que chaque geste de soutien contribue à tisser une société plus juste et plus humaine." },
  { icon: <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>, title: "Excellence", desc: "Nous nous engageons à mener chaque projet avec rigueur, sérieux et ambition pour nos bénéficiaires." },
  { icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>, title: "Inclusivité", desc: "Chaque jeune, quelle que soit son origine, mérite une chance égale de s'épanouir et de réussir." },
  { icon: <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>, title: "Transparence", desc: "Nos actions, finances et résultats sont communiqués ouvertement à nos partenaires et donateurs." },
  { icon: <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" /></svg>, title: "Innovation", desc: "Nous cherchons constamment de nouvelles approches pour maximiser notre impact communautaire." },
  { icon: <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Engagement Local", desc: "Nous agissons au cœur de nos communities pour répondre à des besoins concrets et immédiats." },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="hero-gradient pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-green-300/10 blur-2xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-white mb-4">
            À Propos
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            L&apos;histoire de l&apos;<span className="text-secondary-light">AJED</span>
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Une association née de la conviction que la solidarité et l&apos;engagement peuvent transformer
            des vies et bâtir des communautés plus fortes.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimSection>
            <div className="relative w-full h-96 rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1780291117301-25e3e7130f44?w=700&h=500&fit=crop&auto=format"
                alt="Notre mission AJED"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
            </div>
          </AnimSection>
          <AnimSection delay={150}>
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest block mb-3">Notre Mission</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Un monde de solidarité,<br />un avenir pour tous
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              L&apos;<strong>Association Des Jeunes Étoiles de Demain (AJED)</strong> est une organisation à but non lucratif
              qui aspire à un monde de solidarité en aidant et en facilitant les échanges amicaux autour
              des activités socioculturelles, éducatives et sportives.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fondée par des jeunes engagés, l&apos;AJED agit concrètement dans les communautés pour répondre
              aux besoins réels : accès à l&apos;éducation, pratique sportive, épanouissement culturel, aide
              d&apos;urgence et insertion sociale.
            </p>
            <blockquote className="border-l-4 border-secondary pl-4 italic text-primary-dark font-semibold">
              &quot;Un coup de main à l&apos;autre rassure un meilleur avenir à tous.&quot;
            </blockquote>
          </AnimSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimSection className="text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Nos Valeurs</div>
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              Ce qui nous guide
            </h2>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimSection key={v.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-bold text-primary text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimSection className="text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Notre Parcours</div>
            <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "var(--font-display)" }}>
              Étapes clés
            </h2>
          </AnimSection>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            {[
              { year: "2020", title: "Création de l'AJED", desc: "Fondation de l'association par un groupe de jeunes engagés, avec pour ambition d'agir localement.", side: "left" },
              { year: "2021", title: "Premiers projets", desc: "Lancement de nos premiers ateliers éducatifs et campagnes de solidarité alimentaire.", side: "right" },
              { year: "2022", title: "Reconnaissance officielle", desc: "Obtention du statut d'association reconnue d'intérêt général. Premiers sponsors partenaires.", side: "left" },
              { year: "2023", title: "Expansion des activités", desc: "Ouverture du programme sportif, première fête culturelle et 200+ bénéficiaires atteints.", side: "right" },
              { year: "2024", title: "Impact renforcé", desc: "500+ bénéficiaires, 6 projets majeurs, 50 bénévoles actifs et partenariats institutionnels.", side: "left" },
              { year: "2025", title: "Vers de nouveaux horizons", desc: "Lancement de notre site web, campagne de dons digitale et recherche de sponsors nationaux.", side: "right" },
            ].map((step, i) => (
              <AnimSection key={step.year} delay={i * 100}>
                <div className={`relative flex mb-12 ${step.side === "right" ? "flex-row-reverse" : ""}`}>
                  <div className="w-1/2" />
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md z-10" />
                  <div className={`w-1/2 ${step.side === "left" ? "pr-10 text-right" : "pl-10"}`}>
                    <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-2">{step.year}</span>
                    <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: "var(--font-display)" }}>{step.title}</h3>
                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimSection className="text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">Notre Équipe</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Les visages de l&apos;AJED
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Une équipe jeune, déterminée et passionnée, unie par la conviction que chaque action
              collective peut changer des vies.
            </p>
          </AnimSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member, i) => (
              <AnimSection key={member.name} delay={i * 60}>
                <div className="text-center group">
                  <div className={`w-20 h-20 mx-auto rounded-2xl ${member.color} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3`}>
                    {member.initials}
                  </div>
                  <div className="font-bold text-gray-900 text-sm">{member.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{member.role}</div>
                </div>
              </AnimSection>
            ))}
          </div>

          {/* Join CTA */}
          <AnimSection className="mt-14 text-center">
            <div className="bg-gradient-to-r from-primary-dark to-primary rounded-3xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>Rejoignez notre équipe</h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                L&apos;AJED recrute des bénévoles motivés pour renforcer ses équipes.
                Ensemble, nous pouvons faire encore plus.
              </p>
              <Link
                href="/contact#benevole"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-neutral-50 transition-colors duration-300"
              >
                Postuler comme bénévole →
              </Link>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* Legal */}
      <AnimSection className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { label: "Statut juridique", value: "Association loi 1901", icon: <svg className="w-8 h-8 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
              { label: "Siège social", value: "Votre Ville, France", icon: <svg className="w-8 h-8 text-secondary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { label: "N° SIRET", value: "En cours d'attribution", icon: <svg className="w-8 h-8 text-accent mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" /></svg> },
            ].map((info) => (
              <div key={info.label} className="p-6 rounded-2xl bg-neutral-50 border border-gray-100 flex flex-col items-center">
                {info.icon}
                <div className="text-xs uppercase tracking-widest text-secondary font-semibold mb-1">{info.label}</div>
                <div className="font-bold text-gray-900">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimSection>
    </div>
  );
}
