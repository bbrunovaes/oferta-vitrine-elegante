
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star, Users, Clock, Award, Phone, Mail, MapPin, Home, Timer, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const CursoLanding = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches 0
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCTAClick = () => {
    window.open('https://pay.hotmart.com/E45853768C?checkoutMode=10&ref=V100100631Q&bid=1749602698106', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppClick = () => {
    window.open('https://go.hotmart.com/V100100631Q?ap=770a', '_blank', 'noopener,noreferrer');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Home Button */}
      <div className="container mx-auto px-4 pt-4">
        <Button 
          onClick={handleHomeClick}
          variant="outline"
          className="mb-4 flex items-center gap-2 hover:bg-pink-50"
        >
          <Home className="w-4 h-4" />
          Voltar ao Início
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              {/* Dynamic Gradient Logo */}
              <div className="mb-8">
                <div className="inline-block p-4 rounded-full bg-gradient-to-r from-white/20 to-pink-200/30 backdrop-blur-sm border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">FC</span>
                  </div>
                </div>
              </div>

              {/* Rating Section */}
              <div className="mb-6 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xl font-bold">4.9</span>
                </div>
                <p className="text-pink-100">+5.000 avaliações positivas</p>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Curso de Cutilagem para Manicures
                <span className="block text-pink-200">com Faby Cardoso</span>
              </h1>
              <p className="text-xl mb-8 text-pink-100">
                Domine as técnicas profissionais de cutilagem e se torne uma especialista reconhecida no mercado
              </p>

              {/* Timer Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-white/20">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Timer className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Oferta Especial Termina em:</span>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-white/20 rounded-lg px-3 py-2">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-pink-200 mt-1">Horas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-white/20 rounded-lg px-3 py-2">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-pink-200 mt-1">Min</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-white/20 rounded-lg px-3 py-2">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-pink-200 mt-1">Seg</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                <Button 
                  onClick={handleCTAClick}
                  size="lg" 
                  className="bg-white text-pink-600 hover:bg-pink-50 text-lg px-8 py-6"
                >
                  Quero me Especializar Agora
                </Button>
                <div className="text-center">
                  <div className="text-7xl font-black text-yellow-300 animate-pulse mb-2 drop-shadow-lg">R$ 59</div>
                  <div className="text-xl font-bold text-yellow-200 animate-pulse mb-1">em até 6x de R$11,07 no cartão</div>
                  <div className="text-xl font-bold text-yellow-200 animate-pulse">Ou à vista no Boleto e Pix</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://i.imgur.com/VcpbYZV.png" 
                alt="Curso de Cutilagem - Manicure Profissional" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que você vai aprender
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Um curso completo com técnicas avançadas de cutilagem profissional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-pink-500" />,
                title: "Preparação das Mãos e dos Pés",
                description: "Técnicas adequadas para preparar as mãos e pés antes do procedimento"
              },
              {
                icon: <Users className="w-8 h-8 text-pink-500" />,
                title: "Lixamento e Polimento da Unha",
                description: "Aprenda as técnicas corretas de lixamento e polimento profissional"
              },
              {
                icon: <Star className="w-8 h-8 text-pink-500" />,
                title: "Cutilagem perfeita, fundinha e corte bordado",
                description: "Domine as técnicas avançadas de cutilagem com acabamento perfeito"
              },
              {
                icon: <Clock className="w-8 h-8 text-pink-500" />,
                title: "Unhas francesinhas simples e formato sorriso",
                description: "Técnicas para criar francesinhas perfeitas com formato sorriso"
              },
              {
                icon: <Award className="w-8 h-8 text-pink-500" />,
                title: "Decorações de Unhas bônus como Degradê e Gravatinha",
                description: "Aprenda técnicas de decoração para diversificar seus serviços"
              },
              {
                icon: <Users className="w-8 h-8 text-pink-500" />,
                title: "Como passar o esmalte nude sem manchar",
                description: "Técnica perfeita para aplicação de esmalte nude sem imperfeições"
              },
              {
                icon: <Star className="w-8 h-8 text-pink-500" />,
                title: "Como tirar o borrado corretamente das unhas",
                description: "Aprenda a corrigir erros de esmaltação de forma profissional"
              },
              {
                icon: <Clock className="w-8 h-8 text-pink-500" />,
                title: "Como colocar adesivos artesanais",
                description: "Técnicas para aplicação perfeita de adesivos decorativos"
              },
              {
                icon: <Award className="w-8 h-8 text-pink-500" />,
                title: "Esfoliação dos Pés e muito mais...",
                description: "Técnicas de esfoliação e outros procedimentos complementares"
              }
            ].map((item, index) => (
              <Card key={index} className="border-pink-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que nossas alunas dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Histórias reais de transformação profissional
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/wKwZGL5.png" 
                alt="Depoimento de cliente 1"
                className="rounded-lg shadow-lg max-w-full h-auto w-full"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/HBiGvRr.png" 
                alt="Depoimento de cliente 2"
                className="rounded-lg shadow-lg max-w-full h-auto w-full"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/D5Uq0Dc.png" 
                alt="Depoimento de cliente 3"
                className="rounded-lg shadow-lg max-w-full h-auto w-full"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/JgCgajg.png" 
                alt="Depoimento de cliente 4"
                className="rounded-lg shadow-lg max-w-full h-auto w-full"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/D4YnskX.png" 
                alt="Depoimento de cliente 5"
                className="rounded-lg shadow-lg max-w-full h-auto w-full"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/R1xbrib.png" 
                alt="Depoimento de cliente 6"
                className="rounded-lg shadow-lg max-w-full h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-pink-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Oferta Especial - Por Tempo Limitado!
          </h2>
          
          <Card className="max-w-md mx-auto bg-white text-gray-800 border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="text-8xl font-black text-orange-500 animate-bounce mb-3 drop-shadow-xl">R$ 59</div>
                <div className="text-2xl font-bold text-orange-600 animate-pulse mb-2">em até 6x de R$11,07 no cartão</div>
                <div className="text-2xl font-bold text-orange-600 animate-pulse mb-6">Ou à vista no Boleto e Pix</div>
                <div className="text-green-600 font-semibold mb-6">Economize 70%</div>
                
                <div className="space-y-3 mb-8">
                  {[
                    "Acesso vitalício ao curso",
                    "Certificado de conclusão",
                    "Suporte por WhatsApp",
                    "Grupo exclusivo de alunas",
                    "Material complementar em PDF"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-pink-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={handleCTAClick}
                  size="lg" 
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg py-6"
                >
                  Garantir Minha Vaga Agora
                </Button>
                
                <p className="text-sm text-gray-500 mt-4">
                  🔒 Compra 100% segura | Garantia de 7 dias
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "📌 O curso é presencial ou online?",
                  answer: "O curso é 100% online! Você pode aprender no seu ritmo, de qualquer lugar, apenas com um celular ou computador com acesso à internet. 🎥✨"
                },
                {
                  question: "📌 Quanto tempo leva para concluir o curso e pegar o certificado?",
                  answer: "O curso é feito no seu ritmo! Você pode concluir em poucos dias ou semanas, dependendo da sua disponibilidade. Assim que finalizar todas as aulas, o certificado é liberado automaticamente dentro da plataforma de alunas que você fará parte. 🏅"
                },
                {
                  question: "📌 No curso ensina esmaltação que seca rápido?",
                  answer: "Sim! Você aprenderá técnicas que garantem esmaltação perfeita e com secagem rápida. 💅✨"
                },
                {
                  question: "📌 Sou iniciante do zero. Vou conseguir aprender?",
                  answer: "Com certeza! O curso foi criado pensando também em quem nunca fez unha antes. As aulas são detalhadas, práticas e gravadas em alta qualidade para que você aprenda de forma fácil e eficiente. Além disso, você pode assistir quantas vezes quiser! 🎯"
                },
                {
                  question: "📌 Já sou Manicure, esse curso é para mim?",
                  answer: "Claro, é sim! Esse curso não é apenas para iniciantes, mas também para manicures que querem aprimorar suas técnicas e elevar o nível do seu trabalho. Você aprenderá técnicas avançadas de cutilagem, esmaltação duradoura e ainda terá acesso a materiais exclusivos que vão te ajudar atrair mais clientes e aumentar seus ganhos. Se você quer se destacar na profissão e se tornar uma referência, sim, esse curso é pra você! 💅✨"
                },
                {
                  question: "📌 Tenho medo de comprar e ser golpe. É confiável?",
                  answer: "Entendemos sua preocupação! O curso é vendido pela Hotmart, uma plataforma 100% segura e confiável. ✅ Assim que o pagamento for aprovado, você receberá acesso imediato ao curso no seu e-mail e suporte completo caso tenha dúvidas."
                },
                {
                  question: "📌 Como faço para acessar o curso depois da compra?",
                  answer: "Assim que seu pagamento for confirmado, você receberá um e-mail da Hotmart com o link de acesso ao curso, seu login e você cadastrará uma senha. Se não encontrar, verifique sua caixa de spam ou lixeira.\n\nCaso não tenha recebido, envie uma mensagem para nosso suporte clicando aqui.\nVamos te ajudar rapidinho! 😊"
                },
                {
                  question: "📌 O curso oferece suporte?",
                  answer: "Sim! Você terá acesso a um suporte exclusivo para tirar dúvidas durante seu aprendizado. Estamos aqui para te ajudar! 💖"
                },
                {
                  question: "📌 E se eu não tiver talento para ser manicure?",
                  answer: "Ninguém nasce sabendo! Manicure é prática e dedicação. Com treino e paciência, você desenvolverá habilidades incríveis. Eu mesma aprendi errando e acertando. Confie em você! 💪✨"
                },
                {
                  question: "📌 Moro longe, será que consigo aprender online?",
                  answer: "Sim! O curso é 100% online, então você pode aprender de qualquer lugar e no seu próprio ritmo. Basta ter um celular/computador e internet. 🌍"
                },
                {
                  question: "📌 Nunca fiz curso online. Será que consigo aprender?",
                  answer: "Claro! As aulas são práticas, detalhadas e gravadas em alta qualidade. Você pode assistir quantas vezes quiser e ainda conta com nosso suporte. Você não estará sozinha nessa! 🤗"
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-pink-100 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg text-gray-800 hover:no-underline hover:text-pink-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 whitespace-pre-line pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">FC</span>
              </div>
              <span className="text-xl font-bold">Faby Cardoso</span>
            </div>
            <p className="text-gray-400 mb-8">
              Especializando manicures em todo o Brasil com técnicas profissionais de cutilagem.
            </p>
            
            <div className="mb-8">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
              >
                <Phone className="w-5 h-5" />
                Contato pelo WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Faby Cardoso. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CursoLanding;
