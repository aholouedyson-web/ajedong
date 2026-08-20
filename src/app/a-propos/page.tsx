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
  { name: "Président(e)", role: "Fondateur & Directeur exécutif", initials: "P", color: "bg-green-700" },
  { name: "Vice-Président(e)", role: "Coordination des projets", initials: "VP", color: "bg-blue-700" },
  { name: "Secrétaire Général(e)", role: "Administration & Communication", initials: "SG", color: "bg-red-700" },
  { name: "Trésorier(ère)", role: "Finances & Partenariats", initials: "T", color: "bg-yellow-600" },
  { name: "Responsable Éducation", role: "Programmes scolaires", initials: "RE", color: "bg-purple-700" },
  { name: "Responsable Sport", role: "Activités sportives & santé", initials: "RS", color: "bg-teal-700" },
];

const values = [
  { icon: "🤝", title: "Solidarité", desc: "Nous croyons que chaque geste de soutien contribue à tisser une société plus juste et plus humaine." },
  { icon: "⭐", title: "Excellence", desc: "Nous nous engageons à mener chaque projet avec rigueur, sérieux et ambition pour nos bénéficiaires." },
  { icon: "🌱", title: "Inclusivité", desc: "Chaque jeune, quelle que soit son origine, mérite une chance égale de s'épanouir et de réussir." },
  { icon: "🔍", title: "Transparence", desc: "Nos actions, finances et résultats sont communiqués ouvertement à nos partenaires et donateurs." },
  { icon: "💡", title: "Innovation", desc: "Nous cherchons constamment de nouvelles approches pour maximiser notre impact communautaire." },
  { icon: "🌍", title: "Engagement Local", desc: "Nous agissons au cœur de nos communautés pour répondre à des besoins concrets et immédiats." },
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-green-200 mb-4">
            À Propos
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
            L&apos;histoire de l&apos;<span className="text-green-300">AJED</span>
          </h1>
          <p className="text-green-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
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
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest block mb-3">Notre Mission</span>
            <h2 className="text-4xl font-bold text-green-900 mb-6" style={{ fontFamily: "var(--font-display)" }}>
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
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-green-800 font-semibold">
              &quot;Un coup de main à l&apos;autre rassure un meilleur avenir à tous.&quot;
            </blockquote>
          </AnimSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <AnimSection className="text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-3">Nos Valeurs</div>
            <h2 className="text-4xl font-bold text-green-900" style={{ fontFamily: "var(--font-display)" }}>
              Ce qui nous guide
            </h2>
          </AnimSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <AnimSection key={v.title} delay={i * 80}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-green-50 h-full">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h3 className="font-bold text-green-900 text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>{v.title}</h3>
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
            <div className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-3">Notre Parcours</div>
            <h2 className="text-4xl font-bold text-green-900" style={{ fontFamily: "var(--font-display)" }}>
              Étapes clés
            </h2>
          </AnimSection>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-blue-300 to-red-300" />
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
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1 w-4 h-4 rounded-full bg-green-600 border-4 border-white shadow-md z-10" />
                  <div className={`w-1/2 ${step.side === "left" ? "pr-10 text-right" : "pl-10"}`}>
                    <span className="inline-block text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-2">{step.year}</span>
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
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimSection className="text-center mb-16">
            <div className="text-sm font-semibold uppercase tracking-widest text-green-700 mb-3">Notre Équipe</div>
            <h2 className="text-4xl font-bold text-green-900 mb-4" style={{ fontFamily: "var(--font-display)" }}>
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
            <div className="bg-gradient-to-r from-green-700 to-green-900 rounded-3xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>Rejoignez notre équipe</h3>
              <p className="text-green-100/80 mb-6 max-w-lg mx-auto">
                L&apos;AJED recrute des bénévoles motivés pour renforcer ses équipes.
                Ensemble, nous pouvons faire encore plus.
              </p>
              <Link
                href="/contact#benevole"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-green-800 font-bold hover:bg-green-50 transition-colors duration-300"
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
              { label: "Statut juridique", value: "Association loi 1901", icon: "⚖️" },
              { label: "Siège social", value: "Votre Ville, France", icon: "📍" },
              { label: "N° SIRET", value: "En cours d'attribution", icon: "🔢" },
            ].map((info) => (
              <div key={info.label} className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="text-3xl mb-2">{info.icon}</div>
                <div className="text-xs uppercase tracking-widest text-green-600 font-semibold mb-1">{info.label}</div>
                <div className="font-bold text-gray-900">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimSection>
    </div>
  );
}
