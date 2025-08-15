// src/lib/send-email.js
import nodemailer from 'nodemailer'

function required(name) {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

function getTransporter() {
  const host = required('BREVO_HOST')        // e.g. smtp-relay.brevo.com
  const port = Number(process.env.BREVO_PORT || 587)
  const user = required('BREVO_USER')        // Brevo SMTP login (usually your account email)
  const pass = required('BREVO_PASS')        // Brevo SMTP key you generated

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,                    // 587 -> STARTTLS; 465 -> SMTPS
    auth: { user, pass },
  })
}

export async function sendBookingEmail(payload = {}) {
  const {
    name = '', email = '', company = '', service = 'General',
    format = '', message = '', pagePath = '',
  } = payload

  if (!name || !email) throw new Error('Missing name or email')

  const transporter = getTransporter()

  // Verify SMTP first so you get clear errors (bad creds, unverified sender, etc.)
  await transporter.verify().catch((e) => {
    throw new Error(`SMTP verify failed: ${e?.message || e}`)
  })

  const from = required('FROM_EMAIL')        // must be a verified sender/domain in Brevo
  const to   = required('TO_EMAIL')

  const html = `
    <h2>Website booking/contact</h2>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || '-'}</p>
    <p><strong>Format:</strong> ${format || '-'}</p>
    <p><strong>Message:</strong><br>${(message || '').replace(/\n/g, '<br>')}</p>
    <hr><p><small>Page: ${pagePath}</small></p>
  `

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject: `New website request — ${service}`,
      text: `Service: ${service}
Name: ${name}
Email: ${email}
Company: ${company}
Format: ${format}
Message:
${message}

Page: ${pagePath}`,
      html,
    })
    return info
  } catch (e) {
    throw new Error(`SMTP send failed: ${e?.response || e?.message || e}`)
  }
}
