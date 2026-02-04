'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Mail, Clock, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Contact <span className="gradient-text">Us</span>
                        </h1>
                        <p className="text-xl text-dark-300">
                            We'd love to hear from you! Whether it's a question, feedback, or just a hello.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8 animate-slide-left">
                            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-primary-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Email Support</h3>
                                    <p className="text-dark-400 mb-2">For general inquiries and support.</p>
                                    <a href="mailto:support@peerly.in" className="text-primary-400 font-medium hover:underline">support@peerly.in</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-accent-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Availability</h3>
                                    <p className="text-dark-400 leading-relaxed text-sm">
                                        Monday – Friday: 10 AM – 6 PM<br />
                                        Weekend: Limited support via email
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">Location</h3>
                                    <p className="text-dark-400 leading-relaxed text-sm">
                                        ABES Engineering College<br />
                                        Ghaziabad, Uttar Pradesh
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Placeholder */}
                        <div className="glass-card p-8 animate-slide-right">
                            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-dark-300">Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 transition-colors outline-none" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-dark-300">Email</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 transition-colors outline-none" placeholder="john@college.edu" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-dark-300">Subject</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 transition-colors outline-none" placeholder="How can we help?" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-dark-300">Message</label>
                                    <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 transition-colors outline-none h-32 resize-none" placeholder="Write your message here..."></textarea>
                                </div>
                                <button type="button" className="btn-primary w-full py-4 justify-center">
                                    Send Message
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
