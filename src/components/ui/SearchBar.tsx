'use client'

import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useState } from 'react'

interface SearchBarProps {
    value: string
    onChange: (value: string) => void
    placeholder?: string
    onFilterClick?: () => void
    showFilters?: boolean
}

export default function SearchBar({
    value,
    onChange,
    placeholder = 'Search for textbooks, electronics, cycles...',
    onFilterClick,
    showFilters = true,
}: SearchBarProps) {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${isFocused
                    ? 'bg-white/10 border-primary-500/50 ring-2 ring-primary-500/20'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                } border`}
        >
            <Search className={`w-5 h-5 transition-colors ${isFocused ? 'text-primary-400' : 'text-dark-400'}`} />

            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="flex-1 bg-transparent text-white placeholder-dark-400 outline-none"
            />

            {value && (
                <button
                    onClick={() => onChange('')}
                    className="p-1 text-dark-400 hover:text-white rounded-full hover:bg-white/10 transition-all"
                >
                    <X className="w-4 h-4" />
                </button>
            )}

            {showFilters && onFilterClick && (
                <button
                    onClick={onFilterClick}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm text-dark-300 hover:text-white rounded-lg hover:bg-white/10 transition-all border border-white/10"
                >
                    <SlidersHorizontal className="w-4 h-4" />
                    <span className="hidden sm:inline">Filters</span>
                </button>
            )}
        </div>
    )
}
