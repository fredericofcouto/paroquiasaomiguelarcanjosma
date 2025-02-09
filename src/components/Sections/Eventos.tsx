import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const eventos = [
  {
    titulo: 'Catequese',
    data: '15 de Abril',
    imagem: 'https://i.imgur.com/Yl8rUjc.jpg',
    link: '/catequese'
  },
  {
    titulo: 'Festa do Padroeiro',
    data: '29 de setembro',
    imagem: 'https://i.imgur.com/bCNj9FO.jpg',
    link: '/festa-padroeiro'
  },
  {
    titulo: 'Avisos semanais',
    data: '10 de Junho',
    imagem: 'https://i.imgur.com/mDunjZK.png',
    link: '/avisos-semanais'
  },
  {
    titulo: 'Web Rádio São Miguel',
    data: 'A Hora do Angelus - De Segunda a Sexta-feira as 18:00',
    imagem: 'https://i.imgur.com/ESfX1OX.png',
    link: '/web-radio'
  }
];

export default function Eventos() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Eventos Especiais
        </h2>
        
        {/* Grid para todos os cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="relative h-48 flex items-center justify-center bg-white p-4">
                <img
                  src={evento.imagem}
                  alt={evento.titulo}
                  className="max-w-full max-h-full w-auto h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-800 transition-colors">
                  {evento.titulo}
                </h3>
                <p className="text-gray-600 mb-4">{evento.data}</p>
                <Link
                  to={evento.link || '/'}
                  className="text-blue-800 hover:text-blue-700 inline-flex items-center"
                >
                  Saiba mais
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 