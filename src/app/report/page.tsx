'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { AlertTriangle, Shield, Flag, Send } from 'lucide-react'

export default function ReportPage() {
    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16 animate-fade-in">
                        <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-10 h-10 text-red-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Report an <span className="text-red-500">Issue</span>
                        </h1>
                        <p className="text-xl text-dark-300 max-w-2xl mx-auto">
                            Help us keep the community safe. All reports are reviewed seriously and confidentially.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: 'Fake Listing', icon: Flag, desc: 'Items that are misleading, non-existent, or stolen.' },
                            { title: 'Scams & Fraud', icon: Shield, desc: 'Suspicious behavior, advance payment requests, or phishing.' },
                            { title: 'Abuse', icon: AlertTriangle, desc: 'Harassment, inappropriate content, or offensive behavior.' }
                        ].map((item, index) => (
                            <div key={index} className="glass-card p-6 text-center group hover:bg-red-500/5 transition-colors duration-300">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/10">
                                    <item.icon className="w-6 h-6 text-red-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-dark-400 leading-relaxed italic">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Report Form */}
                    <div className="glass-card p-8 md:p-12 animate-slide-up">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-dark-300">Issue Category</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 transition-colors outline-none appearance-none">
                                        <option value="fake">Fake Listing / Scam</option>
                                        <option value="abuse">Harassment / Abuse</option>
                                        <option value="stolen">Stolen Property</option>
                                        <option value="other">Other Issue</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-dark-300">Link to Listing / User (if any)</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 transition-colors outline-none" placeholder="peerly.in/listing/123" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-dark-300">Describe the Issue</label>
                                <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-red-500 transition-colors outline-none h-40 resize-none" placeholder="Please provide as much detail as possible..."></textarea>
                            </div>

                            <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 flex items-start gap-4">
                                <Shield className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-red-200/70 italic">
                                    Reporting helps our security team take action. If you are in immediate danger, please contact campus security or local police first.
                                </p>
                            </div>

                            <button type="button" className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all hover:gap-3">
                                Submit Report
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
