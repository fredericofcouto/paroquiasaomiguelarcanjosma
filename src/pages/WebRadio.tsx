import { ArrowLeft, Calendar, Clock, Play, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebRadio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <Link to="/" className="flex items-center text-blue-800 hover:text-blue-700">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Web Rádio São Miguel</h1>
            <p className="text-xl text-gray-600">A Hora do Angelus - De Segunda a Sexta-feira às 18:00</p>
          </div>

          {/* Logo da Rádio */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex justify-center mb-8">
              <img
                src="https://i.imgur.com/WI732G2.png"
                alt="Logo Web Rádio São Miguel"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Botão de Play */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="text-center">
              <a
                href="https://www.facebook.com/ParoqSaoMiguelArcanjo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                <Play className="h-6 w-6 mr-2" />
                Ouvir Agora
              </a>
            </div>
          </div>

          {/* Programação */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-blue-800" />
              Programação
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <Clock className="h-5 w-5 text-blue-800 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">A Hora do Angelus</h3>
                  <p className="text-gray-600">Segunda a Sexta-feira às 18:00</p>
                  <p className="text-gray-600 mt-2">
                    Momento de oração e reflexão com a comunidade São Miguel Arcanjo
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <Radio className="h-5 w-5 text-blue-800 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Programação Especial</h3>
                  <p className="text-gray-600">Transmissão de missas e eventos especiais</p>
                  <p className="text-gray-600 mt-2">
                    Acompanhe nossa programação nas redes sociais
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Informações Adicionais */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como Participar</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Você pode participar da nossa programação enviando suas intenções e pedidos de oração através de nossas redes sociais ou entrando em contato com a secretaria paroquial.
              </p>
              <div className="mt-4">
                <h3 className="font-medium text-gray-900 mb-2">Contatos:</h3>
                <ul className="space-y-2">
                  <li>Telefone: (62) 3364-1191</li>
                  <li>WhatsApp: (62) 98271-7499</li>
                  <li>Email: contato@paroquiasaomiguel.com.br</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 