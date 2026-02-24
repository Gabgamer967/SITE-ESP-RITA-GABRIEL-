{
  "name": "espiritismo-chico-xavier",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.562.0",
    "next-themes": "^0.4.6",
    "react": "^19.2.0",
    "react-day-picker": "^9.13.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.70.0",
    "react-resizable-panels": "^4.2.2",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.4.0",
    "vaul": "^1.1.2",
    "zod": "^4.3.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/node": "^24.10.1",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.23",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.19",
    "tailwindcss-animate": "^1.0.7",
    "tw-animate-css": "^1.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.4",
    "vite": "^7.2.4"
  }
}
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "types": ["node"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Play, BookOpen, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import './App.css';

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#chico', label: 'Chico Xavier' },
    { href: '#estudos', label: 'Estudos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <Star className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-xl font-semibold text-amber-100" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Espiritismo</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                {link.label}
              </a>
            ))}
          </div>

          <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-amber-500/20">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block text-slate-300 hover:text-amber-400 py-2" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-8">
          <Star className="w-4 h-4 text-amber-400" />
          <span className="text-amber-300 text-sm">Doutrina Espírita</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient leading-tight">
          Espiritismo &<br />Chico Xavier
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          "A caridade começa em casa, mas não deve terminar ali."
        </p>
        <p className="text-amber-400/80 text-lg mb-12">— Chico Xavier</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#chico">
            <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold px-8">
              <Heart className="w-5 h-5 mr-2" />
              Conhecer Chico Xavier
            </Button>
          </a>
          <a href="#estudos">
            <Button size="lg" variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10 px-8">
              <BookOpen className="w-5 h-5 mr-2" />
              Estudos Espíritas
            </Button>
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-500/50 mx-auto" />
        </div>
      </div>
    </section>
  );
}

