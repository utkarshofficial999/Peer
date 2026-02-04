'use client'

import { X } from 'lucide-react'
import { CONDITIONS } from '@/lib/utils'

interface FilterSidebarProps {
    isOpen: boolean
    onClose: () => void
    filters: {
        category: string
        condition: string
        priceMin: string
        priceMax: string
        college: string
    }
    onFilterChange: (key: string, value: string) => void
    onClear: () => void
    categories: { id: number; name: string; slug: string }[]
    colleges: { id: string; name: string; slug: string }[]
}

export default function FilterSidebar({
    isOpen,
    onClose,
    filters,
    onFilterChange,
    onClear,
    categories,
    colleges,
}: FilterSidebarProps) {
    const hasActiveFilters = Object.values(filters).some(v => v !== '')

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:sticky top-0 right-0 lg:right-auto h-screen lg:h-auto w-80 lg:w-64 
          bg-dark-900 lg:bg-transparent border-l lg:border-0 border-white/10 
          p-6 z-50 lg:z-auto transform transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-white">Filters</h2>
                    <div className="flex items-center gap-2">
                        {hasActiveFilters && (
                            <button
                                onClick={onClear}
                                className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                            >
                                Clear all
                            </button>
                        )}
                        <button
                            onClick={onClose}
                            className="lg:hidden p-1 text-dark-400 hover:text-white rounded-lg hover:bg-white/10"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Category Filter */}
                    <div>
                        <label className="block text-sm font-medium text-dark-300 mb-3">Category</label>
                        <select
                            value={filters.category}
                            onChange={(e) => onFilterChange('category', e.target.value)}
                            className="input-field"
                        >
                            <option value="">All Categories</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.slug}>{cat.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Condition Filter */}
                    <div>
                        <label className="block text-sm font-medium text-dark-300 mb-3">Condition</label>
                        <div className="space-y-2">
                            {Object.entries(CONDITIONS).map(([key, { label }]) => (
                                <label key={key} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="radio"
                                        name="condition"
                                        value={key}
                                        checked={filters.condition === key}
                                        onChange={(e) => onFilterChange('condition', e.target.value)}
                                        className="w-4 h-4 text-primary-500 bg-dark-800 border-dark-600 focus:ring-primary-500 focus:ring-2"
                                    />
                                    <span className="text-sm text-dark-300 group-hover:text-white transition-colors">
                                        {label}
                                    </span>
                                </label>
                            ))}
                            {filters.condition && (
                                <button
                                    onClick={() => onFilterChange('condition', '')}
                                    className="text-xs text-dark-500 hover:text-primary-400 transition-colors"
                                >
                                    Clear condition
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div>
                        <label className="block text-sm font-medium text-dark-300 mb-3">Price Range</label>
                        <div className="flex items-center gap-2">
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-500">₹</span>
                                <input
                                    type="number"
                                    placeholder="Min"
                                    value={filters.priceMin}
                                    onChange={(e) => onFilterChange('priceMin', e.target.value)}
                                    className="input-field pl-7 py-2"
                                    min="0"
                                />
                            </div>
                            <span className="text-dark-500">-</span>
                            <div className="relative flex-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-500">₹</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    value={filters.priceMax}
                                    onChange={(e) => onFilterChange('priceMax', e.target.value)}
                                    className="input-field pl-7 py-2"
                                    min="0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* College Filter */}
                    {colleges.length > 1 && (
                        <div>
                            <label className="block text-sm font-medium text-dark-300 mb-3">College</label>
                            <select
                                value={filters.college}
                                onChange={(e) => onFilterChange('college', e.target.value)}
                                className="input-field"
                            >
                                <option value="">All Colleges</option>
                                {colleges.map((college) => (
                                    <option key={college.id} value={college.slug}>{college.name}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                {/* Apply Button (Mobile) */}
                <div className="lg:hidden mt-8">
                    <button onClick={onClose} className="btn-primary w-full justify-center">
                        Apply Filters
                    </button>
                </div>
            </aside>
        </>
    )
}
