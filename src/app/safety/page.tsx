'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Shield, Eye, MapPin, Smartphone, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function SafetyPage() {
    const tips = [
        {
            title: 'Meet in Public Spaces',
            desc: 'Always arrange to meet in well-lit, busy areas on campus. The library, main canteen, or near security gates are ideal spots.',
            icon: MapPin,
            color: 'text-blue-400',
            bgColor: 'bg-blue-500/10'
        },
        {
            title: 'Inspect Before You Pay',
            desc: "Don't pay any money upfront. Meet the seller, inspect the condition of the item thoroughly, and only pay when you're satisfied.",
            icon: Eye,
            color: 'text-primary-400',
            bgColor: 'bg-primary-500/10'
        },
        {
            title: 'Protect Your Information',
            desc: 'Avoid sharing your personal phone number, OTPs, or passwords. Use the in-app chat for all communication.',
            icon: Smartphone,
            color: 'text-amber-400',
            bgColor: 'bg-amber-500/10'
        },
        {
            title: 'Trust Your Instincts',
            desc: 'If a deal feels too good to be true or a user makes you uncomfortable, walk away. Your safety is more important than any bargain.',
            icon: Shield,
            color: 'text-emerald-400',
            bgColor: 'bg-emerald-500/10'
        }
    ]

    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Campus <span className="gradient-text">Safety</span> First
                        </h1>
                        <p className="text-xl text-dark-300">
                            Your safety comes first. Protect yourself with these campus-verified tips.
                        </p>
                    </div>

                    {/* Tips Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {tips.map((tip, index) => (
                            <div key={index} className="glass-card p-10 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className={`w-14 h-14 rounded-2xl ${tip.bgColor} flex items-center justify-center mb-6`}>
                                    <tip.icon className={`w-7 h-7 ${tip.color}`} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{tip.title}</h3>
                                <p className="text-dark-300 leading-relaxed text-lg italic">
                                    {tip.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Checklist */}
                    <div className="glass-card p-10 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/5 blur-3xl -mr-40 -mt-40" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-display font-bold text-white mb-10 flex items-center gap-3">
                                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                                Final Safety Checklist
                            </h2>
                            <div className="space-y-6">
                                {[
                                    'Meet during daylight hours.',
                                    'Tell a friend or roommate where you are going.',
                                    "Verify the user's student status on their profile.",
                                    'Use digital payments (like UPI) only after inspection.',
                                    'Report any suspicious behavior immediately.'
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 items-center animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                                        <div className="w-6 h-6 rounded-full border-2 border-primary-500 flex items-center justify-center shrink-0">
                                            <div className="w-2.5 h-2.5 rounded-full bg-primary-500" />
                                        </div>
                                        <span className="text-white text-lg font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
