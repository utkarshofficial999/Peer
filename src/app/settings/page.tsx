'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { User, Bell, Shield, LogOut, Camera, Save } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function SettingsPage() {
    const { profile, user, signOut } = useAuth()
    const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'privacy'>('profile')

    const tabs = [
        { id: 'profile', label: 'Profile Settings', icon: User },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    ]

    return (
        <div className="min-h-screen bg-dark-950">
            <Header />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-display font-bold text-white mb-8">Account Settings</h1>

                    <div className="grid md:grid-cols-4 gap-8">
                        {/* Sidebar Tabs */}
                        <div className="md:col-span-1 space-y-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === tab.id
                                            ? 'bg-primary-500 text-white font-bold shadow-lg shadow-primary-500/20'
                                            : 'text-dark-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <tab.icon className="w-5 h-5" />
                                    {tab.label}
                                </button>
                            ))}
                            <hr className="border-white/5 my-4" />
                            <button
                                onClick={() => signOut()}
                                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-medium"
                            >
                                <LogOut className="w-5 h-5" />
                                Sign Out
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="md:col-span-3">
                            <div className="glass-card p-8 animate-fade-in">
                                {activeTab === 'profile' && (
                                    <div className="space-y-8">
                                        <div>
                                            <h2 className="text-xl font-bold text-white mb-6">Profile Information</h2>

                                            {/* Avatar Section */}
                                            <div className="flex items-center gap-6 mb-8">
                                                <div className="relative group">
                                                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-black/40">
                                                        {profile?.full_name?.[0].toUpperCase() || 'U'}
                                                    </div>
                                                    <button className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-white hover:bg-dark-700 transition-colors shadow-lg">
                                                        <Camera className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold mb-1">Your Avatar</h3>
                                                    <p className="text-sm text-dark-400 italic">PNG or JPG. Max 2MB.</p>
                                                </div>
                                            </div>

                                            {/* Form */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-dark-300">Full Name</label>
                                                    <input
                                                        type="text"
                                                        defaultValue={profile?.full_name || ''}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 transition-colors outline-none"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-dark-300">College Email</label>
                                                    <input
                                                        type="email"
                                                        defaultValue={user?.email || ''}
                                                        disabled
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-dark-500 cursor-not-allowed outline-none"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium text-dark-300">Phone Number (Optional)</label>
                                                    <input
                                                        type="tel"
                                                        placeholder="+91 00000 00000"
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary-500 transition-colors outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t border-white/5">
                                            <button className="btn-primary flex items-center gap-2 px-8 py-3">
                                                <Save className="w-4 h-4" />
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'notifications' && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-bold text-white mb-4">Notification Preferences</h2>
                                        {[
                                            { title: 'New Messages', desc: 'Get notified when someone chats with you.' },
                                            { title: 'Price Alerts', desc: 'Get notified when an item in your saved list drops in price.' },
                                            { title: 'New Listings', desc: 'Get weekly updates about new items in your college.' },
                                            { title: 'Account Security', desc: 'Important alerts about your login sessions.' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                                <div>
                                                    <h3 className="text-white font-bold">{item.title}</h3>
                                                    <p className="text-sm text-dark-400">{item.desc}</p>
                                                </div>
                                                <div className="w-12 h-6 rounded-full bg-primary-500/20 relative cursor-pointer">
                                                    <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-primary-500 shadow-sm shadow-black/40" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'privacy' && (
                                    <div className="space-y-6">
                                        <h2 className="text-xl font-bold text-white mb-4">Privacy & Security</h2>
                                        <div className="space-y-4">
                                            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                                <h3 className="text-white font-bold mb-2">Change Password</h3>
                                                <p className="text-sm text-dark-400 mb-6">Want to update your password? We will send you a reset link.</p>
                                                <button className="btn-secondary text-sm px-6 py-2">Send Reset Link</button>
                                            </div>
                                            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                                                <h3 className="text-red-400 font-bold mb-2">Delete Account</h3>
                                                <p className="text-sm text-dark-400 mb-6">Deleting your account is permanent. All your listings and data will be removed.</p>
                                                <button className="text-red-400 font-bold hover:underline">Deactivate Account</button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
