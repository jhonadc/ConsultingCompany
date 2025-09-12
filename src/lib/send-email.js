// src/lib/send-email.js
import nodemailer from 'nodemailer'

function required(name) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

function getTransporter() {
  const host = required('BREVO_HOST') // e.g. smtp-relay.brevo.com
  const port = Number(process.env.BREVO_PORT || 587)
  const user = required('BREVO_USER') // Brevo SMTP login (usually your account email)
  const pass = required('BREVO_PASS') // Brevo SMTP key you generated

  // ✅ correct Nodemailer API
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 587 -> STARTTLS; 465 -> SMTPS
    auth: { user, pass },
  })
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// ============= PUBLIC API =============

export async function sendBookingEmail(payload = {}) {
  const {
    name = '',
    email = '',
    company = '',
    service = 'General',
    format = '',
    message = '',
    pagePath = '',
  } = payload

  if (!name || !email) throw new Error('Missing name or email')

  const transporter = getTransporter()
  await transporter.verify().catch((e) => {
    throw new Error(`SMTP verify failed: ${e?.message || e}`)
  })

  const from = required('FROM_EMAIL')
  const to = required('TO_EMAIL')

  const html = `
    <h2>Website booking/contact</h2>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || '-')}</p>
    <p><strong>Format:</strong> ${escapeHtml(format || '-')}</p>
    <p><strong>Message:</strong><br>${escapeHtml(message || '').replace(/\n/g, '<br>')}</p>
    <hr><p><small>Page: ${escapeHtml(pagePath)}</small></p>
  `

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject: `New website request — ${service}`,
      text:
        `Service: ${service}\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Company: ${company}\n` +
        `Format: ${format}\n` +
        `Message:\n${message}\n` +
        `Page: ${pagePath}`,
      html,
    })
    return info
  } catch (e) {
    throw new Error(`SMTP send failed: ${e?.response || e?.message || e}`)
  }
}