import Link from "next/link"
import { Stethoscope, FileCheck, Settings, Users, ClipboardList, Globe, ArrowRight } from "lucide-react"

export default function PartnerDoctors() {
  const collaboration = [
    { icon: Stethoscope, text: "Autonomie totale sur les protocoles médicaux" },
    { icon: FileCheck, text: "Gestion indépendante des actes médicaux" },
    { icon: Settings, text: "Liberté des conditions d'exercice" },
  ]

  const ourContribution = [
    { icon: Users, text: "Orientation qualifiée de patients" },
    { icon: ClipboardList, text: "Coordination administrative initiale" },
    { icon: Globe, text: "Intégration à une plateforme sérieuse et spécialisée" },
  ]

  return (
    <div className="min-h-screen bg-surface text-text">
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-linear-to-b from-brand-soft to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Réseau de médecins partenaires en <span className="text-brand">circoncision médicale</span>
          </h1>

          <div className="w-20 h-1 bg-brand rounded-full mb-8" />

          <p className="text-xl text-muted leading-relaxed">
            Centres Abraham propose aux médecins diplômés d&apos;intégrer un réseau d&apos;orientation spécialisé en
            circoncision médicale.
          </p>
        </div>
      </section>

      {/* Two columns */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Collaboration */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-text mb-8">Une collaboration respectueuse</h2>

              <div className="space-y-4">
                {collaboration.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="bg-surface border border-border rounded-xl p-6 flex items-center gap-4 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand-soft flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-brand" />
                      </div>
                      <span className="text-text font-medium">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Our contribution */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-text mb-8">Notre apport</h2>

              <div className="space-y-4">
                {ourContribution.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={index}
                      className="bg-brand-soft border border-border rounded-xl p-6 flex items-center gap-4 hover:opacity-90 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-brand-foreground" />
                      </div>
                      <span className="text-text font-medium">{item.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand text-brand-foreground rounded-full font-medium hover:opacity-90 transition-all duration-300 group"
            >
              Rejoindre le réseau
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}