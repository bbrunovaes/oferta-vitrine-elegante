
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Clock, Shield, Trophy, Heart, Zap, Droplets, Leaf } from "lucide-react";

const MonetizzeLanding = () => {
  const handleCTAClick = () => {
    // Aqui você pode adicionar o link de afiliado real do SB2 Turbo
    console.log("CTA clicked - redirect to SB2 Turbo affiliate link");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-red-600">SB2 Turbo</div>
            <Badge variant="destructive" className="animate-pulse">
              OFERTA LIMITADA
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-red-200">
            💖 MAIS DE 50.000 MULHERES TRANSFORMADAS
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Recupere a sua
            <span className="text-red-200 block">melhor versão</span>
            <span className="text-3xl md:text-4xl block mt-2">Emagreça com saúde e autoestima!</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            O suplemento natural que já ajudou milhares de mulheres a 
            <strong> emagrecer de forma saudável</strong> sem dietas restritivas ou efeitos colaterais
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <Star className="w-5 h-5 text-yellow-300 fill-current" />
              <span className="ml-2">4.9/5 (8.547 avaliações)</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-sm opacity-90 mb-2">De R$ 197,00 por apenas</div>
            <div className="text-5xl font-bold text-red-200 mb-2">R$ 67</div>
            <div className="text-lg">ou 12x de R$ 6,70</div>
            <div className="text-sm mt-2 opacity-90">💳 Cartão | 💰 PIX | 🎫 Boleto</div>
          </div>

          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-red-100 hover:bg-white text-red-600 font-bold text-xl px-12 py-6 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            💖 QUERO EMAGRECER COM SAÚDE
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
              <Users className="w-12 h-12 text-red-500 mb-3" />
              <div className="text-2xl font-bold text-gray-800">50.000+</div>
              <div className="text-gray-600">Mulheres Transformadas</div>
            </div>
            <div className="flex flex-col items-center">
              <Trophy className="w-12 h-12 text-red-400 mb-3" />
              <div className="text-2xl font-bold text-gray-800">95%</div>
              <div className="text-gray-600">Taxa de Sucesso</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-12 h-12 text-red-300 mb-3" />
              <div className="text-2xl font-bold text-gray-800">4.9/5</div>
              <div className="text-gray-600">Avaliação</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-red-600 mb-3" />
              <div className="text-2xl font-bold text-gray-800">7 dias</div>
              <div className="text-gray-600">Garantia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Por que SB2 Turbo é diferente?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Benefícios comprovados que você vai sentir desde os primeiros dias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-red-500" />,
                title: "Queima Gordura Localizada",
                description: "Atua diretamente nas células de gordura, especialmente na barriga e quadris"
              },
              {
                icon: <Droplets className="w-12 h-12 text-red-400" />,
                title: "Reduz Inchaço",
                description: "Elimina retenção de líquidos e deixa seu corpo mais definido"
              },
              {
                icon: <Heart className="w-12 h-12 text-red-600" />,
                title: "Mais Energia",
                description: "Aumenta disposição e reduz ansiedade por comida"
              },
              {
                icon: <Leaf className="w-12 h-12 text-red-300" />,
                title: "100% Natural",
                description: "Fórmula natural e segura, sem efeitos colaterais"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:border-red-300 transition-colors">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-red-700">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Veja as transformações reais
            </h2>
            <p className="text-xl text-gray-600">
              Mulheres que recuperaram sua autoestima com SB2 Turbo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carla Mendes",
                age: "34 anos",
                weight: "Perdeu 12kg em 2 meses",
                comment: "Nunca me senti tão bem comigo mesma! O SB2 Turbo mudou minha vida. Perdi peso sem passar fome e ganhei muita energia!",
                rating: 5
              },
              {
                name: "Ana Paula",
                age: "28 anos", 
                weight: "Perdeu 8kg em 1 mês",
                comment: "Depois da gravidez estava difícil voltar ao meu peso. Com SB2 Turbo consegui eliminar a barriga e me sinto linda novamente!",
                rating: 5
              },
              {
                name: "Juliana Santos",
                age: "41 anos",
                weight: "Perdeu 15kg em 3 meses",
                comment: "Tentei várias dietas e nada funcionava. O SB2 Turbo foi a solução que eu precisava. Resultado natural e duradouro!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-red-100 hover:border-red-300 transition-colors">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-red-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="text-center">
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.age}</div>
                    <div className="text-red-600 font-semibold text-sm">{testimonial.weight}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Em quanto tempo vou ver resultados?",
                answer: "A maioria das mulheres começam a notar diferença já na primeira semana, com redução do inchaço. Resultados mais visíveis aparecem a partir de 30 dias de uso contínuo."
              },
              {
                question: "O SB2 Turbo é seguro?",
                answer: "Sim! O SB2 Turbo é feito com ingredientes 100% naturais e não possui efeitos colaterais. É recomendado para mulheres adultas saudáveis."
              },
              {
                question: "Por quanto tempo devo usar?",
                answer: "Recomendamos o uso por pelo menos 90 dias para resultados duradouros. Cada organismo responde de forma diferente, mas a maioria das mulheres atinge seus objetivos neste período."
              },
              {
                question: "Preciso fazer dieta restritiva?",
                answer: "Não! O SB2 Turbo funciona sem necessidade de dietas malucas. Uma alimentação equilibrada potencializa os resultados, mas não é obrigatório cortar grupos alimentares."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-red-100">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2 text-red-700">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
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
            ⏰ ÚLTIMAS UNIDADES DISPONÍVEIS
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Esta oferta especial expira em breve. Não perca a chance de começar sua transformação!
          </p>
          
          <div className="bg-black/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-6xl font-bold text-red-200 mb-2">R$ 67</div>
            <div className="text-xl">12x de R$ 6,70 sem juros</div>
            <div className="text-sm mt-2 opacity-90">Entrega rápida e discreta</div>
          </div>

          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-red-100 hover:bg-white text-red-600 font-bold text-2xl px-16 py-8 rounded-full transform hover:scale-105 transition-all duration-200 shadow-2xl"
          >
            🔥 COMECE AGORA SUA TRANSFORMAÇÃO
          </Button>

          <p className="text-sm mt-6 opacity-90">
            💡 Pagamento 100% seguro | 🛡️ Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-20 h-20 text-red-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Garantia de Satisfação de 7 Dias
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Se você não ficar satisfeita com os primeiros resultados, devolvemos 100% do seu dinheiro. 
            Sua satisfação é nossa prioridade!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-red-100 text-red-800">🔒 Site Protegido SSL</Badge>
            <Badge className="bg-red-100 text-red-800">💳 Pagamento Seguro</Badge>
            <Badge className="bg-red-100 text-red-800">📦 Entrega Garantida</Badge>
          </div>
          
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-red-600 hover:bg-red-500 text-white font-bold text-xl px-12 py-6 rounded-full"
          >
            COMEÇAR AGORA SEM RISCOS
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-red-400 mb-4">SB2 Turbo</div>
          <p className="text-gray-400 mb-6">
            Transformando a vida das mulheres brasileiras
          </p>
          <div className="text-sm text-gray-500">
            © 2024 SB2 Turbo. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MonetizzeLanding;
