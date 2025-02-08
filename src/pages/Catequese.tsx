import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Catequese() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Catequese</h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Informamos que a Catequese São Miguel Arcanjo iniciará seus encontros nas seguintes datas:
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="text-lg font-medium text-blue-800 mb-2">Turmas de terça-feira</h3>
                <p className="mb-2">Dia 12/03/24</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Manhã: 08:00 às 09:30</li>
                  <li>Tarde: 14:00 às 15:30</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-blue-800 mb-2">Turmas de quinta-feira</h3>
                <p className="mb-2">Dia 14/03/24</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Manhã: 08:00 às 09:30</li>
                  <li>Tarde: 14:00 às 15:30</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-blue-800 mb-2">Turmas de Sábado</h3>
                <p className="mb-2">Dia 16/03/24</p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Manhã: 08:00 às 09:30</li>
                  <li>Tarde: 14:00 às 15:30</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Informações Importantes</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-800 mr-2">•</span>
                <span>Idade mínima: 9 anos completos ou a completar até 30/06/2024</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-800 mr-2">•</span>
                <span>Documentos necessários: Certidão de Batismo, comprovante de endereço e documento de identidade</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-800 mr-2">•</span>
                <span>Local: Salão Paroquial São Miguel Arcanjo</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-800 mr-2">•</span>
                <span>Duração: 2 anos de preparação</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-gray-700 mb-4">Para mais informações, entre em contato com a secretaria paroquial:</p>
            <ul className="space-y-2 text-gray-700">
              <li>Telefone: (62) 3364-1191</li>
              <li>WhatsApp: (62) 98271-7499</li>
              <li>Email: contato@paroquiasaomiguel.com.br</li>
            </ul>
            <p className="text-gray-700 mt-6 font-medium">Atenciosamente,</p>
            <p className="text-gray-700 font-medium">Coordenação da Catequese.</p>
          </div>
        </div>
      </main>
    </div>
  );
} 