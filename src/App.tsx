import {
    ArrowRight,
    Calendar,
    Church,
    Clock,
    Facebook,
    Heart,
    Instagram,
    Mail,
    MapPin,
    Menu,
    MessageCircle,
    Phone,
    QrCode,
    X,
    Youtube
} from 'lucide-react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AvisosSemanais from './pages/AvisosSemanais';
import Catequese from './pages/Catequese';
import FestaPadroeiro from './pages/FestaPadroeiro';
import WebRadio from './pages/WebRadio';

const Eventos = lazy(() => import('./components/Sections/Eventos'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Helmet>
              <title>Paróquia São Miguel Arcanjo</title>
              <meta name="description" content="Site oficial da Paróquia São Miguel Arcanjo" />
              <meta name="keywords" content="igreja, católica, são miguel arcanjo, paróquia" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <html lang="pt-BR" />
            </Helmet>

            {/* Header */}
            <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                  <div className="flex items-center">
                    <Church className={`h-8 w-8 ${isScrolled ? 'text-blue-800' : 'text-white'}`} />
                    <span className={`ml-2 text-xl font-semibold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                      Paróquia São Miguel Arcanjo
                    </span>
                  </div>

                  <nav className="hidden md:flex space-x-8">
                    {['inicio', 'sobre', 'missas', 'doacoes', 'contato'].map((section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className={`${isScrolled ? 'text-gray-600 hover:text-blue-800' : 'text-white/90 hover:text-white'} transition-colors capitalize`}
                      >
                        {section.replace('-', ' ')}
                      </button>
                    ))}
                  </nav>

                  <button
                    className={`hidden md:block px-6 py-2 rounded-full transition-all ${isScrolled
                      ? 'bg-blue-800 text-white hover:bg-blue-700'
                      : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                      }`}
                  >
                    Participe da Comunidade
                  </button>

                  <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    {isMenuOpen
                      ? <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
                      : <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />}
                  </button>
                </div>
              </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden pt-20">
                <div className="px-4 py-2 space-y-4">
                  {['inicio', 'sobre', 'missas', 'doacoes', 'contato'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left px-4 py-4 text-gray-800 hover:bg-blue-50 rounded-lg transition-colors capitalize"
                    >
                      {section.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <main>
              {/* Hero Section */}
              <section id="inicio" className="relative min-h-screen flex items-center justify-center" role="banner">
                <div className="absolute inset-0">
                  <img
                    src="https://i.imgur.com/ggKPu86.jpg"
                    alt="Igreja"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
                </div>
                <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Venha experimentar a fé e o amor de Cristo!
                  </h1>
                  <p className="text-xl md:text-2xl mb-12 text-white/90">
                    Participe das nossas missas, eventos e viva a sua fé em comunidade
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <button
                      onClick={() => scrollToSection('missas')}
                      className="group bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all flex items-center"
                    >
                      Ver Horários das Missas
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      onClick={() => scrollToSection('doacoes')}
                      className="group bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all flex items-center"
                    >
                      Fazer uma Doação
                      <Heart className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </section>

              {/* Sobre Nós */}
              <section id="sobre" className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                      Nossa História
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <img
                          src="https://i.imgur.com/wQBXBhW.jpg"
                          alt="Comunidade"
                          className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                        />
                      </div>
                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">
                          Nossa igreja tem uma rica história de serviço à comunidade e dedicação à fé católica.
                          Há mais de 50 anos, temos sido um farol de esperança e amor cristão em nossa cidade.
                        </p>
                        <blockquote className="border-l-4 border-blue-800 pl-4 italic text-gray-800">
                          "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha."
                          <footer className="text-gray-600 text-sm mt-2">— 1 Coríntios 13:4</footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Horários das Missas */}
              <section id="missas" className="section-padding">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Horários das Missas
                  </h2>
                  <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {[
                      { dia: 'Missas Dominicais', horarios: ['07:50 - Com. Sant´Ana', '09:00 - Igreja Matriz', '19:30 - Com. D. Pai Eterno', '19:30 - Com. São Sebastião'] },
                      { dia: 'Quarta-feira', horarios: ['19:30'] },
                      { dia: 'Sábado', horarios: ['19:00'] }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
                      >
                        <h3 className="text-xl font-semibold mb-6 text-blue-800">{item.dia}</h3>
                        {item.horarios.map((horario, idx) => (
                          <div key={idx} className="flex items-center mb-4 text-gray-700">
                            <Clock className="h-5 w-5 text-blue-800 mr-3" />
                            <span>{horario}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Eventos - Usando Suspense */}
              <Suspense 
                fallback={
                  <div className="section-padding flex justify-center items-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-800"></div>
                  </div>
                }
              >
                <Eventos />
              </Suspense>

              {/* Doações */}
              <section id="doacoes" className="section-padding">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Doações e Contribuições
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                      Sua contribuição é fundamental para mantermos nossa missão evangelizadora e obras sociais.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                      {[
                        {
                          icon: <QrCode className="h-12 w-12 mx-auto mb-4 text-blue-800" />,
                          title: "PIX",
                          description: "Faça sua doação instantânea via PIX"
                        },
                        {
                          icon: <Heart className="h-12 w-12 mx-auto mb-4 text-blue-800" />,
                          title: "Transferência",
                          description: "Doe através de transferência bancária"
                        },
                        {
                          icon: <Calendar className="h-12 w-12 mx-auto mb-4 text-blue-800" />,
                          title: "Dízimo",
                          description: "Cadastre-se como dizimista"
                        }
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer"
                        >
                          <div className="transform group-hover:scale-110 transition-transform duration-200">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-800 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Contato */}
              <section id="contato" className="section-padding bg-gray-50">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                      Fale Conosco
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Informações de Contato - Lado Esquerdo */}
                      <div className="md:w-1/2">
                        <div className="bg-white p-4 rounded-2xl shadow-lg h-full">
                          <h3 className="text-lg font-semibold mb-4">Informações de Contato</h3>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                                <MapPin className="h-3.5 w-3.5 text-blue-800" />
                              </div>
                              <span className="ml-2 text-sm">R. 2, 376-444 - St. Centro, São Miguel do Araguaia - GO, 76590-000</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                                <Phone className="h-3.5 w-3.5 text-blue-800" />
                              </div>
                              <span className="ml-2 text-sm">(62) 3364-1191</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center">
                                <Mail className="h-3.5 w-3.5 text-blue-800" />
                              </div>
                              <span className="ml-2 text-sm">contato@igreja.com.br</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Localização - Lado Direito */}
                      <div className="md:w-1/2">
                        <div className="bg-white p-4 rounded-2xl shadow-lg h-full">
                          <h3 className="text-lg font-semibold mb-4 text-gray-900 text-center">
                            Localização da Paróquia São Miguel Arcanjo
                          </h3>
                          <div className="w-full h-[200px] rounded-lg overflow-hidden">
                            <iframe
                              src="https://www.google.com/maps?q=-13.27339,-50.15872&z=17&output=embed"
                              className="w-full h-full"
                              style={{ border: 0 }}
                              allowFullScreen
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title="Localização da Paróquia São Miguel Arcanjo"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16" role="contentinfo">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                  <div>
                    <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
                    <ul className="space-y-3">
                      {['inicio', 'sobre', 'missas', 'doacoes'].map((section) => (
                        <li key={section}>
                          <button
                            onClick={() => scrollToSection(section)}
                            className="text-gray-400 hover:text-white transition-colors capitalize"
                          >
                            {section.replace('-', ' ')}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-6">Horários</h4>
                    <ul className="space-y-3 text-gray-400">
                      <li>Domingo: 8h, 10h, 19h</li>
                      <li>Quarta: 19h30</li>
                      <li>Sábado: 19h</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-6">Contato</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                        <Phone className="h-4 w-4 mr-2" />
                        (62) 3364-1191
                      </li>
                      <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </li>
                      <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                        <Mail className="h-4 w-4 mr-2" />
                        contato@igreja.com.br
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Seção de Redes Sociais Centralizada */}
                <div className="text-center border-t border-gray-800 pt-12">
                  <h4 className="text-lg font-semibold mb-6">Redes Sociais</h4>
                  <div className="flex justify-center space-x-6">
                    {[
                      {
                        icon: <Facebook className="h-8 w-8" />,
                        url: "https://www.facebook.com/ParoqSaoMiguelArcanjo/?locale=pt_BR",
                        label: "Facebook"
                      },
                      {
                        icon: <Instagram className="h-8 w-8" />,
                        url: "https://www.instagram.com/paroquiasaomiguelarcanjo.sma/",
                        label: "Instagram"
                      },
                      {
                        icon: <Youtube className="h-8 w-8" />,
                        url: "https://www.youtube.com/c/ParoquiaSaoMiguelArcanjo",
                        label: "YouTube"
                      },
                      {
                        icon: (
                          <svg
                            className="h-8 w-8"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                        ),
                        url: "https://wa.me/5562982717499",
                        label: "WhatsApp"
                      }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-800 hover:text-white transition-all"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 text-center text-gray-400">
                  <p>&copy; 2024 Paróquia São Miguel Arcanjo. Todos os direitos reservados.</p>
                </div>
              </div>
            </footer>
          </div>
        } />
        <Route path="/catequese" element={<Catequese />} />
        <Route path="/festa-padroeiro" element={<FestaPadroeiro />} />
        <Route path="/avisos-semanais" element={<AvisosSemanais />} />
        <Route path="/web-radio" element={<WebRadio />} />
      </Routes>
    </Router>
  );
}

export default App;