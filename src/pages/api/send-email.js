// src/pages/api/send-email.js
import { sendBookingEmail } from '../../lib/send-email'   // relative path from src/pages/api/

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  try {
    const body = req.body || {}

    // Honeypot
    if (body.website) return res.status(200).json({ success: true })

    // Normalize service(s)
    const service = Array.isArray(body.services) && body.services.length
      ? body.services.join(', ')
      : (body.service || 'General')

    const result = await sendBookingEmail({ ...body, service })
    return res.status(200).json({ success: true, id: result?.messageId })
  } catch (err) {
    console.error('[send-email] error:', err)
    // Return the real message while you debug locally
    return res.status(500).json({ error: String(err?.message || err) })
  }
}
