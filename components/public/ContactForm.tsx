"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Send } from "lucide-react"

type FormData = {
  firstName: string
  lastName: string
  phone: string
  email: string
  weightKg: number | ""
  message: string
  privacyAccepted: boolean,
  company : string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    weightKg: "",
    message: "",
    privacyAccepted: false,
    company : ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canSubmit = useMemo(() => {
    return (
      formData.firstName.trim().length > 0 &&
      formData.lastName.trim().length > 0 &&
      formData.phone.trim().length > 0 &&
      formData.email.trim().length > 0 &&
      formData.weightKg !== "" &&
      formData.privacyAccepted
    )
  }, [formData])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? value === ""
            ? ""
            : Number(value)
          : value,
    }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    if (!canSubmit) {
      setError(
        "Merci de compléter tous les champs et d’accepter la politique de confidentialité."
      )
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          privacyAcceptedAt: new Date().toISOString(),
        }),
      })

      if (!res.ok) throw new Error()

      setSuccess(true)

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        weightKg: "",
        message: "",
        privacyAccepted: false,
        company : ''
      })

      setTimeout(() => setSuccess(false), 6000)

    } catch {
      setError("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      

      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Prénom</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="h-12 w-full rounded-xl border border-border bg-surface px-4 focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Nom</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="h-12 w-full rounded-xl border border-border bg-surface px-4 focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Téléphone</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="h-12 w-full rounded-xl border border-border bg-surface px-4 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-12 w-full rounded-xl border border-border bg-surface px-4 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Poids (kg)</label>
          <input
            name="weightKg"
            type="number"
            min="1"
            step="0.1"
            value={formData.weightKg}
            onChange={handleChange}
            onWheel={(e) => e.currentTarget.blur()}
            required
            className="h-12 w-full rounded-xl border border-border bg-surface px-4 focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
        />

        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
        </div>

        <div className="flex items-start gap-3 pt-2">
          <input
            id="privacyAccepted"
            name="privacyAccepted"
            type="checkbox"
            checked={formData.privacyAccepted}
            onChange={handleChange}
            className="mt-1 h-4 w-4 accent-brand"
            required
          />
          <label
            htmlFor="privacyAccepted"
            className="text-sm text-muted leading-relaxed"
          >
            J’accepte la{" "}
            <Link
              href="/politique-de-confidentialite"
              className="text-brand underline hover:opacity-80"
              target="_blank"
            >
              politique de confidentialité
            </Link>{" "}
            et le traitement de mes données personnelles.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !canSubmit}
          className="w-full h-12 bg-brand text-brand-foreground rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isSubmitting ? (
            "Envoi en cours..."
          ) : (
            <>
              <Send className="w-4 h-4" />
              Envoyer le message
            </>
          )}
        </button>
      </form>
      {success && (
          <div className="my-6 p-4 rounded-xl bg-brand-soft border border-border text-brand">
            Merci ! Votre message a été envoyé avec succès.
          </div>
        )}

        {error && (
          <div className="my-6 p-4 rounded-xl bg-surface-2 border border-border text-text">
            {error}
          </div>
        )}
    </>
  )
}