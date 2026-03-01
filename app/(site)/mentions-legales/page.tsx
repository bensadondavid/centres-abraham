export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-surface text-text">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <h1 className="text-4xl font-light text-brand">
            Mentions légales
          </h1>

          {/* Éditeur */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Éditeur du site</h2>
            <p className="text-muted leading-relaxed">
              Le site Centres Abraham est édité par :
            </p>
            <p className="text-muted leading-relaxed">
              <strong>Raison sociale :</strong> Centres Abraham SAS<br />
              <strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)<br />
              <strong>Capital social :</strong> 1 000, 00 €<br />
              <strong>Siège social :</strong> 15 Villa du Bel Air, 75012 Paris, France<br />
              <strong>SIRET :</strong> [Numéro SIRET]<br />
              <strong>RCS :</strong> RCS [Ville] [Numéro]<br />
              <strong>Email :</strong> centresabraham@gmail.com<br />
              <strong>Téléphone :</strong> 01 83 80 52 49
            </p>
          </div>

          {/* Hébergement */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Hébergement</h2>
            <p className="text-muted leading-relaxed">
              Le site est hébergé par :
            </p>
            <p className="text-muted leading-relaxed">
              <strong>Hébergeur :</strong> Vercel Inc.<br />
              <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, United States<br />
              <strong>Site web :</strong> https://vercel.com
            </p>
          </div>

          {/* Activité */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Nature de l’activité</h2>
            <p className="text-muted leading-relaxed">
              Centres Abraham est un service d’orientation et d’accompagnement spécialisé
              dans la mise en relation avec des médecins partenaires diplômés exerçant en France.
            </p>
            <p className="text-muted leading-relaxed">
              Centres Abraham ne réalise aucun acte médical et n’exerce aucune activité médicale.
              Les actes médicaux sont réalisés exclusivement par des médecins partenaires indépendants,
              responsables de leurs actes.
            </p>
          </div>

          {/* Données personnelles */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Données personnelles</h2>
            <p className="text-muted leading-relaxed">
              Les données collectées via le formulaire de contact sont utilisées uniquement
              afin de répondre aux demandes et d’orienter les utilisateurs.
            </p>
            <p className="text-muted leading-relaxed">
              Conformément au Règlement Général sur la Protection des Données (RGPD),
              vous disposez d’un droit d’accès, de rectification et de suppression
              de vos données en écrivant à : centresabraham@gmail.com
            </p>
          </div>

          {/* Responsabilité */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Responsabilité</h2>
            <p className="text-muted leading-relaxed">
              Les informations diffusées sur ce site sont fournies à titre informatif.
              Elles ne constituent en aucun cas un avis médical.
            </p>
            <p className="text-muted leading-relaxed">
              Centres Abraham ne saurait être tenu responsable des décisions médicales
              prises par les utilisateurs ou des actes réalisés par les médecins partenaires.
            </p>
          </div>

          {/* Propriété intellectuelle */}
          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Propriété intellectuelle</h2>
            <p className="text-muted leading-relaxed">
              L’ensemble des contenus du site (textes, graphismes, logo, etc.)
              est protégé par le droit d’auteur.
            </p>
            <p className="text-muted leading-relaxed">
              Toute reproduction ou utilisation sans autorisation écrite préalable est interdite.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}