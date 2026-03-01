import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Mail, Shield, Users, MapPin, Heart } from "lucide-react"

const keyPoints = [
  { icon: Users, text: "Orientation vers des médecins spécialisés en circoncision médicale" },
  { icon: Heart, text: "Accompagnement personnalisé avant la mise en relation" },
  { icon: MapPin, text: "Service disponible partout en France" },
  { icon: Shield, text: "Confidentialité et respect du cadre médical" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-surface text-text mt-14">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-linear-to-br from-brand-soft to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                   <Image
                      src="/logo-centres-abraham.webp"
                      alt="logo-centres-abraham"
                      width={60}
                      height={60}
                      priority
                    />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-text">
                  Centres Abraham
                </h1>
              </div>

              <h2 className="text-2xl md:text-3xl font-light text-brand mb-6">
                Orientation et accompagnement pour la circoncision médicale en France
              </h2>

              <p className="text-lg text-muted leading-relaxed mb-6">
                Centres Abraham est un service d&apos;orientation et d&apos;accompagnement spécialisé dans la
                circoncision médicale en France.
              </p>

              <p className="text-muted leading-relaxed mb-6">
                Nous guidons les patients vers des médecins partenaires diplômés et qualifiés, en apportant
                information, clarté et accompagnement tout au long du parcours.
              </p>

              <p className="text-muted leading-relaxed mb-8">
                Notre mission est de faciliter l&apos;accès à une prise en charge médicale sérieuse, dans le respect
                des standards médicaux, de la confidentialité et des obligations réglementaires.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand text-brand-foreground rounded-full font-medium hover:opacity-90 transition-all duration-300 group"
                >
                  Nous contacter
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/comment-ca-fonctionne"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand text-brand rounded-full font-medium hover:bg-brand-soft transition-all duration-300"
                >
                  Comment ça fonctionne
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-border">
                <Image
                  src={'/img-home-site-enzo.webp'}
                  alt="Centres Abraham - Accompagnement médical"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 0px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20 bg-surface-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-text mb-4">Points clés</h2>
            <div className="w-16 h-1 bg-brand mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {keyPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="bg-surface p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex items-start gap-5 border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-brand" />
                  </div>
                  <p className="text-text text-lg leading-relaxed pt-2">{point.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      {/* <GoogleReviews /> */}

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-text mb-6">Besoin d&apos;informations ?</h2>
          <p className="text-muted text-lg mb-10">
            Notre équipe est à votre disposition pour répondre à toutes vos questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:0183805249" className="flex items-center gap-3 text-text hover:text-brand transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center border border-border">
                <Phone className="w-5 h-5 text-brand" />
              </div>
              <span className="text-lg">01 83 80 52 49</span>
            </a>

            <a
              href="mailto:centresabraham@gmail.com"
              className="flex items-center gap-3 text-text hover:text-brand transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center border border-border">
                <Mail className="w-5 h-5 text-brand" />
              </div>
              <span className="text-lg">centresabraham@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}