// Chico Xavier Section
function ChicoSection() {
  const [selectedVideo, setSelectedVideo] = useState<typeof chicoVideos[0] | null>(null);

  const timeline = [
    {
      year: "1910",
      title: "Nascimento",
      description: "Francisco Cândido Xavier nasce em 2 de abril de 1910, em Pedro Leopoldo, Minas Gerais."
    },
    {
      year: "1927",
      title: "Primeira Psicografia",
      description: "Chico psicografa sua primeira mensagem espiritual aos 17 anos, iniciando sua jornada mediúnica."
    },
    {
      year: "1931",
      title: "Parnaso de Além-Túmulo",
      description: "Publicação do primeiro livro de poemas psicografados, que trouxe imortalidade literária ao médium."
    },
    {
      year: "1944",
      title: "Nosso Lar",
      description: "Psicografia do livro 'Nosso Lar', uma das obras mais importantes da literatura espírita mundial."
    },
    {
      year: "1969",
      title: "Data Limite",
      description: "Chico divulga a profecia sobre a 'Data Limite', relacionada à chegada do homem à Lua."
    },
    {
      year: "2002",
      title: "Desencarne",
      description: "Chico Xavier desencarna em 30 de junho de 2002, aos 92 anos, deixando um legado de amor e caridade."
    }
  ];

  const quotes = [
    "A caridade começa em casa, mas não deve terminar ali.",
    "Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.",
    "O amor é a mais nobre, a mais sublime, a mais divina das virtudes.",
    "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida.",
    "A felicidade não está em viver pouco ou muito, mas em viver bem.",
    "O bem que praticamos hoje é a semente do bem que colheremos amanhã."
  ];

  const works = [
    { title: "Nosso Lar", spirit: "André Luiz", year: "1944" },
    { title: "Os Mensageiros", spirit: "André Luiz", year: "1944" },
    { title: "Missionários da Luz", spirit: "André Luiz", year: "1945" },
    { title: "Lázaro Redivivo", spirit: "Irmão X", year: "1945" },
    { title: "Parnaso de Além-Túmulo", spirit: "Diversos", year: "1932" },
    { title: "Caminho, Verdade e Vida", spirit: "Emmanuel", year: "1945" },
    { title: "Ave, Cristo!", spirit: "Emmanuel", year: "1945" },
    { title: "Entre a Terra e o Céu", spirit: "André Luiz", year: "1944" },
    { title: "Nos Domínios da Mediunidade", spirit: "André Luiz", year: "1945" },
    { title: "Action e Reação", spirit: "André Luiz", year: "1945" }
  ];

  const chicoVideos = [
    {
      title: "Documentário Chico Xavier - O Maior Médium do Brasil",
      description: "Uma jornada completa pela vida e obra do maior médium brasileiro de todos os tempos.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&h=360&fit=crop"
    },
    {
      title: "Mensagens de Chico Xavier para a Humanidade",
      description: "Compilação das mensagens mais inspiradoras deixadas pelo médium mineiro.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=640&h=360&fit=crop"
    },
    {
      title: "Chico Xavier - A História Real",
      description: "Depoimentos e relatos sobre a vida do médium que mudou a história do espiritismo no Brasil.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=640&h=360&fit=crop"
    },
    {
      title: "As Últimas Palavras de Chico Xavier",
      description: "Os momentos finais e o legado espiritual deixado por Chico Xavier.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=640&h=360&fit=crop"
    }
  ];

  return (
    <section id="chico" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
            <Heart className="w-4 h-4 mr-1" />
            O Maior Médium Brasileiro
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Chico Xavier</h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            Francisco Cândido Xavier (1910-2002) foi um dos maiores médiuns e filantropos da história do Brasil. 
            Autor de mais de 400 livros psicografados, dedicou sua vida à caridade e à divulgação da doutrina espírita.
          </p>
        </div>

        {/* Biography */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-amber-400" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Biografia</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Chico Xavier nasceu em uma humilde família de origem portuguesa em Pedro Leopoldo, Minas Gerais. 
                Ainda criança, perdeu a mãe, Maria João de Deus, o que marcou profundamente sua vida e sensibilidade.
              </p>
              <p>
                Aos 17 anos, descobriu sua faculdade mediúnica quando começou a psicografar mensagens. 
                Desde então, dedicou sua vida inteira à mediunidade e à caridade, nunca tendo se casado ou formado família própria.
              </p>
              <p>
                Ao longo de mais de 70 anos de atividade mediúnica, Chico psicografou mais de 400 livros, 
                vendeu mais de 50 milhões de cópias e doou todos os direitos autorais para obras de caridade. 
                Foi considerado o "Maior Brasileiro de Todos os Tempos" em votação popular realizada pela Rede Globo em 2012.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-amber-400 mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Linha do Tempo</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    {index < timeline.length - 1 && <div className="w-0.5 flex-1 bg-amber-500/30 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <span className="text-amber-400 font-semibold">{item.year}</span>
                    <h4 className="text-slate-200 font-medium mt-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quotes */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-amber-400 text-center mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Mensagens de Chico Xavier
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-amber-500/30 transition-colors">
                <p className="text-slate-300 italic" style={{ fontFamily: 'Cormorant Garamond, serif' }}>"{quote}"</p>
                <p className="text-amber-400/80 text-sm mt-4">— Chico Xavier</p>
              </div>
            ))}
          </div>
        </div>

        {/* Works */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-amber-400 text-center mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Principais Obras Psicografadas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {works.map((work, index) => (
              <div key={index} className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 hover:bg-slate-900/50 hover:border-amber-500/30 transition-all">
                <h4 className="text-slate-200 font-medium text-sm">{work.title}</h4>
                <p className="text-slate-500 text-xs mt-1">{work.spirit}</p>
                <p className="text-amber-400/60 text-xs mt-1">{work.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section - Only Chico Xavier */}
        <div>
          <h3 className="text-2xl font-semibold text-amber-400 text-center mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Vídeos sobre Chico Xavier
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {chicoVideos.map((video, index) => (
              <div 
                key={index} 
                className="group bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-amber-500/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-slate-950 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-slate-100 mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    {video.title}
                  </h4>
                  <p className="text-slate-400">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
            <DialogContent className="max-w-4xl bg-slate-950 border-slate-800 p-0 overflow-hidden">
              <div className="aspect-video">
                {selectedVideo && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={selectedVideo.embedUrl}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-slate-100 mb-2">{selectedVideo?.title}</h4>
                <p className="text-slate-400">{selectedVideo?.description}</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

// Studies Section
function StudiesSection() {
  const topics = [
    {
      title: "O Que é o Espiritismo?",
      content: `O Espiritismo é uma doutrina filosófica, científica e religiosa codificada por Allan Kardec no século XIX. 
      Baseia-se em três pilares fundamentais: a existência de Deus, a imortalidade da alma e a comunicação dos espíritos com os vivos.
      
      A doutrina ensina que os seres humanos são espíritos imortais que reencarnam para evoluir espiritualmente, 
      aprendendo através das experiências vividas em cada existência física.`
    },
    {
      title: "As Obras Básicas de Allan Kardec",
      content: `Allan Kardec codificou o Espiritismo através de cinco obras fundamentais:
      
      1. O Livro dos Espíritos (1857) - Respostas sobre a natureza dos espíritos, Deus e a vida após a morte
      2. O Livro dos Médiuns (1861) - Estudo sobre a mediunidade e suas manifestações
      3. O Evangelho Segundo o Espiritismo (1864) - Interpretação dos ensinamentos de Jesus à luz do Espiritismo
      4. O Céu e o Inferno (1865) - Sobre a justiça divina e a vida após a morte
      5. A Gênese (1868) - Concordância entre ciência e religião`
    },
    {
      title: "A Lei de Causa e Efeito",
      content: `A Lei de Causa e Efeito, ou Lei de Ação e Reação, é um dos princípios fundamentais do Espiritismo. 
      Ela estabelece que cada indivíduo é responsável por suas ações e colherá os frutos do que plantar.
      
      Não existe castigo divino, mas sim consequências naturais de nossas escolhas. 
      A reencarnação permite que o espírito tenha novas oportunidades de evolução e de reparar erros cometidos.`
    },
    {
      title: "A Mediunidade",
      content: `A mediunidade é a faculdade de comunicação entre o mundo físico e o mundo espiritual. 
      Segundo o Espiritismo, todos os seres humanos são médiuns em maior ou menor grau.
      
      Existem diferentes tipos de mediunidade:
      - Física: produção de fenômenos visíveis e palpáveis
      - Inteligente: transmissão de pensamentos dos espíritos
      - De cura: transmissão de energias curativas
      - De efeitos físicos: movimentação de objetos`
    },
    {
      title: "A Reencarnação",
      content: `A reencarnação é o processo pelo qual o espírito retorna à vida física em um novo corpo 
      para continuar sua evolução moral e intelectual.
      
      Segundo a doutrina espírita, reencarnamos para:
      - Expiação de faltas cometidas
      - Provações e missões de auxílio ao próximo
      - Aperfeiçoamento intelectual e moral
      - Cumprir compromissos assumidos antes de renascer`
    },
    {
      title: "O Plano Espiritual",
      content: `O mundo espiritual é organizado em diferentes colônias e dimensões, de acordo com o grau de evolução dos espíritos:
      
      - Umbral: região de sofrimento para espíritos atrasados
      - Colônias de trabalho: onde espíritos se preparam para nova reencarnação
      - Colônias de amor: para espíritos mais evoluídos
      - Mundos superiores: dimensões de luz e harmonia
      
      A colônia 'Nosso Lar', descrita por André Luiz através de Chico Xavier, é um exemplo de colônia espiritual avançada.`
    }
  ];

  return (
    <section id="estudos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-500/20 text-amber-400 border-amber-500/30">
            <BookOpen className="w-4 h-4 mr-1" />
            Estudos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Estudos Espíritas</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Conheça os fundamentos da doutrina espírita, seus princípios filosóficos 
            e as leis que regem a vida espiritual.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {topics.map((topic, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-slate-900/50 border border-slate-800 rounded-xl px-6 data-[state=open]:border-amber-500/30">
              <AccordionTrigger className="text-left text-lg font-semibold text-slate-200 hover:text-amber-400 py-4">
                {topic.title}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-4 whitespace-pre-line leading-relaxed">
                {topic.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-4">Quer aprofundar seus estudos?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.febnet.org.br" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10">
                <BookOpen className="w-4 h-4 mr-2" />
                Federação Espírita Brasileira
              </Button>
            </a>
            <a href="https://www.chicoxavier.org.br" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10">
                <Heart className="w-4 h-4 mr-2" />
                Instituto Chico Xavier
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Star className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-xl font-semibold text-amber-100" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Espiritismo</span>
            </div>
            <p className="text-slate-400 max-w-md">
              Um projeto dedicado à divulgação da doutrina espírita, 
              das obras de Chico Xavier e do estudo da vida espiritual.
            </p>
          </div>
          
          <div>
            <h4 className="text-slate-200 font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-slate-400 hover:text-amber-400 transition-colors">Início</a></li>
              <li><a href="#chico" className="text-slate-400 hover:text-amber-400 transition-colors">Chico Xavier</a></li>
              <li><a href="#estudos" className="text-slate-400 hover:text-amber-400 transition-colors">Estudos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-slate-200 font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.febnet.org.br" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                  FEB - Federação Espírita
                </a>
              </li>
              <li>
                <a href="https://www.chicoxavier.org.br" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Instituto Chico Xavier
                </a>
              </li>
              <li>
                <a href="https://www.cei.org.br" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Centro Espírita Ismael
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-slate-800 mb-8" />
        
        <div className="text-center text-slate-500 text-sm">
          <p>© 2024 Espiritismo e Chico Xavier. Site educativo e gratuito.</p>
          <p className="mt-2">
            "A caridade começa em casa, mas não deve terminar ali." — Chico Xavier
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />
      <main>
        <HeroSection />
        <ChicoSection />
        <StudiesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
/* App-specific styles */

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Selection color */
::selection {
  background-color: rgba(251, 191, 36, 0.3);
  color: inherit;
}

/* Focus styles */
*:focus-visible {
  outline: 2px solid rgba(251, 191, 36, 0.5);
  outline-offset: 2px;
}

/* Line clamp utilities */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');

@layer base {
  :root {
    --background: 220 25% 8%;
    --foreground: 45 30% 95%;
    --card: 220 20% 12%;
    --card-foreground: 45 30% 95%;
    --popover: 220 20% 12%;
    --popover-foreground: 45 30% 95%;
    --primary: 45 60% 55%;
    --primary-foreground: 220 25% 8%;
    --secondary: 220 15% 18%;
    --secondary-foreground: 45 30% 95%;
    --muted: 220 15% 18%;
    --muted-foreground: 220 10% 60%;
    --accent: 45 60% 55%;
    --accent-foreground: 220 25% 8%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 15% 20%;
    --input: 220 15% 20%;
    --ring: 45 60% 55%;
    --radius: 0.625rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Inter', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cormorant Garamond', serif;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500;
  }
  
  .glow-gold {
    box-shadow: 0 0 30px rgba(251, 191, 36, 0.3), 0 0 60px rgba(251, 191, 36, 0.1);
  }
  
  .glow-soft {
    box-shadow: 0 0 40px rgba(251, 191, 36, 0.15);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: hsl(220 25% 8%);
}

::-webkit-scrollbar-thumb {
  background: hsl(45 60% 35%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: hsl(45 60% 45%);
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.1), transparent);
  background-size: 200% 100%;
  animation: shimmer 3s infinite;
}
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 outline-none sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
npm install
npm run build
