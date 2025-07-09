
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Star, Users, Clock, Shield, Trophy, Heart, Zap, Droplets, Leaf, ArrowLeft, Gift, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MonetizzeLanding = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    // Aqui você pode adicionar o link de afiliado real do SB2 Turbo
    console.log("CTA clicked - redirect to SB2 Turbo affiliate link");
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={handleBackClick}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao Início
              </Button>
              <div className="text-2xl font-bold text-red-600">SB2 Turbo</div>
            </div>
            <Badge variant="destructive" className="animate-pulse text-lg px-4 py-2">
              OFERTA LIMITADA
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-red-100 text-red-800 hover:bg-red-200 text-lg px-6 py-3">
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
              <span className="ml-2 text-lg">4.9/5 (8.547 avaliações)</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-lg opacity-90 mb-2">De R$ 197,00 por apenas</div>
            <div className="text-8xl font-bold text-red-200 mb-2">R$ 67</div>
            <div className="text-3xl">ou 12x de R$ 6,70</div>
            <div className="text-lg mt-2 opacity-90">💳 Cartão | 💰 PIX | 🎫 Boleto</div>
          </div>

          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-red-100 hover:bg-white text-red-600 font-bold text-3xl px-20 py-10 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg mb-6"
          >
            💖 QUERO EMAGRECER COM SAÚDE
          </Button>

          <div className="mb-6">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-3xl px-20 py-10 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              🔥 GARANTIR MINHA TRANSFORMAÇÃO
            </Button>
          </div>

          <p className="text-xl mt-4 opacity-90">
            ⏰ Oferta válida por tempo limitado
          </p>
        </div>
      </section>

      {/* New Section - Imagine viver com mais energia */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Imagine viver com mais energia, confiança e leveza
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              O SB2 Turbo é o aliado perfeito para quem deseja emagrecer com saúde e segurança. 
              Nossa fórmula exclusiva, baseada em ingredientes naturais de alta performance, 
              foi desenvolvida para ajudar você a:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-lg text-gray-700">Reduzir medidas de forma acelerada e eficaz</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-lg text-gray-700">Controlar a fome e evitar compulsões</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-lg text-gray-700">Aumentar sua energia e disposição diária</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <span className="text-lg text-gray-700">Resgatar sua autoestima e bem-estar</span>
              </div>
            </div>
            
            <p className="text-xl font-semibold text-red-600 mb-6">
              Não espere mais! O SB2 Turbo é a chave para transformar seu corpo e sua vida.
            </p>
            
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-red-600 hover:bg-red-500 text-white font-bold text-2xl px-16 py-8 rounded-full mb-4"
            >
              🔥 Transforme-se hoje mesmo com SB2 Turbo!
            </Button>

            <div className="mt-4">
              <Button 
                onClick={handleCTAClick}
                size="lg"
                className="bg-green-600 hover:bg-green-500 text-white font-bold text-2xl px-16 py-8 rounded-full"
              >
                ✅ COMEÇAR MINHA JORNADA AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que faz o SB2 Turbo tão especial?
            </h2>
            <p className="text-xl text-gray-600">
              Ingredientes naturais cientificamente comprovados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Picolinato de Cromo",
                description: "Auxilia na regulação do apetite e no controle dos níveis de açúcar, favorecendo a perda de peso"
              },
              {
                name: "Psyllium", 
                description: "Aumenta a saciedade e melhora o trânsito intestinal, contribuindo para o controle do peso"
              },
              {
                name: "Chia",
                description: "Rica em fibras, ajuda a controlar o apetite e regula o intestino, auxiliando na perda de peso"
              },
              {
                name: "Colágeno",
                description: "Proteína essencial que dá firmeza e elasticidade à pele, cabelos, unhas e articulações"
              },
              {
                name: "Espirulina",
                description: "Rica em nutrientes, promove saciedade e auxilia no controle do apetite, ajudando na perda de peso"
              },
              {
                name: "Laranja Moro",
                description: "Sua alta concentração de antioxidantes e fibra pode ajudar a reduzir a gordura abdominal e melhorar o metabolismo"
              }
            ].map((ingredient, index) => (
              <Card key={index} className="border-red-200 hover:border-red-400 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-700">{ingredient.name}</h3>
                  <p className="text-gray-600">{ingredient.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 mb-8 border-2 border-red-200">
            <h3 className="text-xl font-bold text-red-700 mb-4 text-center">
              Além de conter também:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">L-tirosina, L-carnitina e L-arginina</h4>
                <p className="text-gray-600">Compostos especiais que melhoram o metabolismo, aumentam a energia e promovem a queima de gordura, auxiliando na perda de peso</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Zinco + Pectina + Inulina + Cálcio</h4>
                <p className="text-gray-600">Ajudam a melhorar a digestão, aumentar a saciedade e fortalecer os ossos, colaborando para o controle de peso</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-red-600 hover:bg-red-500 text-white font-bold text-2xl px-16 py-8 rounded-full"
            >
              💊 QUERO ESTES INGREDIENTES AGORA
            </Button>
          </div>
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

          <div className="text-center mt-12">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-2xl px-16 py-8 rounded-full"
            >
              🏆 FAZER PARTE DO SUCESSO
            </Button>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

          <div className="text-center">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-orange-600 hover:bg-orange-500 text-white font-bold text-2xl px-16 py-8 rounded-full"
            >
              ⚡ QUERO ESTES BENEFÍCIOS
            </Button>
          </div>
        </div>
      </section>

      {/* New Pricing Packages Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🔥 ESCOLHA SEU PACOTE
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Quanto mais você compra, mais você economiza!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {/* Pacote Premium */}
            <Card className="bg-red-700 border-red-500 text-white hover:bg-red-600 transition-colors relative">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-yellow-300">Pacote Premium</h3>
                <div className="text-lg mb-2">6 unidades</div>
                <div className="mb-4">
                  <div className="text-sm opacity-75 line-through">De R$ 1.014,00</div>
                  <div className="text-lg font-semibold">12x de R$ 37,85</div>
                  <div className="text-2xl font-bold text-yellow-300">R$ 377,00 à vista</div>
                </div>
                <Button 
                  onClick={handleCTAClick}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold mb-4"
                >
                  COMPRAR AGORA
                </Button>
                <div className="text-xs space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Truck className="w-3 h-3" />
                    <span>Frete grátis para todo o Brasil</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Gift className="w-3 h-3" />
                    <span>+2 ebooks grátis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pacote Turbo */}
            <Card className="bg-red-700 border-red-500 text-white hover:bg-red-600 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-yellow-300">Pacote Turbo</h3>
                <div className="text-lg mb-2">4 unidades</div>
                <div className="mb-4">
                  <div className="text-sm opacity-75 line-through">De R$ 676,00</div>
                  <div className="text-lg font-semibold">12x de R$ 25,80</div>
                  <div className="text-2xl font-bold text-yellow-300">R$ 257,00 à vista</div>
                </div>
                <Button 
                  onClick={handleCTAClick}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold mb-4"
                >
                  COMPRAR AGORA
                </Button>
                <div className="text-xs space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Truck className="w-3 h-3" />
                    <span>Frete grátis para todo o Brasil</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Gift className="w-3 h-3" />
                    <span>+2 ebooks grátis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* O Mais Vendido */}
            <Card className="bg-red-700 border-yellow-400 border-2 text-white hover:bg-red-600 transition-colors relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-bold">
                MAIS VENDIDO
              </Badge>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-yellow-300">O Mais Vendido</h3>
                <div className="text-lg mb-2">3 unidades</div>
                <div className="mb-4">
                  <div className="text-sm opacity-75 line-through">De R$ 507,00</div>
                  <div className="text-lg font-semibold">12x de R$ 19,78</div>
                  <div className="text-2xl font-bold text-yellow-300">R$ 197,00 à vista</div>
                </div>
                <Button 
                  onClick={handleCTAClick}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold mb-4"
                >
                  COMPRAR AGORA
                </Button>
                <div className="text-xs space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Truck className="w-3 h-3" />
                    <span>Frete grátis para todo o Brasil</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Gift className="w-3 h-3" />
                    <span>+2 ebooks grátis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pacote Econômico */}
            <Card className="bg-red-700 border-red-500 text-white hover:bg-red-600 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-yellow-300">Pacote Econômico</h3>
                <div className="text-lg mb-2">2 unidades</div>
                <div className="mb-4">
                  <div className="text-sm opacity-75 line-through">De R$ 338,00</div>
                  <div className="text-lg font-semibold">12x de R$ 16,77</div>
                  <div className="text-2xl font-bold text-yellow-300">R$ 167,00 à vista</div>
                </div>
                <Button 
                  onClick={handleCTAClick}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold mb-4"
                >
                  COMPRAR AGORA
                </Button>
                <div className="text-xs space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Truck className="w-3 h-3" />
                    <span>Frete grátis para todo o Brasil</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Gift className="w-3 h-3" />
                    <span>+2 ebooks grátis</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experimento */}
            <Card className="bg-red-700 border-red-500 text-white hover:bg-red-600 transition-colors">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl mb-2 text-yellow-300">Experimento</h3>
                <div className="text-lg mb-2">1 unidade</div>
                <div className="mb-4">
                  <div className="text-sm opacity-75 line-through">De R$ 169,00</div>
                  <div className="text-lg font-semibold">12x de R$ 13,76</div>
                  <div className="text-2xl font-bold text-yellow-300">R$ 137,00 à vista</div>
                </div>
                <Button 
                  onClick={handleCTAClick}
                  className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold mb-4"
                >
                  COMPRAR AGORA
                </Button>
                <div className="text-xs space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Truck className="w-3 h-3" />
                    <span>Frete grátis para todo o Brasil</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Gift className="w-3 h-3" />
                    <span>+2 ebooks grátis</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-3xl px-16 py-8 rounded-full"
            >
              🛒 ESCOLHER MEU PACOTE AGORA
            </Button>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

          <div className="text-center">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-pink-600 hover:bg-pink-500 text-white font-bold text-2xl px-16 py-8 rounded-full"
            >
              💖 QUERO MEU DEPOIMENTO AQUI
            </Button>
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

          <div className="max-w-3xl mx-auto mb-12">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-red-100 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-red-700 hover:no-underline">
                  QUAIS SÃO OS EFEITOS DO SB2 TURBO NO MEU ORGANISMO?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  O SB2 TURBO é um emagrecedor de alta concentração com uma composição de ingredientes 100% naturais. SB2 tem como função criar uma "gelatina imã" que através de suas fibras, permite sugar impurezas e camadas de gordura para dentro, expulsando do corpo a gordura através da respiração, fezes e urina.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-red-100 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-red-700 hover:no-underline">
                  COMO DEVO USAR O SB2 TURBO?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Cada frasco/pote contém 60 cápsulas, é recomendado tomar 2 cápsulas ao dia, sendo 1 antes das principais refeições. Especialistas em nutrição e emagrecimento recomendam o uso de SB2 Turbo por no mínimo 3 meses para um resultado definitivo no seu corpo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-red-100 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-red-700 hover:no-underline">
                  ESTE SITE É SEGURO?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Sim, garantimos a segurança total do nosso site. No SB2, priorizamos a proteção dos dados dos nossos clientes. Utilizamos tecnologias avançadas de segurança, como criptografia SSL, para garantir que todas as informações fornecidas em nosso site sejam protegidas contra acesso não autorizado. Além disso, estamos em conformidade com todas as regulamentações de privacidade de dados para proporcionar uma experiência online segura e tranquila para todos os nossos visitantes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-red-100 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-red-700 hover:no-underline">
                  QUANTAS CÁPSULAS VEM NO POTE?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Cada frasco/pote contém 60 cápsulas equivalente a um mês de tratamento
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-red-100 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-red-700 hover:no-underline">
                  QUAL É A COMPOSIÇÃO 100% NATURAL DO SB2 TURBO?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  SB2 TURBO é composto pelos seguintes Ingredientes: Carbonato de cálcio, Psyllium, Espirulina, Chia moída, Inulina, Colágeno, L-carnitina, L-tirosina, L-arginina, Pectina, Extrato de Laranja moro, Bisglicinato de zinco, Picolinato de cromo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-red-100 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-red-700 hover:no-underline">
                  EXISTEM EFEITOS COLATERAIS?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Não existe nenhum efeito colateral com o consumo do produto SB2 TURBO, e qualquer pessoa pode tomar e aproveitar seus benefícios. Porém, gestantes que devem consultar um médico antes de iniciar o consumo. ESTE PRODUTO NÃO CONTÉM GLÚTEN.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-red-100 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-red-700 hover:no-underline">
                  QUAIS AS FORMAS DE PAGAMENTO?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Aceitamos PIX, cartões de crédito das principais bandeiras como Mastercard, Visa, Elo e boleto bancário com total segurança através das plataformas. Você pode parcelar sua compra em até 12x no cartão de crédito com possibilidade de dividir o valor em dois cartões diferentes. Não é possível parcelar no boleto bancário, pois ele é válido apenas para pagamento à vista.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-red-100 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-red-700 hover:no-underline">
                  TEM GARANTIA?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  Você pode adquirir o SB2 Turbo por até 30 dias e experimentar com RISCO ZERO, caso não tiver o seu resultado nas primeiras semanas, o seu dinheiro será 100% devolvido, basta enviar um e-mail.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border border-red-100 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-red-700 hover:no-underline">
                  QUANDO SERÁ ENVIADO?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  O prazo de envio é de até 5 dias úteis após a confirmação do pagamento.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border border-red-100 rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg text-red-700 hover:no-underline">
                  QUAL O KIT MAIS VENDIDO?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  O kit mais vendido e recomendado é o KIT com 6 potes, com mais de 50% de desconto! Isso porque indicamos o uso contínuo por, no mínimo, 3 meses para obter excelentes resultados — e com 6 meses de uso, você alcança o máximo potencial do tratamento.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-2xl px-16 py-8 rounded-full"
            >
              ❓ TIRAR MINHAS DÚVIDAS AGORA
            </Button>
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
            <div className="text-8xl font-bold text-red-200 mb-2">R$ 67</div>
            <div className="text-2xl">12x de R$ 6,70 sem juros</div>
            <div className="text-lg mt-2 opacity-90">Entrega rápida e discreta</div>
          </div>

          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-red-100 hover:bg-white text-red-600 font-bold text-3xl px-20 py-10 rounded-full transform hover:scale-105 transition-all duration-200 shadow-2xl mb-6"
          >
            🔥 COMECE AGORA SUA TRANSFORMAÇÃO
          </Button>

          <div className="mb-4">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-3xl px-20 py-10 rounded-full transform hover:scale-105 transition-all duration-200 shadow-2xl"
            >
              ⚡ ÚLTIMA CHANCE - COMPRAR AGORA
            </Button>
          </div>

          <p className="text-lg mt-6 opacity-90">
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
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🔒 Site Protegido SSL</Badge>
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">💳 Pagamento Seguro</Badge>
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">📦 Entrega Garantida</Badge>
          </div>
          
          <Button 
            onClick={handleCTAClick}
            size="lg"
            className="bg-red-600 hover:bg-red-500 text-white font-bold text-2xl px-16 py-8 rounded-full mb-4"
          >
            COMEÇAR AGORA SEM RISCOS
          </Button>

          <div className="mt-4">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-green-600 hover:bg-green-500 text-white font-bold text-2xl px-16 py-8 rounded-full"
            >
              🛡️ GARANTIA TOTAL - COMPRAR
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-red-400 mb-4">SB2 Turbo</div>
          <p className="text-gray-400 mb-6">
            Transformando a vida das mulheres brasileiras
          </p>

          <div className="mb-6">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="bg-red-600 hover:bg-red-500 text-white font-bold text-xl px-12 py-6 rounded-full"
            >
              🚀 ÚLTIMA OPORTUNIDADE
            </Button>
          </div>

          <div className="text-sm text-gray-500">
            © 2024 SB2 Turbo. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MonetizzeLanding;
