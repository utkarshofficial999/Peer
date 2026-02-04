'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Building2, Recycle, Mail, BadgeCheck, Zap } from 'lucide-react'

export default function CollegesPage() {
    const benefits = [
        {
            title: 'Sustainability',
            desc: 'Reduces waste through reuse and circular economy within the campus.',
            icon: Recycle
        },
        {
            title: 'Affordability',
            desc: 'Makes campus life cost-effective by providing access to used essentials.',
            icon: Zap
        },
        {
            title: 'Verified Safety',
            desc: 'Restricts access to only your verified students via .edu or campus email.',
            icon: BadgeCheck
        }
    ]

    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            For <span className="gradient-text">Colleges</span>
                        </h1>
                        <p className="text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed">
                            Support your students and promote sustainability by officializing PeeRly as your campus's trusted trade partner.
                        </p>
                    </div>

                    {/* Why colleges love us */}
                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="glass-card p-8 border-primary-500/10 hover:border-primary-500/30 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6">
                                    <benefit.icon className="w-6 h-6 text-primary-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-dark-400">
                                    {benefit.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Partnership Section */}
                    <div className="glass-card p-8 md:p-12 animate-slide-up relative overflow-hidden">
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent-500/5 blur-3xl rounded-full" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                                <Building2 className="w-8 h-8 text-accent-400" />
                                Support Campus Entrepreneurship
                            </h2>
                            <p className="text-lg text-dark-300 mb-8 leading-relaxed">
                                We work closely with administrative bodies to ensure a safe, clean, and professional environment. officially partnering with us means:
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Pre-verified email whitelist for your college',
                                    'Dashboard for security team to verify sellers',
                                    'Sustainability reports for campus recycling goals',
                                    'Direct support for student-led initiatives'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-dark-200">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            {/* Contact Box */}
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                                <h3 className="text-xl font-bold text-white mb-2">Interested in partnering?</h3>
                                <p className="text-dark-400 mb-6">Let's talk about how we can help your students.</p>
                                <a
                                    href="mailto:colleges@peerly.in"
                                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-bold text-lg transition-colors underline underline-offset-8 decoration-primary-500/30"
                                >
                                    <Mail className="w-5 h-5" />
                                    colleges@peerly.in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
