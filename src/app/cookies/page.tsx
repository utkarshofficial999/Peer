'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="glass-card p-10 md:p-16">
                        <h1 className="text-4xl font-display font-bold text-white mb-2">Cookie Policy</h1>
                        <p className="text-dark-400 mb-10 pb-10 border-b border-white/5">Last Updated: February 4, 2026</p>

                        <div className="prose prose-invert max-w-none space-y-8">
                            <section>
                                <h2 className="text-xl font-bold text-white mb-4">What Are Cookies?</h2>
                                <p className="text-dark-300 leading-relaxed">
                                    Cookies are small text files stored on your device that help our website function better. They allow us to remember your preferences and keep you logged in.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4">How We Use Cookies</h2>
                                <ul className="list-disc pl-5 space-y-4 text-dark-300">
                                    <li><strong>Authentication:</strong> Keeping you signed in as you move through different pages.</li>
                                    <li><strong>Preferences:</strong> Remembering settings like your dark mode preference or search filters.</li>
                                    <li><strong>Performance:</strong> Helping us understand how students use our platform so we can improve it.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-white mb-4">Managing Cookies</h2>
                                <p className="text-dark-300 leading-relaxed">
                                    Most browsers allow you to block or delete cookies through their settings. However, disabling all cookies may prevent parts of PeeRly from working correctly, especially your login session.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
