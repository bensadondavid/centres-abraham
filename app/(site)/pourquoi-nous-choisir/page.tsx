import Link from "next/link"
import { Award, Heart, Calendar, Lock, ArrowRight } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Médecins partenaires diplômés",
      description:
        "Tous les médecins partenaires sont des professionnels de santé certifiés, spécialisés dans la circoncision médicale.",
    },
    {
      icon: Heart,
      title: "Accompagnement humain et structuré",
      description: "Notre équipe vous informe, vous oriente et vous accompagne avec sérieux et bienveillance.",
    },
    {
      icon: Calendar,
      title: "Organisation et disponibilité",
      description:
        "Nous coordonnons la mise en relation avec les médecins partenaires afin de vous proposer des solutions adaptées.",
    },
    {
      icon: Lock,
      title: "Confidentialité médicale",
      description: "Vos données et informations personnelles sont traitées avec la plus stricte confidentialité.",
    },
  ]

  return (
    <div className="min-h-screen bg-surface text-text">
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-linear-to-b from-brand-soft to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Pourquoi faire appel à <span className="text-brand">Centres Abraham</span>
          </h1>
          <div className="w-20 h-1 bg-brand rounded-full" />
        </div>
      </section>

      {/* Reasons */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div key={index} className="relative">
                  <div className="bg-surface border border-border rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center mb-6 shadow-lg shadow-brand/20">
                      <Icon className="w-8 h-8 text-brand-foreground" />
                    </div>

                    <h3 className="text-xl font-medium text-text mb-4">{reason.title}</h3>

                    <p className="text-muted leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand text-brand-foreground rounded-full font-medium hover:opacity-90 transition-all duration-300 group"
            >
              Nous contacter
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}