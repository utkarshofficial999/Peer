'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Menu, X, Search, Plus, User, Bell, MessageSquare, LogOut } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const router = useRouter()
    const { user, profile, isLoading, signOut } = useAuth()

    const handleSignOut = async () => {
        await signOut()
        router.push('/')
        router.refresh()
    }

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="mx-4 mt-4">
                <nav className="glass-card px-6 py-4 max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                                <span className="text-xl font-bold text-white">P</span>
                            </div>
                            <span className="text-xl font-display font-bold text-white">
                                Pee<span className="text-primary-400">Rly</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            <Link href="/browse" className="px-4 py-2 text-dark-300 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                                Browse
                            </Link>
                            <Link href="/browse?category=textbooks" className="px-4 py-2 text-dark-300 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                                Textbooks
                            </Link>
                            <Link href="/browse?category=electronics" className="px-4 py-2 text-dark-300 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                                Electronics
                            </Link>
                            <Link href="/how-it-works" className="px-4 py-2 text-dark-300 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                                How It Works
                            </Link>
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-3">
                            {/* Search */}
                            <button className="p-2.5 text-dark-300 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                                <Search className="w-5 h-5" />
                            </button>

                            {isLoading ? (
                                <div className="w-10 h-10 rounded-xl bg-dark-700 animate-pulse" />
                            ) : user ? (
                                <>
                                    {/* Notifications */}
                                    <button className="p-2.5 text-dark-300 hover:text-white rounded-xl hover:bg-white/5 transition-all relative">
                                        <Bell className="w-5 h-5" />
                                    </button>
                                    {/* Messages */}
                                    <Link href="/messages" className="p-2.5 text-dark-300 hover:text-white rounded-xl hover:bg-white/5 transition-all relative">
                                        <MessageSquare className="w-5 h-5" />
                                    </Link>
                                    {/* Sell Button */}
                                    <Link href="/create" className="btn-primary py-2.5 px-4">
                                        <Plus className="w-4 h-4" />
                                        Sell
                                    </Link>
                                    {/* Profile Dropdown */}
                                    <div className="relative group">
                                        <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-semibold hover:opacity-90 transition-opacity">
                                            {profile?.full_name ? getInitials(profile.full_name) : 'U'}
                                        </button>
                                        {/* Dropdown Menu */}
                                        <div className="absolute right-0 top-full mt-2 w-48 py-2 glass-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="px-4 py-2 border-b border-white/10">
                                                <p className="text-sm font-medium text-white truncate">{profile?.full_name}</p>
                                                <p className="text-xs text-dark-400 truncate">{user.email}</p>
                                            </div>
                                            <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-dark-300 hover:text-white hover:bg-white/5 transition-all">
                                                <User className="w-4 h-4" />
                                                Dashboard
                                            </Link>
                                            <button
                                                onClick={handleSignOut}
                                                className="w-full flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-white/5 transition-all"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" className="btn-secondary py-2.5 px-5">
                                        Log In
                                    </Link>
                                    <Link href="/signup" className="btn-primary py-2.5 px-5">
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 text-dark-300 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden pt-4 mt-4 border-t border-white/10 animate-slide-down">
                            <div className="flex flex-col gap-2">
                                <Link href="/browse" className="px-4 py-3 text-dark-200 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                                    Browse All
                                </Link>
                                <Link href="/browse?category=textbooks" className="px-4 py-3 text-dark-200 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                                    Textbooks
                                </Link>
                                <Link href="/browse?category=electronics" className="px-4 py-3 text-dark-200 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                                    Electronics
                                </Link>
                                <Link href="/how-it-works" className="px-4 py-3 text-dark-200 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                                    How It Works
                                </Link>
                                <hr className="border-white/10 my-2" />
                                {user ? (
                                    <>
                                        <Link href="/create" className="btn-primary justify-center">
                                            <Plus className="w-4 h-4" />
                                            Sell Something
                                        </Link>
                                        <Link href="/dashboard" className="btn-secondary justify-center">
                                            <User className="w-4 h-4" />
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={handleSignOut}
                                            className="btn-secondary justify-center text-red-400 border-red-400/20 hover:bg-red-500/10"
                                        >
                                            <LogOut className="w-4 h-4" />
                                            Sign Out
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login" className="btn-secondary justify-center">
                                            Log In
                                        </Link>
                                        <Link href="/signup" className="btn-primary justify-center">
                                            Sign Up Free
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}
