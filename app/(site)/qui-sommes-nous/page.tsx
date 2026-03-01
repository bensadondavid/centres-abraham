import { Handshake, Shield, UserCheck, Heart } from "lucide-react"

export default function AboutUs() {
  const engagements = [
    { icon: Heart, text: "Écoute" },
    { icon: Shield, text: "Neutralité médicale" },
    { icon: UserCheck, text: "Information claire" },
    { icon: Handshake, text: "Respect absolu de la confidentialité" }
  ]

  return (
    <div className="min-h-screen bg-surface text-text">
      
      {/* Hero */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-linear-to-b from-brand-soft to-transparent" />

        <div className="max-w-4xl mx-auto px-6 relative">
          <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            Un service d'orientation dédié à la{" "}
            <span className="text-brand">circoncision médicale</span> en France
          </h1>

          <div className="w-20 h-1 bg-brand rounded-full" />
        </div>
      </section>

      {/* Notre rôle */}
      <section className="pb-36">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            Notre rôle
          </h2>

          <div className="space-y-6 text-muted text-lg leading-relaxed">
            <p>
              Centres Abraham est un service d'orientation et d'accompagnement médical, 
              exclusivement dédié à la circoncision médicale en France.
            </p>

            <div className="bg-brand-soft border-l-4 border-brand p-6 rounded-r-xl">
              <p className="text-text font-medium">
                Nous ne réalisons aucun acte médical.
              </p>
            </div>

            <p>
              Notre rôle est de mettre en relation les patients avec des médecins partenaires 
              diplômés, sélectionnés pour leur sérieux, leur expérience et leur pratique 
              conforme aux exigences médicales.
            </p>
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-16 md:py-20 bg-surface-2">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            Notre engagement
          </h2>

          <p className="text-muted text-lg mb-10">
            Nous accompagnons chaque demande avec :
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {engagements.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-surface p-6 rounded-xl shadow-sm flex items-center gap-4 border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>

                  <span className="text-text font-medium">
                    {item.text}
                  </span>
                </div>
              )
            })}
          </div>

          <p className="text-muted text-lg mt-10 leading-relaxed">
            Chaque médecin partenaire exerce de manière indépendante, selon ses propres protocoles médicaux et conditions d'exercice.
          </p>
        </div>
      </section>
    </div>
  )
}