import { NextRequest, NextResponse } from "next/server"
import * as z from "zod"
import { prisma } from "@/lib/data/db"

const zodContactSchema = z.object({
  firstName: z.string().min(1).max(30),
  lastName: z.string().min(1).max(30),
  phone: z.string().min(6).max(20),
  email: z.string().email().max(50),
  weightKg: z.coerce.number().min(1),
  message: z.string().max(700).optional(),
  privacyAccepted: z.literal(true),
  privacyAcceptedAt: z.string().datetime().optional(),
  company: z.string().optional()
})

export const runtime = "nodejs";

export const POST = async (req: NextRequest) => {
    
    let body: unknown
    try{    
        body = await req.json()
    }
    catch{
        return NextResponse.json({ok : false, message : "Invalid Json"}, {status : 400})
    }

  const parsed = zodContactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: "zod non conforme" }, { status: 400 })
  }

    const company = parsed.data.company?.trim()
    if (company && company.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 })
    }

  const { firstName, lastName, phone, email, weightKg, message } = parsed.data
    const firstNameClean = firstName.trim()
    const lastNameClean = lastName.trim()
    const phoneClean = phone.trim()
    const emailClean = email.trim().toLowerCase()
    const messageClean = message?.trim() ? message.trim() : null

  try {
    const newLead = await prisma.lead.create({
      data: {
        firstName: firstNameClean,
        lastName: lastNameClean,
        phone: phoneClean,
        email: emailClean,
        weightKg,
        message: messageClean,
        },
    })

    return NextResponse.json({ ok: true, id: newLead.id }, { status: 201 })
    } 
  catch (error) {
    console.error("Prisma error:", error)
    return NextResponse.json({ ok: false, message: "Erreur serveur" }, { status: 500 })
  }
}