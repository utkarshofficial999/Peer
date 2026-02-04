'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function PrivacyPage() {
    const sections = [
        {
            title: 'Information We Collect',
            content: 'We collect basic account information like your name, college email, and profile avatar. We also store your listings and messages to facilitate trades and ensure campus safety.'
        },
        {
            title: 'How We Use Your Data',
            content: 'Your data is used to verify your student status, display your listings, and allow other students to contact you. We do not sell your personal data to third parties.'
        },
        {
            title: 'Data Security',
            content: 'We use industry-standard security measures to protect your information. Your email is only used for verification and important platform notifications.'
        },
        {
            title: 'User Control',
            content: 'You can update your profile details and delete your listings at any time through your dashboard. If you wish to delete your account, please contact us.'
        }
    ]

    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="glass-card p-10 md:p-16">
                        <h1 className="text-4xl font-display font-bold text-white mb-2">Privacy Policy</h1>
                        <p className="text-dark-400 mb-10 pb-10 border-b border-white/5">Last Updated: February 4, 2026</p>

                        <div className="space-y-12">
                            {sections.map((section, index) => (
                                <section key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                                    <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
                                    <p className="text-dark-300 leading-relaxed">
                                        {section.content}
                                    </p>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
