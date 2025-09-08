
// app/br/gdpr-dpo/page.jsx
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Border } from '@/components/Border'
import RegulationsFactStrip from '@/components/RegulationsFactStrip'
import { StylizedImage } from '@/components/StylizedImage'
import { ColorDivider } from '@/components/ColorDivider'
import { BookingForm } from '@/components/BookingForm'
import JhonathanPhoto from '@/images/JhonathanPhoto.jpg'
import imageLaptop from '@/images/laptop.jpg'

export const metadata = {
    title: 'DPO Europeu para Empresas Brasileiras — Oversight Governance Studio',
    description:
        'Data Protection Officer na Europa para empresas brasileiras. Advogado (USP — Largo de São Francisco) e Engenheiro de Software em Berlim. GDPR na prática, contratos prontos para due diligence e evidências de conformidade.',
}

// Fatos do GDPR (PT-BR)
const facts = [
    {
        color: '#2563eb', // azul
        title: 'Em vigor',
        value: '25 mai 2018',
        description: 'Aplicável em toda a União Europeia',
    },
    {
        color: '#f59e0b', // âmbar
        title: 'Quem precisa',
        value: 'Empresas que oferecem bens/serviços na UE',
        description: 'Inclui empresas fora da UE com atividades voltadas a residentes da UE',
    },
    {
        color: '#e11d48', // rose
        title: 'Multas',
        value: 'Até €20M ou 4% do faturamento global',
        description: 'Para infrações graves (art. 83)',
    },
]

