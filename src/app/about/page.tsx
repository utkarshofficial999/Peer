'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Rocket, Target, Users, ShieldCheck } from 'lucide-react'

export default function AboutPage() {
    const values = [
        {
            icon: Users,
            title: 'Community Driven',
            description: 'We believe in the power of student communities helping each other succeed.'
        },
        {
            icon: Target,
            title: 'Campus Focused',
            description: 'Everything we do is designed to solve specific challenges students face on campus.'
        },
        {
            icon: ShieldCheck,
            title: 'Safety & Trust',
            description: 'Verification via college ID ensures you are always trading with a verified peer.'
        }
    ]

    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-20 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            About <span className="gradient-text">PeeRly</span>
                        </h1>
                        <p className="text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed">
                            We are a student-focused peer-to-peer marketplace built to make campus life easier, safer, and more affordable.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="glass-card p-10 md:p-16 mb-20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-3xl -mr-32 -mt-32 transition-colors group-hover:bg-primary-500/20" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
                                <Rocket className="w-8 h-8 text-primary-400" />
                                Our Mission
                            </h2>
                            <p className="text-xl text-dark-200 leading-relaxed mb-8">
                                To create a trusted digital space where students help students. We want to remove the friction of buying and selling essentials, allowing you to focus on what matters most—your education and campus experience.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <h3 className="text-white font-bold mb-2">The Problem</h3>
                                    <p className="text-dark-400">High costs of new materials, trust issues with open platforms, and the hassle of arranging meetups outside campus.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-primary-500/10 border border-primary-500/10">
                                    <h3 className="text-white font-bold mb-2">Our Solution</h3>
                                    <p className="text-dark-300">A verified, campus-only marketplace that makes trades fast, secure, and right where you already are.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                        {values.map((value, index) => (
                            <div key={index} className="glass-card p-8 text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                                    <value.icon className="w-6 h-6 text-primary-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-dark-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Team Shoutout */}
                    <div className="text-center animate-fade-in">
                        <p className="text-dark-400 font-medium">Proudly serving ABES Engineering College students.</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
