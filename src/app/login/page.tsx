'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import Header from '@/components/layout/Header'

function LoginContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { signIn } = useAuth()

    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const redirectTo = searchParams.get('redirectTo') || '/dashboard'

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        try {
            const { error } = await signIn(formData.email, formData.password)

            if (error) {
                if (error.message.includes('Invalid login')) {
                    setError('Invalid email or password')
                } else if (error.message.includes('Email not confirmed')) {
                    setError('Please verify your email before logging in')
                } else {
                    setError(error.message)
                }
                return
            }

            // Redirect on success
            router.push(redirectTo)
            router.refresh()
        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-dark-950 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="glow-orb-primary w-[500px] h-[500px] -top-48 -right-48 opacity-20" />
            <div className="glow-orb-accent w-[400px] h-[400px] bottom-0 -left-32 opacity-20" />

            <Header />

            <main className="pt-32 pb-16 px-4">
                <div className="max-w-md mx-auto">
                    {/* Card */}
                    <div className="glass-card p-8">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-display font-bold text-white mb-2">
                                Welcome Back
                            </h1>
                            <p className="text-dark-400">
                                Log in to your PeeRly account
                            </p>
                        </div>

                        {/* Success message from signup */}
                        {searchParams.get('message') && (
                            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                                {searchParams.get('message')}
                            </div>
                        )}

                        {/* Error Message */}
                        {error && (
                            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                {error}
                            </div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                        placeholder="you@college.edu"
                                        required
                                        className="input-field pl-12"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-dark-300">
                                        Password
                                    </label>
                                    <Link href="/forgot-password" className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
                                        Forgot password?
                                    </Link>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-500" />
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                                        placeholder="Enter your password"
                                        required
                                        className="input-field pl-12 pr-12"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-500 hover:text-dark-300 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary w-full justify-center py-3.5"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Log In
                                        <ArrowRight className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-dark-900 px-4 text-sm text-dark-500">or</span>
                            </div>
                        </div>

                        {/* Sign Up Link */}
                        <p className="text-center text-dark-400">
                            Don&apos;t have an account?{' '}
                            <Link href="/signup" className="text-primary-400 hover:text-primary-300 font-medium transition-colors">
                                Sign up free
                            </Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-dark-950 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
            </div>
        }>
            <LoginContent />
        </Suspense>
    )
}
