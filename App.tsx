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
