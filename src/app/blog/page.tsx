'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
    const posts = [
        {
            title: '5 Smart Ways to Save Money in College',
            description: 'From second-hand books to hostel cooking, learn how to keep your wallet full while enjoying campus life.',
            category: 'Smart Living',
            date: 'Feb 4, 2026',
            author: 'Ananya S.',
            image: '/blog/save-money.jpg'
        },
        {
            title: 'How to Sell Faster on PeeRly: Pro Tips',
            description: 'Better photos, clear descriptions, and fair pricing—the ultimate guide to clearing your hostel room.',
            category: 'Selling Tips',
            date: 'Feb 1, 2026',
            author: 'Rahul K.',
            image: '/blog/sell-tips.jpg'
        },
        {
            title: 'Safety Tips for Campus Exchanges',
            description: 'Your safety is our priority. Here are the best spots on campus for meetups and what to check before you buy.',
            category: 'Safety',
            date: 'Jan 28, 2026',
            author: 'PeeRly Team',
            image: '/blog/safety-spots.jpg'
        }
    ]

    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            The <span className="gradient-text">PeeRly</span> Blog
                        </h1>
                        <p className="text-xl text-dark-300 max-w-2xl mx-auto">
                            Campus Life. Smart Buying. Student Hustles.
                        </p>
                    </div>

                    {/* Blog Feed */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <div
                                key={index}
                                className="glass-card overflow-hidden group hover:bg-white/5 transition-all duration-300 animate-slide-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Thumbnail Placeholder */}
                                <div className="aspect-[16/9] bg-dark-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 mix-blend-overlay group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary-500/80 text-white text-xs font-bold backdrop-blur-md">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-dark-400 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {post.author}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors leading-tight">
                                        {post.title}
                                    </h2>
                                    <p className="text-dark-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                                        {post.description}
                                    </p>
                                    <Link href="#" className="inline-flex items-center gap-2 text-primary-400 font-bold text-sm group-hover:gap-3 transition-all underline underline-offset-4 decoration-primary-500/30">
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Simple */}
                    <div className="mt-20 glass-card p-10 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-display font-bold text-white mb-2">Want to write for us?</h3>
                            <p className="text-dark-400 mb-6">We love hearing stories from students about their campus hustle.</p>
                            <a href="mailto:blog@peerly.in" className="btn-secondary">Get in touch</a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
