
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Star, Users, Clock, Award, TrendingUp, BarChart3, Database, PieChart } from "lucide-react";

const PowerBILanding = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-yellow-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              {/* Dynamic Gradient Logo */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <BarChart3 className="w-12 h-12 text-black mr-3" />
                  <div className="text-black">
                    <div className="text-2xl font-bold">POWER BI</div>
                    <div className="text-sm font-medium">EXPERT 2025</div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                POWER BI
                <span className="block text-yellow-400">Expert na Prática</span>
                <span className="block text-3xl lg:text-4xl text-gray-300">2025</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
                Transforme dados em insights poderosos e torne-se um especialista em Business Intelligence mais requisitado do mercado
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="text-xl px-8 py-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection('pricing')}
                >
                  QUERO ME INSCREVER AGORA
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-xl px-8 py-6 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                  onClick={() => scrollToSection('details')}
                >
                  Ver Detalhes do Curso
                </Button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-yellow-400" />
                  <span>+5.000 alunos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9/5 estrelas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span>Certificado incluso</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                  alt="Power BI Dashboard"
                  className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-xl shadow-xl">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Prático</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section id="details" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              O que você vai <span className="text-yellow-600">aprender</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um curso completo e prático para dominar o Power BI do básico ao avançado
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                alt="Power BI Learning"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-2 rounded-lg">
                  <Database className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Conectividade de Dados</h3>
                  <p className="text-gray-600">Aprenda a conectar e importar dados de diversas fontes como Excel, SQL Server, APIs e muito mais.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-2 rounded-lg">
                  <PieChart className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visualizações Avançadas</h3>
                  <p className="text-gray-600">Crie dashboards interativos e relatórios profissionais que impressionam e geram resultados.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">DAX Avançado</h3>
                  <p className="text-gray-600">Domine as fórmulas DAX para criar medidas e cálculos complexos que transformam dados em insights.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Horas de Conteúdo' },
              { number: '200+', label: 'Exercícios Práticos' },
              { number: '15+', label: 'Projetos Reais' },
              { number: '1 Ano', label: 'Acesso Completo' }
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Módulos do <span className="text-yellow-600">Curso</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                module: 'Módulo 1',
                title: 'Fundamentos do Power BI',
                lessons: 12,
                duration: '6 horas',
                topics: ['Interface e navegação', 'Primeiros relatórios', 'Importação de dados', 'Visualizações básicas']
              },
              {
                module: 'Módulo 2',
                title: 'Modelagem de Dados',
                lessons: 15,
                duration: '8 horas',
                topics: ['Relacionamentos', 'Transformação de dados', 'Power Query avançado', 'Otimização de modelos']
              },
              {
                module: 'Módulo 3',
                title: 'DAX - Linguagem de Fórmulas',
                lessons: 18,
                duration: '10 horas',
                topics: ['Funções básicas', 'Medidas calculadas', 'Tabelas calculadas', 'DAX avançado']
              },
              {
                module: 'Módulo 4',
                title: 'Visualizações Avançadas',
                lessons: 14,
                duration: '7 horas',
                topics: ['Gráficos personalizados', 'Mapas e geolocalização', 'Dashboards interativos', 'Storytelling com dados']
              },
              {
                module: 'Módulo 5',
                title: 'Power BI Service',
                lessons: 10,
                duration: '5 horas',
                topics: ['Publicação na nuvem', 'Compartilhamento', 'Workspaces', 'Segurança e permissões']
              },
              {
                module: 'Módulo 6',
                title: 'Projetos Práticos',
                lessons: 8,
                duration: '14 horas',
                topics: ['Dashboard financeiro', 'Análise de vendas', 'RH Analytics', 'Projeto final']
              }
            ].map((module, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-yellow-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-yellow-500 text-black">{module.module}</Badge>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </span>
                      <span>{module.lessons} aulas</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-600" />
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              O que nossos <span className="text-yellow-600">alunos dizem</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Silva',
                role: 'Analista de Dados',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b36771b0?w=100&h=100&fit=crop&crop=face',
                text: 'Curso incrível! Consegui uma promoção depois de aplicar tudo que aprendi. O conteúdo é muito prático e direto ao ponto.'
              },
              {
                name: 'João Santos',
                role: 'Gerente Comercial',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
                text: 'Transformou completamente a forma como apresento dados para a diretoria. Dashboards profissionais que impressionam!'
              },
              {
                name: 'Ana Costa',
                role: 'Consultora BI',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
                text: 'Melhor investimento que fiz na carreira. Hoje trabalho como consultora freelancer e ganho 3x mais.'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 border-yellow-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Invista no seu <span className="text-yellow-400">futuro</span>
            </h2>
            <p className="text-xl text-gray-300">
              Uma oportunidade única para transformar sua carreira
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="border-4 border-yellow-400 bg-white text-black relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-black text-center py-2 font-bold">
                OFERTA LIMITADA - 70% OFF
              </div>
              <CardContent className="p-8 pt-16">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Power BI Expert na Prática 2025</h3>
                  <div className="mb-6">
                    <span className="text-2xl line-through text-gray-500 mr-4">De R$ 997,00</span>
                    <span className="text-6xl font-bold text-yellow-600">R$ 297</span>
                    <span className="text-xl">,00</span>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    ou 12x de <span className="font-bold text-yellow-600">R$ 29,70</span> sem juros
                  </p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {[
                    '50+ horas de conteúdo em vídeo',
                    '200+ exercícios práticos',
                    '15+ projetos reais',
                    'Certificado de conclusão',
                    'Acesso por 1 ano completo',
                    'Suporte direto com instrutor',
                    'Grupo VIP no WhatsApp',
                    'Bônus: Templates exclusivos',
                    'Garantia de 30 dias'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full text-xl py-6 bg-yellow-600 hover:bg-yellow-700 text-black font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  GARANTIR MINHA VAGA AGORA
                </Button>
                
                <div className="text-center mt-6 text-sm text-gray-600">
                  <p>⚡ Últimas vagas disponíveis</p>
                  <p>🔒 Pagamento 100% seguro</p>
                  <p>✅ Garantia incondicional de 30 dias</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
              Perguntas <span className="text-yellow-600">frequentes</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: 'Preciso ter conhecimento prévio em Power BI?',
                answer: 'Não! O curso foi desenvolvido para iniciantes. Começamos do básico e evoluímos gradualmente até o nível avançado.'
              },
              {
                question: 'Por quanto tempo terei acesso ao curso?',
                answer: 'Você terá acesso completo por 1 ano, podendo assistir quantas vezes quiser e no seu próprio ritmo.'
              },
              {
                question: 'Há suporte para dúvidas?',
                answer: 'Sim! Você terá suporte direto comigo através do grupo VIP no WhatsApp e área de membros.'
              },
              {
                question: 'O curso inclui certificado?',
                answer: 'Sim! Ao concluir o curso, você receberá um certificado de conclusão para adicionar ao seu currículo.'
              },
              {
                question: 'E se eu não gostar do curso?',
                answer: 'Oferecemos garantia incondicional de 30 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-yellow-400 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-black">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4">
                <BarChart3 className="w-8 h-8 text-black mr-2" />
                <div className="text-black">
                  <div className="text-lg font-bold">POWER BI EXPERT</div>
                  <div className="text-sm">2025</div>
                </div>
              </div>
            </div>
            
            <Separator className="bg-gray-800 mb-8" />
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-yellow-400">Contato</h3>
                <p className="text-gray-300">suporte@powerbicurso.com</p>
                <p className="text-gray-300">(11) 99999-9999</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-yellow-400">Curso</h3>
                <p className="text-gray-300">50+ horas de conteúdo</p>
                <p className="text-gray-300">Certificado incluso</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4 text-yellow-400">Garantia</h3>
                <p className="text-gray-300">30 dias sem riscos</p>
                <p className="text-gray-300">Satisfação garantida</p>
              </div>
            </div>
            
            <div className="text-center text-gray-400 text-sm">
              <p>© 2025 Power BI Expert na Prática. Todos os direitos reservados.</p>
              <p className="mt-2">CNPJ: 00.000.000/0001-00</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PowerBILanding;
