'use client'

import React from 'react'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'

export function OversightMark({
    size = 24,
    invert = false,
    animated = true,
    className,
    'aria-hidden': ariaHidden = true,
}) {
    const shouldReduceMotion = useReducedMotion()
    const doAnimate = animated && !shouldReduceMotion

    const base = invert ? '#FFFFFF' : '#1a1a1a'
    const lines = invert ? '#D1D5DB' : '#666666'
    const accent = '#4f46e5'

    const radius = 38
    const circumference = 2 * Math.PI * radius

    const circleVariants = {
        hidden: { strokeDasharray: circumference, strokeDashoffset: circumference, scale: 0.95 },
        visible: {
            strokeDashoffset: 0,
            scale: [0.95, 1.05, 1],
            transition: {
                strokeDashoffset: { duration: 1.2, ease: 'easeInOut' },
                scale: { duration: 0.3, delay: 1.2, times: [0, 0.6, 1], ease: 'easeOut' },
            },
        },
    }

    const contentVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { delay: 0.6, duration: 0.6, ease: 'easeOut' } },
    }

    const linesVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { delay: 1.0, duration: 0.4, ease: 'easeOut' } },
    }

    if (!doAnimate) {
        return (
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
                aria-hidden={ariaHidden}
            >
                <circle cx="50" cy="50" r="38" stroke={base} strokeWidth="2" fill="none" />
                <path d="M35 35 L65 35 L65 50 L50 50 L50 65 L35 65 Z" fill={base} />
                <path d="M55 45 L65 45 L65 55 L55 55 Z" fill={accent} />
                <line x1="40" y1="25" x2="40" y2="35" stroke={lines} strokeWidth="1.5" />
                <line x1="60" y1="25" x2="60" y2="35" stroke={lines} strokeWidth="1.5" />
                <line x1="25" y1="40" x2="35" y2="40" stroke={lines} strokeWidth="1.5" />
                <line x1="65" y1="60" x2="75" y2="60" stroke={lines} strokeWidth="1.5" />
                <line x1="40" y1="65" x2="40" y2="75" stroke={lines} strokeWidth="1.5" />
                <line x1="60" y1="65" x2="60" y2="75" stroke={lines} strokeWidth="1.5" />
            </svg>
        )
    }

    return (
        <MotionConfig reducedMotion="user">
            <motion.svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
                className={className}
                aria-hidden={ariaHidden}
            >
                <motion.circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke={base}
                    strokeWidth="2"
                    fill="none"
                    variants={circleVariants}
                    style={{ transformOrigin: '50% 50%' }}
                />
                <motion.path d="M35 35 L65 35 L65 50 L50 50 L50 65 L35 65 Z" fill={base} variants={contentVariants} />
                <motion.path d="M55 45 L65 45 L65 55 L55 55 Z" fill={accent} variants={contentVariants} />
                <motion.g variants={linesVariants}>
                    <line x1="40" y1="25" x2="40" y2="35" stroke={lines} strokeWidth="1.5" />
                    <line x1="60" y1="25" x2="60" y2="35" stroke={lines} strokeWidth="1.5" />
                    <line x1="25" y1="40" x2="35" y2="40" stroke={lines} strokeWidth="1.5" />
                    <line x1="65" y1="60" x2="75" y2="60" stroke={lines} strokeWidth="1.5" />
                    <line x1="40" y1="65" x2="40" y2="75" stroke={lines} strokeWidth="1.5" />
                    <line x1="60" y1="65" x2="60" y2="75" stroke={lines} strokeWidth="1.5" />
                </motion.g>
            </motion.svg>
        </MotionConfig>
    )
}

export function OversightWordmark({
    invert = false,
    animated = true,
    markSize = 26,
    className,
    replayKey, // optional: force remount for hover replay
}) {
    const textColor = invert ? 'text-white' : 'text-neutral-950'
    return (
        <div
            className={clsx('flex items-center gap-1', textColor, className)}
            aria-label="Oversight Governance"
        >
            {/* forward replayKey to force animation restart */}
            <OversightMark key={replayKey} size={markSize} invert={invert} animated={animated} />
            <span className="font-bold text-xl leading-none">Oversight</span>{' '}
            <span className="font-medium text-xl leading-none">Governance</span>
        </div>
    )
}
