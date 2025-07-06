
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, Shield, Trophy } from "lucide-react";

const MonetizzeLanding = () => {
  const handleCTAClick = () => {
    // Aqui você pode adicionar o link de afiliado real
    console.log("CTA clicked - redirect to affiliate link");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">CAPS</div>
            <Badge variant="destructive" className="animate-pulse">
              OFERTA LIMITADA
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-yellow-500 text-black hover:bg-yellow-400">
            🔥 MAIS DE 10.000 ALUNOS TRANSFORMADOS
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforme Sua Vida com o
            <span className="text-yellow-300 block">MÉTODO CAPS</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            O sistema completo que já ajudou milhares de pessoas a conquistarem 
            <strong> resultados extraordinários</strong> em apenas 30 dias
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <span className="ml-2">4.9/5 (2.847 avaliações)</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-sm opacity-90 mb-2">De R$ 497,00 por apenas</div>
            <div className="text-5xl font-bold text-yellow-300 mb-2">R$ 97</div>
            <div className="text-lg">ou 12x de R$ 9,70</div>
            <div className="text-sm mt-2 opacity-90">💳 Cartão | 💰 PIX | 🎫 Boleto</div>
          </div>

          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-xl px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            🚀 QUERO TRANSFORMAR MINHA VIDA AGORA
          </Button>

          <p className="text-sm mt-4 opacity-90">
            ⏰ Oferta válida por tempo limitado
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-blue-600 mb-3" />
              <div className="text-2xl font-bold text-gray-800">10.000+</div>
              <div className="text-gray-600">Alunos Ativos</div>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="w-12 h-12 text-yellow-500 mb-3" />
              <div className="text-2xl font-bold text-gray-800">98%</div>
              <div className="text-gray-600">Taxa de Sucesso</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-green-500 mb-3" />
              <div className="text-2xl font-bold text-gray-800">4.9/5</div>
              <div className="text-gray-600">Avaliação</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-purple-600 mb-3" />
              <div className="text-2xl font-bold text-gray-800">30 dias</div>
              <div className="text-gray-600">Garantia</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que você vai receber
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um sistema completo com tudo que você precisa para alcançar seus objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Módulo 1: Fundamentos",
                description: "Base sólida para seu desenvolvimento",
                value: "R$ 197"
              },
              {
                title: "Módulo 2: Estratégias Avançadas",
                description: "Técnicas exclusivas dos especialistas", 
                value: "R$ 297"
              },
              {
                title: "Módulo 3: Implementação",
                description: "Como colocar em prática no dia a dia",
                value: "R$ 197"
              },
              {
                title: "Bônus: Mentoria em Grupo",
                description: "Sessions ao vivo com especialistas",
                value: "R$ 497"
              },
              {
                title: "Bônus: Material Exclusivo",
                description: "Templates e ferramentas prontas",
                value: "R$ 297"
              },
              {
                title: "Bônus: Comunidade VIP",
                description: "Acesso vitalício ao grupo privado",
                value: "R$ 197"
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                    <Badge variant="secondary">{item.value}</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg">
              <div className="text-gray-600 mb-2">Valor total individual:</div>
              <div className="text-3xl font-bold text-gray-800 line-through mb-2">R$ 1.682</div>
              <div className="text-green-600 font-bold text-xl mb-4">
                Você economiza R$ 1.585!
              </div>
              <div className="text-4xl font-bold text-blue-600">
                Apenas R$ 97
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Veja os resultados reais
            </h2>
            <p className="text-xl text-gray-600">
              Histórias de transformação dos nossos alunos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Empreendedora",
                comment: "Em 30 dias consegui resultados que nunca imaginei. O método é realmente transformador!",
                rating: 5
              },
              {
                name: "João Santos",
                role: "Profissional Liberal", 
                comment: "Investimento que mais valeu a pena na minha vida. Recomendo para todos!",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Estudante",
                comment: "Conteúdo de altíssima qualidade. Superou todas as minhas expectativas!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="font-bold text-gray-800">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Clock className="w-16 h-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ⏰ ÚLTIMAS VAGAS DISPONÍVEIS
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Esta oferta especial expira em breve. Não perca a oportunidade de transformar sua vida!
          </p>
          
          <div className="bg-black/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-6xl font-bold text-yellow-300 mb-2">R$ 97</div>
            <div className="text-xl">12x de R$ 9,70 sem juros</div>
            <div className="text-sm mt-2 opacity-90">Acesso imediato após o pagamento</div>
          </div>

          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-2xl px-16 py-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-2xl"
          >
            🔥 GARANTIR MINHA VAGA AGORA
          </Button>

          <p className="text-sm mt-6 opacity-90">
            💡 Pagamento 100% seguro | 🛡️ Garantia de 30 dias
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Garantia Incondicional de 30 Dias
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Se por qualquer motivo você não ficar 100% satisfeito com o conteúdo, 
            devolvemos todo seu dinheiro sem fazer perguntas. Você não tem nada a perder!
          </p>
          
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-green-600 hover:bg-green-500 text-white font-bold text-xl px-12 py-6 rounded-full"
          >
            COMEÇAR AGORA SEM RISCOS
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-blue-400 mb-4">CAPS</div>
          <p className="text-gray-400 mb-6">
            Transformando vidas através do conhecimento
          </p>
          <div className="text-sm text-gray-500">
            © 2024 CAPS. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MonetizzeLanding;
