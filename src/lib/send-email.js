// src/lib/send-email.js - UPDATED VERSION
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

  return nodemailer.createTransporter({
    host,
    port,
    secure: port === 465, // 587 -> STARTTLS; 465 -> SMTPS
    auth: { user, pass },
  })
}

// EXISTING FUNCTION - Keep as is
export async function sendBookingEmail(payload = {}) {
  const {
    name = '', email = '', company = '', service = 'General',
    format = '', message = '', pagePath = '',
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
      text: `Service: ${service}\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nFormat: ${format}\nMessage:\n${message}\nPage: ${pagePath}`,
      html,
    })
    return info
  } catch (e) {
    throw new Error(`SMTP send failed: ${e?.response || e?.message || e}`)
  }
}

// NEW FUNCTION - DPO Assessment Email
export async function sendDpoAssessmentEmail(payload = {}) {
  const {
    contactInfo,
    assessmentResult,
    responses,
    detailedAnalysis
  } = payload

  if (!contactInfo?.email || !contactInfo?.name) {
    throw new Error('Missing contact information')
  }

  const transporter = getTransporter()
  await transporter.verify().catch((e) => {
    throw new Error(`SMTP verify failed: ${e?.message || e}`)
  })

  const from = required('FROM_EMAIL')
  const to = required('TO_EMAIL') // Your internal email for notifications

  // Generate professional HTML email template
  const clientHtml = generateClientEmailTemplate({
    contactInfo,
    assessmentResult,
    detailedAnalysis
  })

  const internalHtml = generateInternalNotificationTemplate({
    contactInfo,
    assessmentResult,
    responses,
    detailedAnalysis
  })

  try {
    // Send assessment results to client
    const clientInfo = await transporter.sendMail({
      from,
      to: contactInfo.email,
      subject: `Your GDPR DPO Assessment Results - ${assessmentResult.riskLevel}`,
      html: clientHtml,
    })

    // Send internal notification
    const internalInfo = await transporter.sendMail({
      from,
      to,
      subject: `New DPO Assessment - ${contactInfo.name} (${assessmentResult.riskLevel})`,
      html: internalHtml,
    })

    return { clientInfo, internalInfo }
  } catch (e) {
    throw new Error(`SMTP send failed: ${e?.response || e?.message || e}`)
  }
}

