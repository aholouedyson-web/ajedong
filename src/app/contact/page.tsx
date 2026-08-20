"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type FormType = "soutenir" | "benevole" | "sponsor" | "contact";

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

function Input({ label, type = "text", placeholder, required = false, name }: {
  label: string; type?: string; placeholder?: string; required?: boolean; name?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={4}
          required={required}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200 text-sm resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors duration-200 text-sm"
        />
      )}
    </div>
  );
}

const donationAmounts = [5, 10, 25, 50, 100, 200];

export default function Contact() {
  const [activeTab, setActiveTab] = useState<FormType>("soutenir");
  const [donationAmount, setDonationAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {
    // Lit le hash de l'URL au chargement (ex: /contact#benevole) pour ouvrir le bon onglet
    const hash = window.location.hash.replace("#", "") as FormType;
    if (["soutenir", "benevole", "sponsor", "contact"].includes(hash)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveTab(hash);
    }
  }, []);

  const tabs: { id: FormType; label: string; icon: string; color: string }[] = [
    { id: "soutenir", label: "Faire un Don", icon: "❤", color: "red" },
    { id: "benevole", label: "Bénévolat", icon: "🙌", color: "blue" },
    { id: "sponsor", label: "Devenir Sponsor", icon: "🌟", color: "yellow" },
    { id: "contact", label: "Nous Contacter", icon: "✉", color: "green" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(activeTab);
    setTimeout(() => setSubmitted(null), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="hero-gradient pt-32 pb-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-green-300/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-300/10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-semibold text-green-200 mb-4">
            Agissons Ensemble
          </span>
          <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Rejoignez le Mouvement
          </h1>
          <p className="text-green-100/80 text-lg">
            Don, bénévolat, sponsoring ou simple prise de contact — chaque forme de soutien
            nous permet d&apos;aller plus loin.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-20 z-30 bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-max py-4 px-4 flex items-center justify-center gap-2 font-semibold text-sm transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? `border-green-600 text-green-700`
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Success message */}
        {submitted && (
          <div className="mb-8 p-6 rounded-2xl bg-green-50 border-2 border-green-200 text-center animate-scale-in">
            <div className="text-4xl mb-2">🎉</div>
            <div className="font-bold text-green-800 text-lg">
              {submitted === "soutenir" && "Merci pour votre don généreux !"}
              {submitted === "benevole" && "Candidature reçue ! Nous vous contacterons."}
              {submitted === "sponsor" && "Demande de partenariat envoyée !"}
              {submitted === "contact" && "Message envoyé ! Nous répondrons sous 48h."}
            </div>
            <p className="text-green-700 text-sm mt-1">Votre soutien fait toute la différence pour l&apos;AJED.</p>
          </div>
        )}

        {/* ── DON ── */}
        {activeTab === "soutenir" && (
          <AnimSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  Faire un Don
                </h2>
                <p className="text-gray-600 mb-8">
                  Votre don finance directement nos projets éducatifs, sportifs et solidaires.
                  Chaque euro compte et change concrètement des vies.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amounts */}
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-3">Choisir un montant</div>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-3">
                      {donationAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => { setDonationAmount(amt); setCustomAmount(""); }}
                          className={`py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                            donationAmount === amt && !customAmount
                              ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                              : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-700"
                          }`}
                        >
                          {amt} €
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      placeholder="Autre montant (€)"
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setDonationAmount(null); }}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  {/* Payment method */}
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-3">Moyen de paiement</div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: "card", label: "Carte bancaire", icon: "💳" },
                        { id: "paypal", label: "PayPal", icon: "🅿" },
                        { id: "virement", label: "Virement", icon: "🏦" },
                      ].map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setPaymentMethod(method.id)}
                          className={`flex flex-col items-center gap-1 p-4 rounded-xl border-2 transition-all duration-200 ${
                            paymentMethod === method.id
                              ? "border-red-500 bg-red-50"
                              : "border-gray-200 hover:border-red-200"
                          }`}
                        >
                          <span className="text-2xl">{method.icon}</span>
                          <span className="text-xs font-semibold text-gray-700">{method.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="bg-gray-50 rounded-2xl p-6 space-y-4 border border-gray-200">
                      <Input label="Titulaire de la carte" placeholder="Prénom Nom" required name="cardholder" />
                      <Input label="Numéro de carte" placeholder="•••• •••• •••• ••••" required name="cardnumber" />
                      <div className="grid grid-cols-2 gap-4">
                        <Input label="Date d'expiration" placeholder="MM/AA" required name="expiry" />
                        <Input label="CVV" placeholder="•••" required name="cvv" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "virement" && (
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 text-sm space-y-2">
                      <div className="font-semibold text-blue-800 mb-2">Coordonnées bancaires</div>
                      <div className="text-gray-700"><span className="font-medium">IBAN :</span> FR76 XXXX XXXX XXXX XXXX XXXX XXX</div>
                      <div className="text-gray-700"><span className="font-medium">BIC :</span> XXXXXXXX</div>
                      <div className="text-gray-700"><span className="font-medium">Bénéficiaire :</span> Association AJED</div>
                      <div className="text-xs text-blue-600 mt-2">Précisez votre nom dans la référence du virement.</div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Prénom" placeholder="Votre prénom" required name="firstname" />
                    <Input label="Nom" placeholder="Votre nom" required name="lastname" />
                  </div>
                  <Input label="Email" type="email" placeholder="votre@email.com" required name="email" />

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="recu" className="mt-1 accent-red-600" />
                    <label htmlFor="recu" className="text-sm text-gray-600">
                      Je souhaite recevoir un reçu fiscal pour ma déduction d&apos;impôts (don réductible à 66% jusqu&apos;à 20% du revenu imposable)
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-lg transition-all duration-300 shadow-xl shadow-red-600/30 flex items-center justify-center gap-2"
                  >
                    ❤ Donner {donationAmount ? `${donationAmount} €` : customAmount ? `${customAmount} €` : ""}
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    Paiement 100% sécurisé · SSL · Données protégées
                  </p>
                </form>
              </div>

              {/* Side info */}
              <div className="space-y-5">
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                  <h3 className="font-bold text-red-800 mb-3 text-lg" style={{ fontFamily: "var(--font-display)" }}>
                    Votre don en action
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      { amount: "5 €", action: "Fournitures scolaires pour un enfant" },
                      { amount: "10 €", action: "Repas solidaire pour une famille" },
                      { amount: "25 €", action: "Équipement sportif pour un jeune" },
                      { amount: "50 €", action: "Atelier éducatif pour 5 élèves" },
                      { amount: "100 €", action: "Financement d'une journée d'événement" },
                    ].map((item) => (
                      <li key={item.amount} className="flex gap-3 items-start">
                        <span className="font-black text-red-700 min-w-12">{item.amount}</span>
                        <span className="text-gray-700">{item.action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 border border-green-100 text-sm text-green-800">
                  <div className="font-bold mb-2">🔒 Don sécurisé</div>
                  <p className="text-green-700">
                    Vos données sont chiffrées et protégées. L&apos;AJED s&apos;engage à utiliser chaque don
                    de façon transparente et efficace.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 text-sm">
                  <div className="font-bold text-blue-800 mb-2">📊 Transparence financière</div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between"><span>Projets directs</span><span className="font-bold text-green-700">75%</span></div>
                    <div className="w-full h-2 bg-gray-200 rounded-full"><div className="h-2 bg-green-500 rounded-full w-3/4" /></div>
                    <div className="flex justify-between"><span>Administration</span><span className="font-bold text-blue-700">15%</span></div>
                    <div className="w-full h-2 bg-gray-200 rounded-full"><div className="h-2 bg-blue-400 rounded-full" style={{ width: "15%" }} /></div>
                    <div className="flex justify-between"><span>Communication</span><span className="font-bold text-yellow-600">10%</span></div>
                    <div className="w-full h-2 bg-gray-200 rounded-full"><div className="h-2 bg-yellow-400 rounded-full w-1/10" style={{ width: "10%" }} /></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimSection>
        )}

        {/* ── BENEVOLE ── */}
        {activeTab === "benevole" && (
          <AnimSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  Candidature Bénévole
                </h2>
                <p className="text-gray-600 mb-8">
                  Rejoignez notre équipe de bénévoles engagés ! Selon vos disponibilités et compétences,
                  nous trouverons ensemble un rôle qui vous correspond.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Prénom" placeholder="Votre prénom" required name="firstname" />
                    <Input label="Nom" placeholder="Votre nom" required name="lastname" />
                  </div>
                  <Input label="Email" type="email" placeholder="votre@email.com" required name="email" />
                  <Input label="Téléphone" type="tel" placeholder="+33 6 00 00 00 00" name="phone" />
                  <Input label="Ville de résidence" placeholder="Votre ville" required name="city" />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Domaine d&apos;intérêt <span className="text-red-500">*</span></label>
                    <select required className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors text-sm bg-white">
                      <option value="">Choisir un domaine</option>
                      <option>Éducation & Soutien scolaire</option>
                      <option>Sport & Activités physiques</option>
                      <option>Culture & Arts</option>
                      <option>Organisation d&apos;événements</option>
                      <option>Communication & Réseaux sociaux</option>
                      <option>Administration & Juridique</option>
                      <option>Santé & Bien-être</option>
                      <option>Collecte de fonds & Sponsoring</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Disponibilités</label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Week-ends", "Soirs en semaine", "Journées en semaine", "Vacances scolaires"].map((d) => (
                        <label key={d} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                          <input type="checkbox" className="accent-blue-600" />
                          {d}
                        </label>
                      ))}
                    </div>
                  </div>
                  <Input label="Motivation & Compétences" type="textarea" placeholder="Parlez-nous de vous, de vos motivations et des compétences que vous souhaitez apporter..." required name="motivation" />
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-black text-base transition-all duration-300 shadow-xl shadow-blue-700/30"
                  >
                    🙌 Envoyer ma candidature
                  </button>
                </form>
              </div>
              <div>
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-5">
                  <h3 className="font-bold text-blue-900 text-lg mb-3" style={{ fontFamily: "var(--font-display)" }}>Pourquoi devenir bénévole ?</h3>
                  <ul className="space-y-3 text-sm text-gray-700">
                    {[
                      "Contribuer à un impact social réel",
                      "Développer de nouvelles compétences",
                      "Intégrer une équipe dynamique et motivée",
                      "Participer à des événements culturels et sportifs",
                      "Valoriser votre CV et votre engagement",
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="text-blue-500 font-bold mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?w=500&h=350&fit=crop&auto=format"
                    alt="Bénévoles en action"
                    fill
                    sizes="500px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimSection>
        )}

        {/* ── SPONSOR ── */}
        {activeTab === "sponsor" && (
          <AnimSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  Demande de Partenariat
                </h2>
                <p className="text-gray-600 mb-8">
                  Votre entreprise partage nos valeurs ? Devenez partenaire officiel de l&apos;AJED et
                  associez votre image à des actions concrètes et mesurables.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input label="Nom de l'entreprise / Organisation" placeholder="Nom de votre société" required name="company" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Prénom du contact" placeholder="Prénom" required name="firstname" />
                    <Input label="Nom du contact" placeholder="Nom" required name="lastname" />
                  </div>
                  <Input label="Poste / Fonction" placeholder="Directeur RSE, Gérant, ..." name="role" />
                  <Input label="Email professionnel" type="email" placeholder="contact@entreprise.com" required name="email" />
                  <Input label="Téléphone" type="tel" placeholder="+33 1 00 00 00 00" name="phone" />
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-700">Niveau de partenariat souhaité</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { tier: "Bronze", price: "500 €+", color: "border-orange-300 hover:border-orange-400" },
                        { tier: "Argent", price: "2 000 €+", color: "border-gray-300 hover:border-gray-400" },
                        { tier: "Or", price: "5 000 €+", color: "border-yellow-400 hover:border-yellow-500" },
                      ].map((t) => (
                        <label key={t.tier} className={`flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-colors ${t.color}`}>
                          <input type="radio" name="tier" value={t.tier} className="sr-only" />
                          <span className="font-bold text-gray-800">{t.tier}</span>
                          <span className="text-xs text-gray-600">{t.price}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <Input label="Message & attentes" type="textarea" placeholder="Décrivez vos objectifs de partenariat, vos valeurs RSE, ce que vous recherchez..." name="message" />
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-black text-base transition-all duration-300 shadow-xl shadow-yellow-500/30"
                  >
                    🌟 Envoyer ma demande de partenariat
                  </button>
                </form>
              </div>
              <div className="space-y-5">
                <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
                  <h3 className="font-bold text-yellow-900 text-lg mb-3" style={{ fontFamily: "var(--font-display)" }}>Avantages partenaires</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      "Visibilité logo sur tous supports",
                      "Invitations aux événements AJED",
                      "Rapport d'impact personnalisé",
                      "Communication partenaire sur nos réseaux",
                      "Opportunités de team-building solidaire",
                      "Certificat officiel de partenariat",
                    ].map((item) => (
                      <li key={item} className="flex gap-2 items-start">
                        <span className="text-yellow-600 font-bold">★</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-sm text-gray-600">
                  <strong>Nos partenaires actuels</strong>
                  <p className="mt-2 text-gray-500 italic">
                    Nous sommes en pleine construction de notre réseau. Soyez parmi les premiers à nous soutenir !
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {["?", "?", "?"].map((_, i) => (
                      <div key={i} className="h-12 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                        Votre logo
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimSection>
        )}

        {/* ── CONTACT ── */}
        {activeTab === "contact" && (
          <AnimSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  Nous Écrire
                </h2>
                <p className="text-gray-600 mb-8">
                  Une question, une idée, une proposition de collaboration ? Nous lisons chaque message
                  et répondons sous 48 heures ouvrables.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input label="Prénom" placeholder="Votre prénom" required name="firstname" />
                    <Input label="Nom" placeholder="Votre nom" required name="lastname" />
                  </div>
                  <Input label="Email" type="email" placeholder="votre@email.com" required name="email" />
                  <Input label="Objet" placeholder="Sujet de votre message" required name="subject" />
                  <Input label="Message" type="textarea" placeholder="Votre message..." required name="message" />
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-green-700 hover:bg-green-800 text-white font-black text-base transition-all duration-300 shadow-xl shadow-green-700/30"
                  >
                    ✉ Envoyer le message
                  </button>
                </form>
              </div>
              <div className="space-y-5">
                {[
                  { icon: "📍", title: "Adresse", value: "Siège social AJED\nVotre Ville, France" },
                  { icon: "✉", title: "Email", value: "contact@ajed.org\ninfo@ajed.org" },
                  { icon: "☎", title: "Téléphone", value: "+00 00 00 00 00\nLun-Ven 9h-18h" },
                ].map((info) => (
                  <div key={info.title} className="flex gap-4 p-5 rounded-2xl bg-green-50 border border-green-100">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <div className="font-bold text-green-900 mb-0.5">{info.title}</div>
                      <div className="text-sm text-gray-600 whitespace-pre-line">{info.value}</div>
                    </div>
                  </div>
                ))}
                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="font-bold text-blue-900 mb-2 text-sm">🌐 Réseaux sociaux</div>
                  <div className="flex gap-3">
                    {["Facebook", "Instagram", "Twitter", "YouTube"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="flex-1 py-2 rounded-lg bg-white border border-blue-100 text-center text-xs font-semibold text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                      >
                        {s.slice(0, 2)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimSection>
        )}
      </div>
    </div>
  );
}
