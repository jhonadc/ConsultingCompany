'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useMessages } from 'next-intl'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'

export default function DpoAssessmentPage() {
    const messages = useMessages()
    // const M = messages?.dpoAssessment ?? {} // (available if you later localize)

    // Form state
    const [currentStep, setCurrentStep] = useState(0)
    const [responses, setResponses] = useState({})
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        company: '',
        position: '',
        country: '',
        marketingConsent: false,
        privacyConsent: false,
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [assessmentResult, setAssessmentResult] = useState(null)

    // Questions
    const assessmentQuestions = [
        {
            id: 'organization_type',
            category: 'Organization Profile',
            question: 'What type of organization are you?',
            type: 'single',
            required: true,
            options: [
                { value: 'eu_company', label: 'Company based in the EU', weight: 3 },
                { value: 'global_with_eu_data', label: 'Non-EU company processing EU personal data', weight: 3 },
                { value: 'public_authority', label: 'Public authority or body', weight: 4 },
                { value: 'nonprofit', label: 'Non-profit organization', weight: 1 },
                { value: 'individual', label: 'Individual/Freelancer', weight: 0 },
            ],
        },
        {
            id: 'company_size',
            category: 'Organization Profile',
            question: 'How many employees does your organization have?',
            type: 'single',
            required: true,
            options: [
                { value: 'micro', label: '1-10 employees', weight: 1 },
                { value: 'small', label: '11-50 employees', weight: 2 },
                { value: 'medium', label: '51-250 employees', weight: 3 },
                { value: 'large', label: '250+ employees', weight: 4 },
            ],
        },
        {
            id: 'data_processing_volume',
            category: 'Data Processing',
            question: 'What is the scale of personal data processing in your organization?',
            type: 'single',
            required: true,
            options: [
                { value: 'minimal', label: 'Minimal (basic employee/customer records)', weight: 1 },
                { value: 'moderate', label: 'Moderate (regular customer interactions)', weight: 2 },
                { value: 'large_scale', label: 'Large-scale (thousands of data subjects)', weight: 4 },
                { value: 'systematic_monitoring', label: 'Systematic monitoring of public areas', weight: 4 },
            ],
        },
        {
            id: 'special_categories',
            category: 'Data Processing',
            question: 'Does your organization process special categories of personal data?',
            type: 'multiple',
            required: true,
            subtitle: 'Select all that apply:',
            options: [
                { value: 'health', label: 'Health and medical data', weight: 3 },
                { value: 'biometric', label: 'Biometric data for identification', weight: 3 },
                { value: 'genetic', label: 'Genetic data', weight: 3 },
                { value: 'criminal', label: 'Criminal convictions and offences', weight: 2 },
                { value: 'racial_ethnic', label: 'Racial or ethnic origin', weight: 2 },
                { value: 'political', label: 'Political opinions', weight: 2 },
                { value: 'religious', label: 'Religious or philosophical beliefs', weight: 2 },
                { value: 'sexual', label: 'Sexual orientation or sex life', weight: 2 },
                { value: 'none', label: 'None of the above', weight: 0 },
            ],
        },
        {
            id: 'core_activities',
            category: 'Core Activities',
            question: 'Which of these describes your core activities?',
            type: 'multiple',
            required: true,
            subtitle: 'Select all that apply:',
            options: [
                { value: 'regular_systematic_monitoring', label: 'Regular and systematic monitoring of data subjects', weight: 4 },
                { value: 'large_scale_special_data', label: 'Large scale processing of special categories of data', weight: 4 },
                { value: 'criminal_data_processing', label: 'Processing criminal conviction data', weight: 3 },
                { value: 'automated_decision_making', label: 'Automated decision making with legal effects', weight: 3 },
                { value: 'public_task', label: 'Carrying out public tasks or official authority', weight: 3 },
                { value: 'vulnerable_groups', label: 'Processing data of vulnerable groups (children, elderly)', weight: 2 },
                { value: 'standard_business', label: 'Standard business operations', weight: 1 },
            ],
        },
        {
            id: 'industry_sector',
            category: 'Industry & Compliance',
            question: 'What industry sector best describes your organization?',
            type: 'single',
            required: true,
            options: [
                { value: 'healthcare', label: 'Healthcare and Life Sciences', weight: 3 },
                { value: 'financial', label: 'Financial Services and Banking', weight: 3 },
                { value: 'technology', label: 'Technology and Software', weight: 2 },
                { value: 'telecommunications', label: 'Telecommunications', weight: 3 },
                { value: 'education', label: 'Education', weight: 2 },
                { value: 'government', label: 'Government and Public Sector', weight: 4 },
                { value: 'marketing', label: 'Marketing and Advertising', weight: 2 },
                { value: 'retail', label: 'Retail and E-commerce', weight: 2 },
                { value: 'manufacturing', label: 'Manufacturing', weight: 1 },
                { value: 'other', label: 'Other', weight: 1 },
            ],
        },
        {
            id: 'international_transfers',
            category: 'Data Transfers',
            question: 'Does your organization transfer personal data outside the EU/EEA?',
            type: 'single',
            required: true,
            options: [
                { value: 'regular_transfers', label: 'Yes, regularly to multiple countries', weight: 3 },
                { value: 'occasional_transfers', label: 'Yes, occasionally to specific countries', weight: 2 },
                { value: 'adequacy_only', label: 'Only to countries with adequacy decisions', weight: 1 },
                { value: 'no_transfers', label: 'No international transfers', weight: 0 },
            ],
        },
        {
            id: 'current_compliance',
            category: 'Current Compliance Status',
            question: 'What is your current GDPR compliance status?',
            type: 'single',
            required: true,
            options: [
                { value: 'fully_compliant', label: 'Fully compliant with documented policies', weight: 0 },
                { value: 'mostly_compliant', label: 'Mostly compliant with some gaps', weight: 1 },
                { value: 'partial_compliance', label: 'Partial compliance, ongoing work needed', weight: 2 },
                { value: 'minimal_compliance', label: 'Minimal compliance measures in place', weight: 3 },
                { value: 'not_sure', label: 'Not sure about current compliance status', weight: 4 },
            ],
        },
        {
            id: 'privacy_resources',
            category: 'Current Resources',
            question: 'What privacy and data protection resources do you currently have?',
            type: 'multiple',
            required: true,
            subtitle: 'Select all that apply:',
            options: [
                { value: 'dedicated_dpo', label: 'Dedicated Data Protection Officer', weight: -2 },
                { value: 'privacy_team', label: 'Privacy/compliance team', weight: -1 },
                { value: 'legal_counsel', label: 'Legal counsel handling privacy', weight: 0 },
                { value: 'it_security', label: 'IT security team managing data protection', weight: 1 },
                { value: 'external_consultant', label: 'External privacy consultant', weight: 0 },
                { value: 'no_dedicated_resources', label: 'No dedicated privacy resources', weight: 3 },
            ],
        },
        {
            id: 'main_concerns',
            category: 'Risk Assessment',
            question: 'What are your main data protection concerns?',
            type: 'multiple',
            required: true,
            subtitle: 'Select up to 5 options:',
            maxSelections: 5,
            options: [
                { value: 'regulatory_fines', label: 'Potential regulatory fines and penalties', weight: 2 },
                { value: 'data_breaches', label: 'Data breach response and management', weight: 2 },
                { value: 'compliance_audits', label: 'Regulatory audits and investigations', weight: 2 },
                { value: 'data_subject_rights', label: 'Managing data subject access requests', weight: 1 },
                { value: 'international_transfers', label: 'International data transfer compliance', weight: 2 },
                { value: 'vendor_management', label: 'Third-party vendor data processing agreements', weight: 1 },
                { value: 'privacy_by_design', label: 'Implementing privacy by design in new projects', weight: 1 },
                { value: 'staff_training', label: 'Employee privacy awareness and training', weight: 1 },
                { value: 'documentation', label: 'Maintaining required GDPR documentation', weight: 1 },
                { value: 'keeping_updated', label: 'Staying updated with regulatory changes', weight: 1 },
            ],
        },
    ]

    // Calculations
    const generateDetailedAnalysis = () => {
        const analysis = {}
        assessmentQuestions.forEach((q) => {
            const response = responses[q.id]
            if (!response) return
            let score = 0
            let labels = []
            if (q.type === 'single') {
                const opt = q.options.find((o) => o.value === response)
                if (opt) {
                    score = opt.weight
                    labels = [opt.label]
                }
            } else {
                response.forEach((val) => {
                    const opt = q.options.find((o) => o.value === val)
                    if (opt) {
                        score += opt.weight
                        labels.push(opt.label)
                    }
                })
            }
            analysis[q.category] = { question: q.question, answers: labels, score, id: q.id }
        })
        return analysis
    }

    const calculateAssessment = () => {
        let totalScore = 0
        let maxPossibleScore = 0

        assessmentQuestions.forEach((q) => {
            const response = responses[q.id]
            if (!response) return

            if (q.type === 'single') {
                const selected = q.options.find((o) => o.value === response)
                if (selected) totalScore += selected.weight
                maxPossibleScore += Math.max(...q.options.map((o) => o.weight))
            } else {
                response.forEach((val) => {
                    const selected = q.options.find((o) => o.value === val)
                    if (selected) totalScore += selected.weight
                })
                const sortedWeights = q.options.map((o) => o.weight).sort((a, b) => b - a)
                const maxSelectable = q.maxSelections || q.options.length
                maxPossibleScore += sortedWeights
                    .slice(0, maxSelectable)
                    .reduce((sum, w) => sum + Math.max(0, w), 0)
            }
        })

        let recommendation = ''
        let urgency = ''
        let riskLevel = ''
        let nextSteps = []

        if (totalScore >= 25) {
            recommendation = 'DPO appointment is mandatory'
            urgency = 'Immediate action required'
            riskLevel = 'High Risk'
            nextSteps = [
                'Appoint a qualified DPO immediately',
                'Conduct comprehensive GDPR compliance audit',
                'Implement emergency data breach response procedures',
                'Review and update all privacy policies and procedures',
                'Establish regulatory authority reporting mechanisms',
            ]
        } else if (totalScore >= 15) {
            recommendation = 'DPO strongly recommended'
            urgency = 'Action needed within 30 days'
            riskLevel = 'Medium-High Risk'
            nextSteps = [
                'Consider appointing an external DPO service',
                'Perform detailed privacy impact assessments',
                'Enhance data protection training for staff',
                'Review current compliance gaps and create action plan',
                'Establish data subject request handling procedures',
            ]
        } else if (totalScore >= 8) {
            recommendation = 'DPO advisable for risk management'
            urgency = 'Plan within 60-90 days'
            riskLevel = 'Medium Risk'
            nextSteps = [
                'Evaluate outsourced DPO services for cost-effectiveness',
                'Conduct privacy compliance review',
                'Implement data protection by design practices',
                'Create or update privacy documentation',
                'Establish regular compliance monitoring',
            ]
        } else {
            recommendation = 'DPO not mandatory but may provide value'
            urgency = 'Consider for future growth'
            riskLevel = 'Low-Medium Risk'
            nextSteps = [
                'Monitor business growth and data processing changes',
                'Implement basic GDPR compliance measures',
                'Consider privacy training for key personnel',
                'Review data processing activities annually',
                'Prepare for potential future DPO requirements',
            ]
        }

        return {
            score: totalScore,
            maxScore: maxPossibleScore,
            recommendation,
            urgency,
            riskLevel,
            nextSteps,
            detailedAnalysis: generateDetailedAnalysis(),
        }
    }

    // Email template (kept for compatibility)
    const generateEmailTemplate = () => {
        return ''
    }

    // Submit
    const handleSubmit = async () => {
        if (!contactInfo.email || !contactInfo.name || !contactInfo.privacyConsent) {
            alert('Please fill in all required fields and accept the privacy policy')
            return
        }

        setIsSubmitting(true)
        try {
            const assessment = calculateAssessment()
            setAssessmentResult(assessment)

            // send email via Brevo
            const res = await fetch('https://api.brevo.com/v3/smtp/email', {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || '',
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    sender: { email: 'noreply@yourdomain.com', name: 'DPO Assessment' },
                    to: [{ email: contactInfo.email, name: contactInfo.name }],
                    subject: `Your GDPR DPO Assessment Results - ${assessment.riskLevel}`,
                    htmlContent: generateEmailTemplate(assessment),
                }),
            })

            if (res.ok) {
                if (contactInfo.marketingConsent) {
                    await fetch('https://api.brevo.com/v3/contacts', {
                        method: 'POST',
                        headers: {
                            accept: 'application/json',
                            'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || '',
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: contactInfo.email,
                            attributes: {
                                FIRSTNAME: contactInfo.name,
                                COMPANY: contactInfo.company,
                                POSITION: contactInfo.position,
                                COUNTRY: contactInfo.country,
                                DPO_SCORE: assessment.score,
                                RISK_LEVEL: assessment.riskLevel,
                            },
                            listIds: [1],
                        }),
                    })
                }
                setIsSubmitted(true)
            } else {
                throw new Error('Failed to send email')
            }
        } catch (err) {
            console.error('Submission error:', err)
            alert('There was an error processing your assessment. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    // Helpers
    const handleResponse = (questionId, value) => {
        const question = assessmentQuestions.find((q) => q.id === questionId)
        if (question?.type === 'multiple') {
            const current = responses[questionId] || []
            const maxSel = question.maxSelections || question.options.length
            if (current.includes(value)) {
                setResponses((prev) => ({ ...prev, [questionId]: current.filter((v) => v !== value) }))
            } else if (current.length < maxSel) {
                setResponses((prev) => ({ ...prev, [questionId]: [...current, value] }))
            }
        } else {
            setResponses((prev) => ({ ...prev, [questionId]: value }))
        }
    }

    const isStepComplete = (stepIndex) => {
        if (stepIndex < assessmentQuestions.length) {
            const q = assessmentQuestions[stepIndex]
            const r = responses[q.id]
            return q.type === 'multiple' ? !!r && r.length > 0 : !!r
        }
        return !!(contactInfo.name && contactInfo.email && contactInfo.privacyConsent)
    }

    const canProceed = () => isStepComplete(currentStep)
    const nextStep = () => {
        if (canProceed() && currentStep < assessmentQuestions.length) setCurrentStep(currentStep + 1)
    }
    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1)
    }

    const currentQuestion = assessmentQuestions[currentStep]
    const isContactStep = currentStep === assessmentQuestions.length
    const progress = ((currentStep + 1) / (assessmentQuestions.length + 1)) * 100

    // Success screen
    if (isSubmitted && assessmentResult) {
        return (
            <main>
                <Container className="mt-24 sm:mt-32 lg:mt-40">
                    <FadeIn className="mx-auto max-w-4xl text-center">
                        <div className="rounded-3xl bg-white p-8 ring-1 ring-neutral-950/10 shadow-lg">
                            <div className="inline-flex rounded-full bg-emerald-100 p-3 mb-6">
                                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-neutral-950">Assessment Complete!</h1>
                            <p className="mt-4 text-lg text-neutral-700">
                                Your detailed DPO assessment results have been sent to <strong>{contactInfo.email}</strong>
                            </p>

                            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="rounded-2xl bg-neutral-50 p-6">
                                    <div className="text-2xl font-bold text-neutral-900">{assessmentResult.score}</div>
                                    <div className="text-sm text-neutral-600">Assessment Score</div>
                                </div>
                                <div className="rounded-2xl bg-neutral-50 p-6">
                                    <div
                                        className={`text-lg font-semibold ${assessmentResult.riskLevel.includes('High')
                                                ? 'text-rose-600'
                                                : assessmentResult.riskLevel.includes('Medium')
                                                    ? 'text-amber-600'
                                                    : 'text-emerald-600'
                                            }`}
                                    >
                                        {assessmentResult.riskLevel}
                                    </div>
                                    <div className="text-sm text-neutral-600">Risk Level</div>
                                </div>
                                <div className="rounded-2xl bg-neutral-50 p-6 sm:col-span-2">
                                    <div className="text-sm font-semibold text-neutral-900">{assessmentResult.recommendation}</div>
                                    <div className="text-xs text-neutral-600 mt-1">{assessmentResult.urgency}</div>
                                </div>
                            </div>

                            <div className="mt-8 text-left">
                                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Recommended Next Steps:</h3>
                                <ul className="space-y-2">
                                    {assessmentResult.nextSteps.map((step, i) => (
                                        <li key={i} className="flex items-start text-sm text-neutral-700">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0" />
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-105"
                                >
                                    Get Professional DPO Help
                                </Link>
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-8 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                                >
                                    Return to Homepage
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </Container>
            </main>
        )
    }

    // Form screen
    return (
        <main>
            {/* HERO */}
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <FadeIn className="mx-auto max-w-4xl text-center">
                    <p className="relative inline-flex pl-3 text-sm font-medium text-neutral-600 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500">
                        Free GDPR Assessment
                    </p>
                    <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 text-balance">
                        Do You Need a Data Protection Officer?
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-neutral-700 leading-relaxed">
                        Take our comprehensive 10-minute assessment to determine your GDPR compliance requirements and receive a detailed report with
                        personalized recommendations.
                    </p>
                </FadeIn>
            </Container>

            {/* ASSESSMENT FORM */}
            <Container className="mt-16">
                <div className="mx-auto max-w-4xl">
                    {/* Progress Bar */}
                    <div className="mb-8">
                        <div className="flex justify-between text-sm text-neutral-600 mb-2">
                            <span>
                                Question {currentStep + 1} of {assessmentQuestions.length + 1}
                            </span>
                            <span>{Math.round(progress)}% Complete</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                        </div>
                    </div>

                    <FadeIn>
                        <div className="rounded-3xl bg-white p-8 ring-1 ring-neutral-950/10 shadow-lg">
                            {!isContactStep ? (
                                <div>
                                    <div className="mb-6">
                                        <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-600">
                                            {currentQuestion.category}
                                        </span>
                                    </div>

                                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 mb-4">{currentQuestion.question}</h2>

                                    {currentQuestion.subtitle && <p className="text-neutral-600 mb-6">{currentQuestion.subtitle}</p>}

                                    <div className="space-y-3">
                                        {currentQuestion.options.map((option) => {
                                            const isSelected =
                                                currentQuestion.type === 'single'
                                                    ? responses[currentQuestion.id] === option.value
                                                    : (responses[currentQuestion.id] || []).includes(option.value)

                                            return (
                                                <button
                                                    key={option.value}
                                                    onClick={() => handleResponse(currentQuestion.id, option.value)}
                                                    className={`w-full text-left rounded-2xl p-4 border-2 transition ${isSelected
                                                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                                                            : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                                                        }`}
                                                >
                                                    <div className="flex items-center">
                                                        <div
                                                            className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${isSelected ? 'border-emerald-500 bg-emerald-500' : 'border-neutral-300'
                                                                }`}
                                                        >
                                                            {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                                                        </div>
                                                        <span className="font-medium">{option.label}</span>
                                                    </div>
                                                </button>
                                            )
                                        })}
                                    </div>

                                    {currentQuestion.maxSelections && (
                                        <p className="mt-4 text-sm text-neutral-500">Select up to {currentQuestion.maxSelections} options</p>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <div className="mb-6">
                                        <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
                                            Contact Information
                                        </span>
                                    </div>

                                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950 mb-4">Get Your Assessment Results</h2>

                                    <p className="text-neutral-600 mb-8">
                                        We'll send your personalized DPO assessment report to your email address.
                                    </p>

                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-900 mb-2">Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={contactInfo.name}
                                                onChange={(e) => setContactInfo((p) => ({ ...p, name: e.target.value }))}
                                                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-900 mb-2">Email Address *</label>
                                            <input
                                                type="email"
                                                required
                                                value={contactInfo.email}
                                                onChange={(e) => setContactInfo((p) => ({ ...p, email: e.target.value }))}
                                                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                                placeholder="Enter your email address"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-900 mb-2">Company/Organization</label>
                                            <input
                                                type="text"
                                                value={contactInfo.company}
                                                onChange={(e) => setContactInfo((p) => ({ ...p, company: e.target.value }))}
                                                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                                placeholder="Enter company name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-900 mb-2">Position/Role</label>
                                            <input
                                                type="text"
                                                value={contactInfo.position}
                                                onChange={(e) => setContactInfo((p) => ({ ...p, position: e.target.value }))}
                                                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 placeholder-neutral-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                                placeholder="e.g., CEO, Privacy Manager"
                                            />
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label className="block text-sm font-semibold text-neutral-900 mb-2">Country</label>
                                            <select
                                                value={contactInfo.country}
                                                onChange={(e) => setContactInfo((p) => ({ ...p, country: e.target.value }))}
                                                className="w-full rounded-lg border border-neutral-300 px-4 py-3 text-neutral-900 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                                            >
                                                <option value="">Select your country</option>
                                                <option value="AT">Austria</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czech Republic</option>
                                                <option value="DK">Denmark</option>
                                                <option value="EE">Estonia</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="DE">Germany</option>
                                                <option value="GR">Greece</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IE">Ireland</option>
                                                <option value="IT">Italy</option>
                                                <option value="LV">Latvia</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MT">Malta</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="RO">Romania</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="ES">Spain</option>
                                                <option value="SE">Sweden</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                                <option value="GB">United Kingdom</option>
                                                <option value="AU">Australia</option>
                                                <option value="OTHER">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-8 space-y-4">
                                        <div className="flex items-start">
                                            <input
                                                type="checkbox"
                                                id="privacy-consent"
                                                checked={contactInfo.privacyConsent}
                                                onChange={(e) => setContactInfo((p) => ({ ...p, privacyConsent: e.target.checked }))}
                                                className="mt-1 h-4 w-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"
                                            />
                                            <label htmlFor="privacy-consent" className="ml-3 text-sm text-neutral-700">
                                                <span className="font-semibold">Required:</span> I consent to the processing of my personal data for the purpose of
                                                receiving my DPO assessment results. *
                                            </label>
                                        </div>

                                        <div className="flex items-start">
                                            <input
                                                type="checkbox"
                                                id="marketing-consent"
                                                checked={contactInfo.marketingConsent}
                                                onChange={(e) => setContactInfo((p) => ({ ...p, marketingConsent: e.target.checked }))}
                                                className="mt-1 h-4 w-4 rounded border-neutral-300 text-emerald-600 focus:ring-emerald-500"
                                            />
                                            <label htmlFor="marketing-consent" className="ml-3 text-sm text-neutral-700">
                                                I would like to receive marketing communications about GDPR compliance services, regulatory updates, and privacy best
                                                practices. (Optional)
                                            </label>
                                        </div>
                                    </div>

                                    <div className="mt-6 rounded-2xl bg-neutral-50 p-4">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm text-neutral-600">
                                                    <strong>Privacy Notice:</strong> Your assessment responses and contact information will be processed according to our
                                                    privacy policy. We use industry-standard security measures to protect your data.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="mt-8 flex justify-between">
                                <button
                                    onClick={prevStep}
                                    disabled={currentStep === 0}
                                    className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition ${currentStep === 0 ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed' : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                                        }`}
                                >
                                    ← Previous
                                </button>

                                {!isContactStep ? (
                                    <button
                                        onClick={nextStep}
                                        disabled={!canProceed()}
                                        className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition ${canProceed() ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                                            }`}
                                    >
                                        Next →
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!canProceed() || isSubmitting}
                                        className={`inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition ${canProceed() && !isSubmitting
                                                ? 'bg-neutral-950 text-white hover:scale-105'
                                                : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            'Get My Assessment Results'
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Container>

            {/* BENEFITS */}
            <Container className="mt-24">
                <Border />
                <FadeInStagger className="mt-16">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-950">What You'll Receive</h2>
                        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500">
                                <div className="inline-flex rounded-lg bg-emerald-100 p-2 mb-4">
                                    <div className="w-5 h-5 bg-emerald-600 rounded" />
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-900">Personalized Report</h3>
                                <p className="mt-2 text-sm text-neutral-600">Detailed analysis of your specific compliance requirements and risk level</p>
                            </div>

                            <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-indigo-500">
                                <div className="inline-flex rounded-lg bg-indigo-100 p-2 mb-4">
                                    <div className="w-5 h-5 bg-indigo-600 rounded" />
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-900">Action Plan</h3>
                                <p className="mt-2 text-sm text-neutral-600">Step-by-step recommendations prioritized by urgency and impact</p>
                            </div>

                            <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-amber-500">
                                <div className="inline-flex rounded-lg bg-amber-100 p-2 mb-4">
                                    <div className="w-5 h-5 bg-amber-600 rounded" />
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-900">Expert Guidance</h3>
                                <p className="mt-2 text-sm text-neutral-600">Professional insights based on current GDPR enforcement trends</p>
                            </div>
                        </div>
                    </div>
                </FadeInStagger>
            </Container>
        </main>
    )
}
