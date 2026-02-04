import Link from 'next/link'
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin
} from 'lucide-react'

const footerLinks = {
    product: [
        { name: 'Browse Listings', href: '/browse' },
        { name: 'Sell an Item', href: '/create' },
        { name: 'Categories', href: '/categories' },
        { name: 'How It Works', href: '/how-it-works' },
    ],
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'For Colleges', href: '/colleges' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
    ],
    support: [
        { name: 'Help Center', href: '/help' },
        { name: 'Safety Tips', href: '/safety' },
        { name: 'Report Issue', href: '/report' },
        { name: 'Contact Us', href: '/contact' },
    ],
    legal: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
    ],
}

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
]

export default function Footer() {
    return (
        <footer className="bg-dark-900/50 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                                <span className="text-xl font-bold text-white">P</span>
                            </div>
                            <span className="text-xl font-display font-bold text-white">
                                Pee<span className="text-primary-400">Rly</span>
                            </span>
                        </Link>
                        <p className="text-dark-400 text-sm mb-6 max-w-xs">
                            The trusted peer-to-peer marketplace for college and school students.
                            Buy, sell, and trade within your campus community.
                        </p>
                        {/* Contact Info */}
                        <div className="space-y-2 text-sm text-dark-400">
                            <a href="mailto:hello@peerly.in" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                                <Mail className="w-4 h-4" />
                                hello@peerly.in
                            </a>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                ABES Engineering College, Ghaziabad
                            </div>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-dark-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-dark-500">
                            © {new Date().getFullYear()} PeeRly. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-dark-400 hover:text-white hover:bg-white/10 transition-all"
                                    aria-label={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
