import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AvisosSemanais() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Avisos Semanais</h1>

          {/* Seção de Destaque */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-lg p-8 mb-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Destaques da Semana</h2>
            <p className="text-white/90">
              Confira os principais eventos e celebrações desta semana em nossa paróquia.
            </p>
          </div>

          {/* Missas e Celebrações */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Missas e Celebrações</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-800 pl-4">
                <h4 className="font-medium text-blue-800">Domingo - 17/03</h4>
                <p className="text-gray-600">Missa às 07:50 - Com. Sant´Ana</p>
                <p className="text-gray-600">Missa às 09:00 - Igreja Matriz</p>
                <p className="text-gray-600">Missa às 19:30 - Com. D. Pai Eterno</p>
                <p className="text-gray-600">Missa às 19:30 - Com. São Sebastião</p>
              </div>
              <div className="border-l-4 border-blue-800 pl-4">
                <h4 className="font-medium text-blue-800">Quarta-feira - 20/03</h4>
                <p className="text-gray-600">Missa às 19:30 - Igreja Matriz</p>
              </div>
              <div className="border-l-4 border-blue-800 pl-4">
                <h4 className="font-medium text-blue-800">Sábado - 23/03</h4>
                <p className="text-gray-600">Missa às 19:00 - Igreja Matriz</p>
              </div>
            </div>
          </div>

          {/* Eventos Especiais */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Eventos Especiais</h3>
            <div className="grid gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">A Hora do Angelus - Web Rádio</h4>
                <p className="text-gray-600">De Segunda a Sexta-feira às 18:00</p>
                <p className="text-gray-600">Acompanhe ao vivo pela nossa Web Rádio</p>
                <a 
                  href="https://www.facebook.com/ParoqSaoMiguelArcanjo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-800 hover:text-blue-700 mt-2"
                >
                  Acessar Web Rádio
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Encontro de Jovens</h4>
                <p className="text-gray-600">Sábado, 23/03 às 15:00</p>
                <p className="text-gray-600">Local: Salão Paroquial</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Adoração ao Santíssimo</h4>
                <p className="text-gray-600">Quinta-feira, 21/03 às 20:00</p>
                <p className="text-gray-600">Local: Igreja Matriz</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Terço dos Homens</h4>
                <p className="text-gray-600">Terça-feira, 19/03 às 19:00</p>
                <p className="text-gray-600">Local: Igreja Matriz</p>
              </div>
            </div>
          </div>

          {/* Avisos Gerais */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Avisos Gerais</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-800 mr-2">•</span>
                <span>Inscrições para a Catequese continuam abertas na secretaria paroquial.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-800 mr-2">•</span>
                <span>Pastoral do Dízimo: Novos dizimistas podem se cadastrar após as missas.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-800 mr-2">•</span>
                <span>Confissões: Quartas e sextas-feiras, 30 minutos antes da missa.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-800 mr-2">•</span>
                <span>Secretaria Paroquial: Atendimento de segunda a sexta, das 08:00 às 17:00.</span>
              </li>
            </ul>
          </div>

          {/* Intenções de Missa */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Intenções de Missa</h3>
            <p className="text-gray-600 mb-4">
              Para marcar intenções de missa, procure a secretaria paroquial ou entre em contato pelos nossos canais de comunicação.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-gray-700 font-medium">Horário para marcação de intenções:</p>
              <p className="text-gray-600">Segunda a sexta: 08:00 às 17:00</p>
              <p className="text-gray-600">Sábado: 08:00 às 12:00</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 