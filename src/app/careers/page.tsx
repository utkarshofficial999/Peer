'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Briefcase, Sparkles, Code, PenTool, TrendingUp, Mail } from 'lucide-react'

export default function CareersPage() {
    const roles = [
        { title: 'Student Ambassadors', icon: TrendingUp, desc: 'Lead PeeRly on your campus. Manage events and grow the community.' },
        { title: 'Frontend Developers', icon: Code, desc: 'Build stunning, fast, and responsive React interfaces with us.' },
        { title: 'Content Creators', icon: PenTool, desc: 'Help us tell the PeeRly story through blogs, videos, and social media.' },
        { title: 'Campus Marketing Interns', icon: Sparkles, desc: 'Learn real-world marketing and growth hacking on your own campus.' }
    ]

    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Join the <span className="gradient-text">Movement</span>
                        </h1>
                        <p className="text-xl text-dark-300 max-w-2xl mx-auto italic">
                            &quot;Build With Us 🚀&quot;
                        </p>
                    </div>

                    {/* Culture Stat */}
                    <div className="glass-card p-10 mb-12 border-primary-500/10 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-display font-bold text-white mb-4">Why PeeRly?</h2>
                            <p className="text-dark-300 text-lg max-w-2xl mx-auto leading-relaxed">
                                We&apos;re not just a platform; we&apos;re a group of students and creators building the future of campus commerce. We work fast, learn together, and value initiative above all else.
                            </p>
                        </div>
                    </div>

                    {/* Roles Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {roles.map((role, index) => (
                            <div key={index} className="glass-card p-8 group hover:border-primary-500/30 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <role.icon className="w-6 h-6 text-primary-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
                                <p className="text-dark-400 leading-relaxed italic text-sm">
                                    {role.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Application CTA */}
                    <div className="text-center bg-white/5 border border-white/10 rounded-3xl p-12 animate-slide-up">
                        <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="w-8 h-8 text-primary-400" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-white mb-4">Send us your resume</h2>
                        <p className="text-dark-400 mb-8 max-w-md mx-auto">
                            Don&apos;t see a role that fits? Send us your resume anyway and tell us how you can help PeeRly grow.
                        </p>
                        <a
                            href="mailto:careers@peerly.in"
                            className="inline-flex items-center gap-3 bg-white text-dark-950 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
                        >
                            <Mail className="w-5 h-5" />
                            careers@peerly.in
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
