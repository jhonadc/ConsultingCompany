import { getRequestConfig } from 'next-intl/server'

const SUPPORTED = ['en', 'pt', 'de']
const DEFAULT = 'en'

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale
    const locale = SUPPORTED.includes(requested) ? requested : DEFAULT

    const [
        common,
        aiAct,
        highRisk,
        aiLiteracy,
        aiPolicy,
        home,
        regulations,
        gdpr,
        lgpd,
        accessibility,
        process,
        about,
        team,
        contact,
        booking,
        cRootlayout,
        cFooter,
        gdprDpo,
        aiOfficer,
    ] = await Promise.all([
        import(`../../locales/${locale}/common.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/ai-act.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/ai-services-highrisk.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/ai-services-ailiteracy.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/ai-services-aipolicy.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/home.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/regulations-main.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/gdpr.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/lgpd.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/accessibility.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/process.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/about.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/team.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/contact.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/booking.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/c-rootlayout.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/c-footer.json`).then((m) => m.default).catch(() => ({})),
        import(`../../locales/${locale}/gdpr-dpo.json`).then(m => m.default).catch(() => ({})),
        import(`../../locales/${locale}/ai-officer.json`).then(m => m.default).catch(() => ({})) // ✅ new

    ])

    return {
        locale,
        messages: {
            ...common,
            ...aiAct,
            highRisk,
            aiLiteracy,
            aiPolicy,
            home,
            regulationsIndex: regulations.regulationsIndex ?? {},
            gdpr,
            lgpd,
            accessibility,
            process,
            about,
            ...team,
            ...contact,
            ...booking,
            'c-rootlayout': cRootlayout,
            'c-footer': cFooter,
            ...gdprDpo,
            ...aiOfficer,

        }
    }
})