// Professional Client Email Template
function generateClientEmailTemplate({ contactInfo, assessmentResult, detailedAnalysis }) {
  const riskColor = getRiskColor(assessmentResult.riskLevel)

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your GDPR DPO Assessment Results</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; margin: 0; padding: 0; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    
    <!-- Header with Logo -->
    <div style="background-color: #1f2937; padding: 32px 24px; text-align: center;">
      <div style="background-color: #ffffff; width: 60px; height: 60px; border-radius: 12px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center;">
        <!-- Replace with your logo or company initial -->
        <div style="font-size: 24px; font-weight: bold; color: #1f2937;">DC</div>
      </div>
      <h1 style="color: #ffffff; font-size: 28px; margin: 0; font-weight: 600;">GDPR DPO Assessment Results</h1>
      <p style="color: #d1d5db; margin: 8px 0 0 0; font-size: 16px;">Professional Data Protection Analysis</p>
    </div>

    <!-- Main Content -->
    <div style="padding: 32px 24px;">
      
      <!-- Personal Greeting -->
      <div style="margin-bottom: 32px;">
        <h2 style="font-size: 24px; color: #1f2937; margin: 0 0 8px 0;">Hello ${contactInfo.name},</h2>
        <p style="color: #6b7280; margin: 0; font-size: 16px;">Thank you for completing our comprehensive GDPR DPO assessment. Here are your personalized results and recommendations.</p>
      </div>

      <!-- Assessment Summary Card -->
      <div style="background: linear-gradient(135deg, ${riskColor}, ${riskColor}dd); border-radius: 16px; padding: 24px; margin-bottom: 32px; color: #ffffff;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
          <h3 style="margin: 0; font-size: 20px; font-weight: 600;">Assessment Summary</h3>
          <div style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; font-weight: 600; font-size: 14px;">
            Score: ${assessmentResult.score}
          </div>
        </div>
        <div style="margin-bottom: 12px;">
          <div style="font-size: 18px; font-weight: 600; margin-bottom: 4px;">${assessmentResult.riskLevel}</div>
          <div style="font-size: 16px; opacity: 0.9;">${assessmentResult.recommendation}</div>
        </div>
        <div style="background: rgba(255,255,255,0.1); padding: 12px 16px; border-radius: 8px; font-size: 14px;">
          <strong>Timeline:</strong> ${assessmentResult.urgency}
        </div>
      </div>

      <!-- Next Steps Section -->
      <div style="margin-bottom: 32px;">
        <h3 style="color: #1f2937; font-size: 20px; margin: 0 0 16px 0; font-weight: 600;">Recommended Next Steps</h3>
        <div style="background-color: #f9fafb; border-left: 4px solid #10b981; padding: 20px; border-radius: 0 8px 8px 0;">
          ${assessmentResult.nextSteps.map((step, i) => `
            <div style="display: flex; margin-bottom: 12px; align-items: flex-start;">
              <div style="background-color: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0;">${i + 1}</div>
              <div style="color: #374151; font-size: 14px; line-height: 1.5;">${step}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Detailed Analysis -->
      <div style="margin-bottom: 32px;">
        <h3 style="color: #1f2937; font-size: 20px; margin: 0 0 20px 0; font-weight: 600;">Your Assessment Details</h3>
        ${Object.entries(detailedAnalysis).map(([category, data]) => `
          <div style="margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
            <div style="background-color: #f3f4f6; padding: 16px;">
              <h4 style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 600;">${category}</h4>
              <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px; font-style: italic;">${data.question}</p>
            </div>
            <div style="padding: 16px;">
              <div style="color: #374151; font-size: 14px;">
                <strong>Your Response:</strong><br>
                ${data.answers.map(answer => `• ${answer}`).join('<br>')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Call to Action -->
      <div style="background: linear-gradient(135deg, #1f2937, #374151); border-radius: 16px; padding: 32px; text-align: center; color: #ffffff; margin-bottom: 32px;">
        <h3 style="margin: 0 0 12px 0; font-size: 22px; font-weight: 600;">Ready to Get Compliant?</h3>
        <p style="margin: 0 0 24px 0; opacity: 0.9; font-size: 16px;">Get professional DPO services and protect your business from GDPR risks.</p>
        <a href="https://yourdomain.com/contact?source=dpo-assessment&risk=${encodeURIComponent(assessmentResult.riskLevel)}" 
           style="display: inline-block; background-color: #ffffff; color: #1f2937; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">
          Schedule Free Consultation
        </a>
      </div>

      <!-- Company Info -->
      <div style="text-align: center; padding: 24px 0; border-top: 1px solid #e5e7eb;">
        <h4 style="margin: 0 0 8px 0; color: #1f2937;">Need Expert Help?</h4>
        <p style="margin: 0 0 16px 0; color: #6b7280; font-size: 14px;">Contact our certified DPO experts for immediate assistance</p>
        <div style="color: #6b7280; font-size: 14px;">
          <div>📧 Email: contact@yourdomain.com</div>
          <div>📞 Phone: +351 XXX XXX XXX</div>
          <div>🌐 Website: yourdomain.com</div>
        </div>
      </div>
      
      <!-- Unsubscribe Footer -->
      <div style="text-align: center; padding: 16px 0; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
        <p>This email was sent because you requested a DPO assessment on our website.</p>
        ${contactInfo.marketingConsent ? '<p><a href="#unsubscribe" style="color: #6b7280;">Unsubscribe from marketing emails</a></p>' : ''}
      </div>
    </div>
  </div>
</body>
</html>
  `
}

// Internal Notification Template
function generateInternalNotificationTemplate({ contactInfo, assessmentResult, responses, detailedAnalysis }) {
  return `
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f5f5f5;">
  <div style="max-width: 800px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
    
    <h1 style="color: #1f2937; border-bottom: 3px solid #10b981; padding-bottom: 10px;">
      🚨 New DPO Assessment Lead
    </h1>

    <!-- Lead Summary -->
    <div style="background: linear-gradient(135deg, ${getRiskColor(assessmentResult.riskLevel)}, ${getRiskColor(assessmentResult.riskLevel)}dd); color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h2 style="margin: 0 0 10px 0;">High Priority: ${assessmentResult.riskLevel}</h2>
      <p style="margin: 0; font-size: 18px;">${assessmentResult.recommendation}</p>
      <p style="margin: 10px 0 0 0; opacity: 0.9;"><strong>Urgency:</strong> ${assessmentResult.urgency}</p>
    </div>

    <!-- Contact Information -->
    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="color: #1f2937; margin-top: 0;">Contact Information</h3>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
        <div><strong>Name:</strong> ${contactInfo.name}</div>
        <div><strong>Email:</strong> ${contactInfo.email}</div>
        <div><strong>Company:</strong> ${contactInfo.company || 'Not provided'}</div>
        <div><strong>Position:</strong> ${contactInfo.position || 'Not provided'}</div>
        <div><strong>Country:</strong> ${contactInfo.country || 'Not provided'}</div>
        <div><strong>Marketing Consent:</strong> ${contactInfo.marketingConsent ? '✅ Yes' : '❌ No'}</div>
      </div>
    </div>

    <!-- Assessment Score Breakdown -->
    <div style="margin: 20px 0;">
      <h3 style="color: #1f2937;">Assessment Score: ${assessmentResult.score} points</h3>
      <div style="background-color: #e5e7eb; height: 10px; border-radius: 5px; margin: 10px 0;">
        <div style="background-color: ${getRiskColor(assessmentResult.riskLevel)}; height: 100%; width: ${Math.min((assessmentResult.score / 30) * 100, 100)}%; border-radius: 5px;"></div>
      </div>
    </div>

    <!-- Detailed Responses -->
    <h3 style="color: #1f2937;">Complete Assessment Responses</h3>
    ${Object.entries(detailedAnalysis).map(([category, data]) => `
      <div style="margin-bottom: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
        <div style="background-color: #f3f4f6; padding: 15px; border-bottom: 1px solid #e5e7eb;">
          <h4 style="margin: 0; color: #1f2937;">${category}</h4>
          <p style="margin: 5px 0 0 0; color: #6b7280; font-style: italic;">${data.question}</p>
        </div>
        <div style="padding: 15px;">
          <strong>Selected:</strong><br>
          ${data.answers.map(answer => `• ${answer}`).join('<br>')}
        </div>
      </div>
    `).join('')}

    <!-- Action Items -->
    <div style="background-color: #fef3c7; border: 2px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0;">
      <h3 style="color: #92400e; margin-top: 0;">📋 Follow-up Actions Required</h3>
      <ul style="color: #78350f; margin: 0;">
        <li>Contact within 24 hours for high-risk assessments</li>
        <li>Send personalized proposal based on specific needs</li>
        <li>Schedule consultation call if marketing consent given</li>
        <li>${contactInfo.marketingConsent ? 'Add to marketing automation sequence' : 'Do not add to marketing - no consent given'}</li>
      </ul>
    </div>

    <!-- Quick Contact -->
    <div style="text-align: center; margin: 30px 0;">
      <a href="mailto:${contactInfo.email}?subject=Your%20DPO%20Assessment%20Results%20-%20Let's%20Talk&body=Hi%20${contactInfo.name},%0A%0AThank%20you%20for%20completing%20our%20DPO%20assessment.%20I've%20reviewed%20your%20results..." 
         style="background-color: #1f2937; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
        📧 Reply to ${contactInfo.name}
      </a>
    </div>
  </div>
</body>
</html>
  `
}

function getRiskColor(riskLevel) {
  if (riskLevel.includes('High')) return '#dc2626'
  if (riskLevel.includes('Medium')) return '#f59e0b'
  return '#10b981'
}

// Contact Management Functions
export async function addToBrevoContacts({ contactInfo, assessmentResult }) {
  // This would integrate with Brevo's API to add contacts
  // For now, we're using email-based tracking
  const contactData = {
    email: contactInfo.email,
    attributes: {
      FIRSTNAME: contactInfo.name,
      LASTNAME: '',
      COMPANY: contactInfo.company || '',
      POSITION: contactInfo.position || '',
      COUNTRY: contactInfo.country || '',
      DPO_ASSESSMENT_SCORE: assessmentResult.score,
      DPO_RISK_LEVEL: assessmentResult.riskLevel,
      DPO_ASSESSMENT_DATE: new Date().toISOString(),
      MARKETING_CONSENT: contactInfo.marketingConsent,
      PRIVACY_CONSENT: contactInfo.privacyConsent
    }
  }

  // Log for CRM integration or manual follow-up
  console.log('Contact to add to CRM:', contactData)
  return contactData
}