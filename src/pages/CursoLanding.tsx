import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Users, Clock, Award, Phone, Mail, MapPin, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CursoLanding = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    window.open('https://bbrunovaes.github.io/cursocutilagem/', '_blank', 'noopener,noreferrer');
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
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Curso de Cutilagem para Manicures
                <span className="block text-pink-200">com Faby Cardoso</span>
              </h1>
              <p className="text-xl mb-8 text-pink-100">
                Domine as técnicas profissionais de cutilagem e se torne uma especialista reconhecida no mercado
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleCTAClick}
                  size="lg" 
                  className="bg-white text-pink-600 hover:bg-pink-50 text-lg px-8 py-6"
                >
                  Quero me Especializar Agora
                </Button>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold">R$ 59,00</div>
                  <div className="text-pink-200 line-through">R$ 199,00</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop" 
                alt="Curso de Cutilagem" 
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
                title: "Técnicas Avançadas",
                description: "Aprenda métodos profissionais de cutilagem usados pelos melhores salões"
              },
              {
                icon: <Users className="w-8 h-8 text-pink-500" />,
                title: "Atendimento ao Cliente",
                description: "Como lidar com diferentes tipos de pele e necessidades dos clientes"
              },
              {
                icon: <Star className="w-8 h-8 text-pink-500" />,
                title: "Higiene e Segurança",
                description: "Protocolos de segurança e higienização para evitar contaminações"
              },
              {
                icon: <Clock className="w-8 h-8 text-pink-500" />,
                title: "Gestão de Tempo",
                description: "Otimize seu tempo de atendimento sem perder a qualidade"
              },
              {
                icon: <Award className="w-8 h-8 text-pink-500" />,
                title: "Certificado",
                description: "Receba certificado de conclusão reconhecido no mercado"
              },
              {
                icon: <Users className="w-8 h-8 text-pink-500" />,
                title: "Suporte Vitalício",
                description: "Acesso ao grupo exclusivo de alunas para tirar dúvidas"
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

      {/* About Instructor */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0401ba937c1?w=400&h=400&fit=crop&crop=face" 
                alt="Faby Cardoso" 
                className="rounded-full w-80 h-80 object-cover mx-auto shadow-2xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Conheça Faby Cardoso
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Com mais de 15 anos de experiência no mercado de beleza, Faby Cardoso é uma das maiores especialistas em cutilagem do Brasil. Já treinou milhares de profissionais e é reconhecida por sua técnica impecável e didática excepcional.
              </p>
              <div className="space-y-3">
                {[
                  "15+ anos de experiência profissional",
                  "5.000+ alunas treinadas",
                  "Especialista em cutilagem segura",
                  "Instrutora certificada"
                ].map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-pink-500" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
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
              O que nossas alunas dizem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Manicure Profissional",
                content: "O curso mudou completamente minha carreira. Agora sou uma das manicures mais requisitadas da região!",
                rating: 5
              },
              {
                name: "Ana Paula",
                role: "Dona de Salão",
                content: "Técnicas incríveis! Minha clientela aumentou 300% após aplicar o que aprendi no curso.",
                rating: 5
              },
              {
                name: "Juliana Costa",
                role: "Manicure Iniciante",
                content: "Mesmo sendo iniciante, consegui aprender tudo facilmente. A Faby ensina de forma muito clara.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-pink-100">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
                <div className="text-gray-500 line-through text-xl mb-2">De R$ 199,00</div>
                <div className="text-4xl font-bold text-pink-600 mb-4">R$ 59,00</div>
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
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Por quanto tempo tenho acesso ao curso?",
                answer: "O acesso é vitalício! Você pode assistir quantas vezes quiser, no seu ritmo."
              },
              {
                question: "Preciso ter experiência prévia?",
                answer: "Não! O curso é adequado tanto para iniciantes quanto para quem já atua na área."
              },
              {
                question: "Recebo certificado?",
                answer: "Sim! Após concluir o curso, você recebe um certificado de conclusão."
              },
              {
                question: "Como funciona o suporte?",
                answer: "Você terá acesso a um grupo exclusivo no WhatsApp para tirar dúvidas."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-pink-100">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">FC</span>
                </div>
                <span className="text-xl font-bold">Faby Cardoso</span>
              </div>
              <p className="text-gray-400">
                Especializando manicures em todo o Brasil com técnicas profissionais de cutilagem.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span className="text-gray-400">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span className="text-gray-400">contato@fabycardoso.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-gray-400">São Paulo, SP</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <div className="space-y-2">
                <div><a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a></div>
                <div><a href="#" className="text-gray-400 hover:text-white">Suporte</a></div>
              </div>
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
