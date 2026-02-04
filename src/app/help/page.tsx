'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Search, ChevronDown, Book, HelpCircle, AlertCircle, UserCircle } from 'lucide-react'
import { useState } from 'react'

export default function HelpPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            category: 'Getting Started',
            icon: Book,
            items: [
                { q: 'How do I create an account?', a: 'You can sign up using your official college email address. We will send you a verification link to ensure you are a valid student.' },
                { q: 'Why do I need a college email?', a: 'To maintain a safe and trusted community, we restrict access to verified students only. This prevents external vendors and scammers from entering our marketplace.' }
            ]
        },
        {
            category: 'Buying & Selling',
            icon: HelpCircle,
            items: [
                { q: 'How do I post a listing?', a: 'Once logged in, click the "Sell" button in the header. Fill in the details about your item, set a price, upload photos, and publish.' },
                { q: 'Is there a fee for selling?', a: 'No, PeeRly is currently free for students to list and sell items. We do not take a commission on your trades.' }
            ]
        },
        {
            category: 'Safety',
            icon: AlertCircle,
            items: [
                { q: 'Where should I meet the buyer/seller?', a: 'We highly recommend meeting in public, well-lit areas on campus during daylight hours—like the college library, canteen, or main gates.' },
                { q: 'What if I encounter a scammer?', a: 'Report the user immediately using the "Report" button on their profile or listing. We review all reports seriously.' }
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            How can we <span className="gradient-text">help?</span>
                        </h1>
                        <div className="relative max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400 w-5 h-5" />
                            <input
                                type="text"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 py-4 text-white focus:border-primary-500 transition-colors outline-none text-lg"
                                placeholder="Search for answers..."
                            />
                        </div>
                    </div>

                    {/* FAQ Sections */}
                    <div className="space-y-12">
                        {faqs.map((section, sIndex) => (
                            <div key={sIndex} className="animate-slide-up" style={{ animationDelay: `${sIndex * 100}ms` }}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                                        <section.icon className="w-5 h-5 text-primary-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white">{section.category}</h2>
                                </div>

                                <div className="space-y-4">
                                    {section.items.map((item, iIndex) => {
                                        const currentIndex = sIndex * 10 + iIndex
                                        const isOpen = openIndex === currentIndex
                                        return (
                                            <div key={iIndex} className={`glass-card overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary-500/30 bg-white/5' : ''}`}>
                                                <button
                                                    onClick={() => setOpenIndex(isOpen ? null : currentIndex)}
                                                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                                                >
                                                    <span className={`font-semibold transition-colors ${isOpen ? 'text-primary-400' : 'text-white group-hover:text-primary-400'}`}>
                                                        {item.q}
                                                    </span>
                                                    <ChevronDown className={`w-5 h-5 text-dark-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-400' : ''}`} />
                                                </button>
                                                {isOpen && (
                                                    <div className="px-6 pb-6 text-dark-300 leading-relaxed border-t border-white/5 pt-4 animate-slide-down">
                                                        {item.a}
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Still Need Help? */}
                    <div className="mt-20 p-10 glass-card bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-500/20 text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">Still stuck?</h3>
                        <p className="text-dark-300 mb-8">Cant find what you're looking for? Our team is ready to help.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="btn-primary py-3 px-8">Contact Support</a>
                            <a href="/safety" className="btn-secondary py-3 px-8">Safety Center</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
