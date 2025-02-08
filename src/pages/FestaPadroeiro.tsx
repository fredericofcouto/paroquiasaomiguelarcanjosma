import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FestaPadroeiro() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">São Miguel Arcanjo</h1>

          {/* Imagem do Santo */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://i.imgur.com/bCNj9FO.jpg"
              alt="São Miguel Arcanjo"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* História do Santo */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">História do Santo</h2>
            <div className="prose prose-blue max-w-none text-gray-600">
              <p className="mb-4">
                São Miguel Arcanjo é um dos três arcanjos mencionados na Bíblia, junto com Gabriel e Rafael. 
                Seu nome em hebraico significa "Quem é como Deus?". É considerado o príncipe dos anjos e 
                chefe do exército celestial.
              </p>
              <p>
                Na tradição católica, São Miguel é reconhecido como o defensor do povo de Deus, protetor 
                da Igreja e o anjo que combate as forças do mal. É frequentemente representado como um 
                guerreiro celestial, vestido com armadura, empunhando uma espada ou lança.
              </p>
            </div>
          </div>

          {/* Festa do Padroeiro */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Festa do Padroeiro</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                A festa de São Miguel Arcanjo é celebrada em 29 de setembro, junto com os outros arcanjos. 
                Em nossa paróquia, realizamos uma programação especial que inclui:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Novena preparatória de 20 a 28 de setembro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Missa Solene no dia 29 de setembro</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Procissão com a imagem do santo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-800 mr-2">•</span>
                  <span>Quermesse com comidas típicas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Oração */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Oração a São Miguel Arcanjo</h2>
            <p className="text-gray-700 italic">
              "São Miguel Arcanjo, defendei-nos no combate, sede o nosso refúgio contra as maldades e 
              ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos, e vós, príncipe da milícia 
              celeste, pelo divino poder, precipitai no inferno a satanás e aos outros espíritos malignos, 
              que vagueiam pelo mundo para perdição das almas. Amém."
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 