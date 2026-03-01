import { Phone, ClipboardCheck, Users, Stethoscope } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Premier contact",
      description:
        "Vous contactez Centres Abraham par téléphone ou par e-mail afin d'exprimer votre demande concernant une circoncision médicale en France.",
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "Évaluation de votre situation",
      description:
        "Nous analysons votre situation afin de vous orienter vers le médecin partenaire le plus adapté, en fonction de votre profil et des disponibilités.",
    },
    {
      number: "03",
      icon: Users,
      title: "Mise en relation médicale",
      description: "Nous facilitons la mise en relation avec le professionnel de santé sélectionné.",
    },
    {
      number: "04",
      icon: Stethoscope,
      title: "Prise en charge par le médecin",
      description:
        "L'intervention et le suivi post-opératoire sont assurés exclusivement par le médecin partenaire, selon son protocole médical.",
    },
  ]

  return (
    <div className="min-h-screen bg-surface text-text">
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-linear-to-b from-brand-soft to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Comment se déroule l&apos;accompagnement en{" "}
            <span className="text-brand">circoncision médicale</span>
          </h1>
          <div className="w-20 h-1 bg-brand rounded-full" />
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-brand/20 hidden sm:block" />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="relative flex gap-6 md:gap-8">
                    {/* Icon circle */}
                    <div className="relative z-10 shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand flex items-center justify-center shadow-lg shadow-brand/20">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-brand-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-brand/30 text-4xl md:text-5xl font-light">
                            {step.number}
                          </span>
                          <h3 className="text-xl md:text-2xl font-medium text-text">{step.title}</h3>
                        </div>
                        <p className="text-muted text-lg leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}