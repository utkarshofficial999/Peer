# PeeRly - Peer-to-Peer Student Marketplace 🎓

A trusted platform for college and school students to buy and sell items within their campus community.

![PeeRly](https://img.shields.io/badge/version-0.1.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green.svg)
![License](https://img.shields.io/badge/license-MIT-purple.svg)

## ✨ Features

- **🔐 Verified Students Only** - College email verification ensures trusted transactions
- **📍 Campus-Based** - Find items within your campus, meet between classes
- **💬 Real-time Messaging** - Chat directly with buyers/sellers
- **🏷️ Smart Categories** - Textbooks, Electronics, Cycles, Furniture & more
- **⭐ Ratings & Reviews** - Build trust through community feedback
- **🎨 Modern UI** - Glassmorphic design with smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (free tier works)

### Installation

1. **Clone the repository**
   ```bash
   cd d:\Peertopeer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to SQL Editor and run the schema from `supabase/schema.sql`
   - Enable Authentication → Email auth in Supabase dashboard
   - Create Storage buckets: `listings` and `avatars` (set to public)

4. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── browse/            # Browse listings page
│   ├── create/            # Create listing form
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   ├── cards/             # Card components
│   ├── layout/            # Header, Footer
│   └── ui/                # UI components
├── lib/
│   ├── supabase/          # Supabase clients
│   └── utils.ts           # Utility functions
└── types/
    └── database.ts        # TypeScript types
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Supabase** | Backend (PostgreSQL + Auth + Storage) |
| **Lucide React** | Icons |

## 🎨 Design System

- **Primary Color**: Sky Blue (#0ea5e9)
- **Accent Color**: Fuchsia (#d946ef)
- **Background**: Dark Theme (#020617)
- **Font**: Inter (body), Outfit (display)

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Hero, features, testimonials |
| Browse | `/browse` | Search & filter listings |
| Create Listing | `/create` | Multi-step listing form |
| Login | `/login` | User authentication |
| Signup | `/signup` | New user registration |

## 🔮 Roadmap

### MVP (Current)
- [x] Landing page
- [x] Browse listings with filters
- [x] Create listing flow
- [x] Authentication UI
- [ ] Supabase integration
- [ ] Real-time messaging

### Phase 2
- [ ] User dashboard
- [ ] Ratings & reviews
- [ ] Image optimization
- [ ] Email notifications

### Phase 3
- [ ] Multi-college support
- [ ] Super admin panel
- [ ] Cashfree payment integration
- [ ] Mobile app (React Native)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Built By

PeeRly Team - Building the future of campus commerce!

---

<p align="center">
  Made with ❤️ for students, by students
</p>
