import { ChevronDown, HelpCircle } from "lucide-react"

type FaqItem = { question: string; answer: string }

export default function FAQPage() {
  const faqs: FaqItem[] = [
    {
      question: "Qui réalise la circoncision médicale ?",
      answer: "Les interventions sont exclusivement réalisées par des médecins partenaires diplômés.",
    },
    {
      question: "Centres Abraham est-il un centre médical ?",
      answer:
        "Non. Centres Abraham est un service d'orientation et d'accompagnement, et ne réalise aucun acte médical.",
    },
    {
      question: "Comment prendre rendez-vous ?",
      answer:
        "Il suffit de nous contacter par téléphone ou par e-mail. Nous vous orienterons vers un médecin partenaire.",
    },
    {
      question: "Les données sont-elles confidentielles ?",
      answer:
        "Oui. Toutes les informations sont traitées conformément aux règles de confidentialité et de protection des données.",
    },
  ]

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-surface text-text">
      {/* ✅ Structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-linear-to-b from-brand-soft to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Questions fréquentes sur la <span className="text-brand">circoncision médicale</span>
          </h1>
          <div className="w-20 h-1 bg-brand rounded-full" />
          <p className="text-muted text-lg mt-6 leading-relaxed">
            Retrouvez ici les réponses aux questions les plus courantes. Si vous ne trouvez pas votre réponse, contactez-nous.
          </p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-border bg-surface p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <summary className="list-none cursor-pointer select-none outline-none">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-soft flex items-center justify-center shrink-0 transition-colors duration-300 group-open:bg-brand">
                        <HelpCircle className="w-5 h-5 text-brand transition-colors duration-300 group-open:text-brand-foreground" />
                      </div>

                      <h2 className="text-lg font-medium text-text pt-1.5">
                        {faq.question}
                      </h2>
                    </div>

                    <ChevronDown className="w-5 h-5 text-muted shrink-0 mt-2 transition-transform duration-300 group-open:rotate-180 group-open:text-brand" />
                  </div>
                </summary>

                {/* Answer */}
                <div className="mt-4 ml-14">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>

                {/* subtle divider on open */}
                <div className="hidden group-open:block mt-6 ml-14 border-t border-border/60" />
              </details>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-2xl border border-border bg-surface-2 p-8 text-center">
            <p className="text-muted text-lg leading-relaxed">
              Une question spécifique ? Notre équipe vous répond rapidement.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand text-brand-foreground rounded-full font-medium hover:opacity-90 transition-opacity duration-300"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}