export default function GdprDpoBrPage() {
    return (
        <main>
            {/* HERO */}
            <Container className="mt-24 sm:mt-28 lg:mt-40">
                <FadeIn className="max-w-5xl">
                    <p className="relative pl-3 text-sm font-medium text-neutral-600 before:absolute before:left-0 before:top-1/2 before:h-2 before:w-1 before:-translate-y-1/2 before:rounded before:bg-emerald-500">
                        Para empresas brasileiras com clientes na União Europeia
                    </p>

                    <h1 className="mt-3 font-display text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-950 text-balance">
                        Data Protection Officer na Europa para empresas brasileiras.
                    </h1>

                    <h2 className="mt-4 text-xl sm:text-2xl text-neutral-700 leading-relaxed">
                        Atuação como <span className="font-semibold">DPO externo na UE</span> com base em Berlim —
                        <span className="font-semibold"> advogado formado na USP (Largo de São Francisco)</span> e
                        <span className="font-semibold"> engenheiro de software</span>. Conectamos jurídico e tecnologia para
                        <span className="font-semibold"> operar GDPR na prática</span>, acelerar contratos e passar em due diligence.
                    </h2>

                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-105"
                        >
                            Agendar conversa
                        </Link>
                        <a
                            href="#oferta"
                            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                        >
                            Ver como funciona →
                        </a>
                    </div>
                </FadeIn>
            </Container>

            {/* FOTO + PROVA RÁPIDA */}
            <Container className="mt-14 sm:mt-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                    <FadeIn className="lg:col-span-4">
                        <div className="overflow-hidden rounded-2xl bg-neutral-100 ring-1 ring-neutral-950/10">
                            <Image src={JhonathanPhoto} alt="Jhonathan Campos" className="w-full h-auto object-cover" priority />
                        </div>
                    </FadeIn>
                    <FadeIn className="lg:col-span-8">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    t: 'Dupla formação rara',
                                    d: 'Direito (USP — Largo de São Francisco) + Engenharia de Software. Traduzo regulatório em backlog e evidência técnica.',
                                    color: 'before:bg-emerald-500',
                                },
                                {
                                    t: 'Base na União Europeia',
                                    d: 'Residência em Berlim, fuso horário e experiência local para lidar com clientes, autoridades e auditores europeus.',
                                    color: 'before:bg-indigo-500',
                                },
                                {
                                    t: 'Contratos que destravam deals',
                                    d: 'Políticas, RoPA, DPIA, SCCs/TIAs e cláusulas que passam em procurement e segurança de grandes clientes.',
                                    color: 'before:bg-amber-500',
                                },
                                {
                                    t: 'Port., Inglês e Alemão',
                                    d: 'Três idiomas para negociar com jurídico, engenharia e segurança dos seus parceiros na UE.',
                                    color: 'before:bg-rose-500',
                                },
                            ].map(({ t, d, color }) => (
                                <li key={t} className="rounded-3xl bg-white p-5 ring-1 ring-neutral-950/10 shadow-sm">
                                    <h3
                                        className={[
                                            'relative pl-4 font-display text-base font-semibold text-neutral-950',
                                            'before:absolute before:left-0 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full',
                                            color,
                                        ].join(' ')}
                                    >
                                        {t}
                                    </h3>
                                    <p className="mt-2 text-sm text-neutral-700">{d}</p>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>
            </Container>

            {/* FATOS GDPR */}
            <Container className="mt-16">
                <SectionIntro eyebrow="GDPR — Regulamento Europeu" title="O que muda para empresas do Brasil que atendem a UE">
                    <p>
                        Se você oferta produtos/serviços a pessoas na UE ou monitora comportamento, o GDPR se aplica. Atuo como seu DPO
                        externo para <span className="font-semibold">desenhar controles</span>, <span className="font-semibold">treinar times</span> e
                        <span className="font-semibold"> gerar prova auditável</span>.
                    </p>
                </SectionIntro>
                <RegulationsFactStrip facts={facts} />
            </Container>

            {/* OFERTA PRINCIPAL */}
            <Container id="oferta" className="mt-20">
                <FadeIn className="mx-auto max-w-6xl">
                    <h2
                        className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950
                       before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2
                       before:rounded before:bg-emerald-500/70"
                    >
                        Serviço principal — DPO Externo na União Europeia
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <div className="rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-emerald-500">
                            <h3 className="text-lg font-semibold text-neutral-900">Escopo</h3>
                            <p className="mt-2 text-sm text-neutral-700">
                                Representação e aconselhamento contínuo: riscos, políticas, avaliação de bases legais, privacy by design,
                                atendimento a titulares e interface com clientes/auditores.
                            </p>
                            <div className="mt-4 h-px w-full bg-neutral-200 relative">
                                <span className="absolute top-0 left-0 h-px w-16 bg-emerald-600" />
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-indigo-500">
                            <h3 className="text-lg font-semibold text-neutral-900">Entregáveis</h3>
                            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                                <li>RoPA (Registros de Operações de Tratamento)</li>
                                <li>DPIA (Avaliação de Impacto) quando aplicável</li>
                                <li>Políticas e avisos de privacidade</li>
                                <li>Governança de fornecedores (Art. 28)</li>
                                <li>Transferências internacionais (SCCs/TIAs)</li>
                                <li>Playbook de incidentes (72h) e evidências</li>
                            </ul>
                            <div className="mt-4 h-px w-full bg-neutral-200 relative">
                                <span className="absolute top-0 left-0 h-px w-16 bg-indigo-600" />
                            </div>
                        </div>

                        <div className="rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm border-l-2 border-amber-500">
                            <h3 className="text-lg font-semibold text-neutral-900">Resultados</h3>
                            <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                                <li>Contratos destravados e ciclos de procurement mais curtos</li>
                                <li>Riscos priorizados com donos e prazos claros</li>
                                <li>Evidência pronta para auditoria e due diligence</li>
                                <li>Time treinado e rotina leve de manutenção</li>
                            </ul>
                            <div className="mt-4 h-px w-full bg-neutral-200 relative">
                                <span className="absolute top-0 left-0 h-px w-16 bg-amber-600" />
                            </div>
                        </div>
                    </div>

                    {/* Botões */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-105"
                        >
                            Falar sobre DPO externo
                        </Link>
                        <a
                            href="#servicos"
                            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm text-neutral-700 hover:bg-neutral-50"
                        >
                            Ver serviços relacionados →
                        </a>
                    </div>
                </FadeIn>
            </Container>

            {/* SERVIÇOS RELACIONADOS */}
            <Container id="servicos" className="mt-20">
                <FadeIn className="mx-auto max-w-6xl">
                    <h2
                        className="relative pl-3 font-display text-2xl sm:text-3xl font-semibold text-neutral-950
                       before:absolute before:left-0 before:top-1/2 before:h-5 before:w-1 before:-translate-y-1/2
                       before:rounded before:bg-indigo-500/70"
                    >
                        Serviços que se conectam ao DPO Externo
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-6">
                        {[
                            {
                                title: 'Entrada na UE & readiness para clientes',
                                desc:
                                    'Mapeamento de bases legais, avisos, cláusulas contratuais, transferências e pacote de evidências para procurement.',
                                cta: 'Planejar entrada na UE',
                                color: { border: 'border-pink-500', ring: 'hover:ring-pink-200' },
                                span: 'lg:col-span-3',
                            },
                            {
                                title: 'Programa RoPA (Art. 30)',
                                desc:
                                    'Registros de tratamento por processo/sistema, responsabilidades, retenção e medidas de segurança com rotina leve de atualização.',
                                cta: 'Organizar meus registros',
                                color: { border: 'border-sky-500', ring: 'hover:ring-sky-200' },
                                span: 'lg:col-span-3',
                            },
                            {
                                title: 'DPIA sob medida',
                                desc:
                                    'Escopo, entrevistas, análise de risco, mitigação e documentação de aprovação — antes do go-live.',
                                cta: 'Planejar minha DPIA',
                                color: { border: 'border-amber-500', ring: 'hover:ring-amber-200' },
                                span: 'lg:col-span-2',
                            },
                            {
                                title: 'Transferências internacionais',
                                desc:
                                    'SCCs/TIAs, configuração de serviços e contratos alinhados ao fluxo real de dados.',
                                cta: 'Revisar transferências',
                                color: { border: 'border-emerald-500', ring: 'hover:ring-emerald-200' },
                                span: 'lg:col-span-2',
                            },
                            {
                                title: 'Governança de fornecedores (Art. 28)',
                                desc:
                                    'Onboarding e revisão periódica com checklist prático, cláusulas reconhecidas e cadência realista.',
                                cta: 'Fortalecer vendors',
                                color: { border: 'border-violet-500', ring: 'hover:ring-violet-200' },
                                span: 'lg:col-span-2',
                            },
                            {
                                title: 'Treinamento e cultura',
                                desc:
                                    'Workshops para produto, engenharia e jurídico: privacy by design, incidentes em 72h e decisões defensáveis.',
                                cta: 'Treinar meu time',
                                color: { border: 'border-rose-500', ring: 'hover:ring-rose-200' },
                                span: 'lg:col-span-2',
                            },
                        ].map(({ title, desc, cta, color, span }) => (
                            <div key={title} className={`group ${span} `}>
                                <div
                                    className={[
                                        'rounded-3xl bg-white p-7 ring-1 ring-neutral-950/10 shadow-sm flex h-full flex-col',
                                        'transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md',
                                        'border-l-2',
                                        color.border,
                                        color.ring,
                                    ].join(' ')}
                                >
                                    <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
                                    <p className="mt-2 text-sm text-neutral-700">{desc}</p>
                                    <div className="mt-auto pt-5">
                                        <Link
                                            href="/contact"
                                            className="inline-flex rounded-full bg-neutral-950 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
                                        >
                                            {cta}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </Container>

            {/* PROCESSO */}
            <SectionIntro
                eyebrow="Como trabalhamos"
                title="De requisito regulatório a vantagem competitiva"
                className="mt-24 sm:mt-32 lg:mt-40"
            >
                <p>
                    Integramos jurídico, engenharia e segurança para reduzir risco sem travar o produto. O resultado é velocidade com
                    governança real e evidência pronta.
                </p>
            </SectionIntro>

            <Container className="mt-16">
                <div className="lg:flex lg:items-center lg:justify-end">
                    {/* imagem */}
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                            <StylizedImage
                                src={imageLaptop}
                                sizes="(min-width: 1024px) 41rem, 31rem"
                                className="justify-center lg:justify-end"
                            />
                        </FadeIn>
                    </div>
                    {/* lista */}
                    <ul role="list" className="mt-16 space-y-12 lg:mt-0 lg:w-1/2 lg:pl-4">
                        <li>
                            <h3 className="font-display text-lg font-semibold text-neutral-900">Diagnosticar</h3>
                            <p className="mt-2 text-neutral-600">
                                Descobrimos fluxos de dados, bases legais, riscos e dependências de fornecedores. Você recebe um plano
                                priorizado com esforço/impacto/prazos.
                            </p>
                            <ColorDivider primaryClass="bg-emerald-700" secondaryClass="bg-emerald-200" primaryWidth="w-16" />
                        </li>
                        <li>
                            <h3 className="font-display text-lg font-semibold text-neutral-900">Implementar</h3>
                            <p className="mt-2 text-neutral-600">
                                Controles que funcionam: políticas, RoPA, DPIA, governança de vendors, transferências, incidentes 72h,
                                privacy by design e treinamentos.
                            </p>
                            <ColorDivider primaryClass="bg-indigo-600" secondaryClass="bg-indigo-200" />
                        </li>
                        <li>
                            <h3 className="font-display text-lg font-semibold text-neutral-900">Sustentar</h3>
                            <p className="mt-2 text-neutral-600">
                                Rotina leve: owners, cadência trimestral, logs de mudanças e evidência contínua para auditorias e clientes.
                            </p>
                            <ColorDivider primaryClass="bg-amber-600" secondaryClass="bg-amber-200" />
                        </li>
                        <li className="pt-2">
                            <Link
                                href="/process"
                                className="inline-flex items-center gap-1 text-md font-semibold text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900"
                                aria-label="Ver processo detalhado"
                            >
                                Ver processo completo →
                            </Link>
                        </li>
                    </ul>
                </div>
            </Container>

            {/* SEÇÃO PROVAS / POR QUE COMPRAR */}
            <Container className="mt-24">
                <Border />
                <FadeInStagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            k: 'Evidência auditável',
                            v: 'Documentos e registros que auditores realmente usam: RoPA, DPIA, logs de risco, decisões e aprovações ligadas a releases.',
                            color: { border: 'border-emerald-500', dot: 'before:bg-emerald-500' },
                        },
                        {
                            k: 'Deals mais rápidos',
                            v: 'Respostas consistentes a segurança/privacidade, cláusulas reconhecidas e fluxos de dados claros aceleram procurement.',
                            color: { border: 'border-amber-500', dot: 'before:bg-amber-500' },
                        },
                        {
                            k: 'Menos risco e retrabalho',
                            v: 'Exigências de pré-lançamento entram no ciclo de produto, evitando atrasos e mudanças de última hora.',
                            color: { border: 'border-indigo-500', dot: 'before:bg-indigo-500' },
                        },
                    ].map(({ k, v, color }) => (
                        <div
                            key={k}
                            className={[
                                'rounded-3xl bg-white p-6 ring-1 ring-neutral-950/10 shadow-sm border-l-2',
                                color.border,
                            ].join(' ')}
                        >
                            <p
                                className={[
                                    'relative pl-3 text-sm font-semibold text-neutral-900',
                                    'before:absolute before:left-0 before:top-1/2 before:h-4 before:w-1 before:-translate-y-1/2 before:rounded',
                                    color.dot,
                                ].join(' ')}
                            >
                                {k}
                            </p>
                            <p className="mt-1 text-sm text-neutral-700">{v}</p>
                        </div>
                    ))}
                </FadeInStagger>
            </Container>

            {/* CHAMADA FINAL */}
            <Container className="mt-24">
                <div className="rounded-4xl bg-neutral-950 px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-12 text-center">
                    <h2 className="font-display text-3xl font-semibold">
                        Vamos liderar a privacidade na UE com segurança e velocidade.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
                        DPO externo europeu para sua empresa brasileira — jurídico + engenharia, contratos prontos e evidência que
                        passa em auditoria.
                    </p>
                    <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:scale-105"
                    >
                        Falar com o DPO
                    </Link>
                </div>
            </Container>

            {/* FORM DE AGENDAMENTO (opcional) */}
            <BookingForm />

            {/* RODAPÉ CURTO (opcional: pode remover se já existir no layout) */}
        </main>
    )
}

