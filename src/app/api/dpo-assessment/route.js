// src/app/api/dpo-assessment/route.js
import { NextResponse } from 'next/server'
import { sendDpoAssessmentEmail, addToBrevoContacts } from '@/lib/send-email'

export async function POST(request) {
    try {
        const body = await request.json()
        const { contactInfo, assessmentResult, responses, detailedAnalysis } = body

        // Validate required fields
        if (!contactInfo?.email || !contactInfo?.name || !contactInfo?.privacyConsent) {
            return NextResponse.json(
                { error: 'Missing required contact information or privacy consent' },
                { status: 400 }
            )
        }

        // Send assessment emails (to client and internal)
        const emailResult = await sendDpoAssessmentEmail({
            contactInfo,
            assessmentResult,
            responses,
            detailedAnalysis
        })

        // Add contact to CRM/Brevo if marketing consent given
        let contactResult = null
        if (contactInfo.marketingConsent) {
            contactResult = await addToBrevoContacts({
                contactInfo,
                assessmentResult
            })
        }

        // Log assessment for analytics/follow-up
        console.log('DPO Assessment Completed:', {
            email: contactInfo.email,
            company: contactInfo.company,
            score: assessmentResult.score,
            riskLevel: assessmentResult.riskLevel,
            marketingConsent: contactInfo.marketingConsent,
            timestamp: new Date().toISOString()
        })

        return NextResponse.json({
            success: true,
            message: 'Assessment results sent successfully',
            emailSent: true,
            contactAdded: !!contactResult
        })

    } catch (error) {
        console.error('DPO Assessment API Error:', error)

        return NextResponse.json(
            {
                error: 'Failed to process assessment',
                message: error.message
            },
            { status: 500 }
        )
    }
}