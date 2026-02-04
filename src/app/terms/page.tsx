'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function TermsPage() {
    const sections = [
        {
            title: '1. Acceptance of Terms',
            content: 'By accessing or using PeeRly, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.'
        },
        {
            title: '2. User Eligibility',
            content: 'You must be a student currently enrolled in a participating college or educational institution. You are required to use your official college email for verification.'
        },
        {
            title: '3. Listings & Transactions',
            content: 'Users are responsible for the accuracy of their listings. We are a platform that facilitates connections and do not handle payments, shipping, or physical transactions. Users should meet in safe campus areas to complete trades.'
        },
        {
            title: '4. Prohibited Content',
            content: 'You may not list illegal items, dangerous materials, or any content that violates college policies or local laws. We reserve the right to remove any listing at our discretion.'
        },
        {
            title: '5. Limitation of Liability',
            content: 'PeeRly is not responsible for any disputes, damages, or losses resulting from interaction between users. We encourage students to inspect items thoroughly before payment.'
        }
    ]

    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="glass-card p-10 md:p-16">
                        <h1 className="text-4xl font-display font-bold text-white mb-2">Terms of Service</h1>
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

                        <div className="mt-16 p-6 rounded-2xl bg-primary-500/5 border border-primary-500/10">
                            <p className="text-sm text-dark-300">
                                If you have any questions about these Terms, please contact us at <a href="mailto:legal@peerly.in" className="text-primary-400 hover:underline">legal@peerly.in</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
