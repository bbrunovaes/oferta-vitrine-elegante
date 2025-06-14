import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star, Users, Clock, Award, Phone, Mail, MapPin, Home, Timer, PlayCircle, BookOpen, TrendingUp, Database, BarChart3, Globe, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PowerBILanding = () => {
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

  const courseModules = [
    {
      number: "01",
      title: "Introdução",
      icon: <PlayCircle className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Abertura (Ler Descrição)",
        "Como funcionará o curso?"
      ]
    },
    {
      number: "02", 
      title: "Demonstração do Power BI",
      icon: <BarChart3 className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Demonstração de Análise do Dashboard do Power BI",
        "Explicando Indicadores e KPI's",
        "Ícones, Templates e Dashboards"
      ]
    },
    {
      number: "03",
      title: "Instalação e Registro do Power BI", 
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Instalação do Power BI"
      ]
    },
    {
      number: "04",
      title: "Importação e Tratamento da Base",
      icon: <Database className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Relatórios, Dados e Modelo",
        "Importando e Tratando Base de Dados do Excel (Base disponível em material)",
        "Tabela de Calendário (Fórmulas DAX para datas) (Ler Descrição)",
        "Criando Relações entre Tabelas"
      ]
    },
    {
      number: "05",
      title: "Criando Dashboards",
      icon: <TrendingUp className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Temas e Formatação da Página (Ler Descrição e Baixar Apostila)",
        "Segmentação de Dados, Listas e Treemap",
        "KPI's - Comparação Anual Usando Medida e Fórmula Dax",
        "Cartões - Dominando Filtros",
        "Gráfico de Cascata, Pizza com recurso DrillDown",
        "Gráfico de Colunas Clusterizado com Drill Down",
        "Gráfico de Faixa de Opções com Dica Ferramenta, Barras Clusterizado e Mapas",
        "Configurando Botão de Remover Todos Filtros",
        "Editando Interações",
        "Títulos Dinâmicos",
        "Curso POWER APPS Expert na Prática!"
      ]
    },
    {
      number: "06",
      title: "Atualização da Base de Dados",
      icon: <Clock className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Atualizando Bases de Dados",
        "Atualizando Bases de Dados (Método 2) (Bases para baixar no material)",
        "Configuração da Fonte de Dados do Power BI"
      ]
    },
    {
      number: "07",
      title: "Publicando Dashboard Online",
      icon: <Globe className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Criando Conta Licenciada no Power BI",
        "Logando no Power BI Online",
        "Publicando Dashboard Online (Método Novo)",
        "Desativando Compartilhamento Online",
        "Exportando Dashboard para o Power Point",
        "Curso Macros + VBA para Excel | Do Zero ao Avançado"
      ]
    },
    {
      number: "08",
      title: "Extra: Dashboard Mercado Financeiro",
      icon: <TrendingUp className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Introdução e Demonstração da Dashboard (Ler descrição e extra)",
        "Estabelecendo Conexão de Dados da Web",
        "Formatação Condicional Exclusivas para Tabela e Matriz",
        "Google Finance e Conexão com Google Drive",
        "Scroller, Imagens e Remoção de Filtros",
        "Sincronização da Segmentação de Dados",
        "Publicação e Compartilhamento Online"
      ]
    },
    {
      number: "09",
      title: "Mais sobre Fórmulas, Colunas Calculadas e Medidas",
      icon: <BookOpen className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Colunas Calculadas e Medidas",
        "Fórmulas (CALCULATE, SUM e AVERAGE)",
        "Fórmulas (COUNT, MÁX e MÍN)"
      ]
    },
    {
      number: "10",
      title: "Certificado de Conclusão e Bônus",
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Obtendo o Certificado de Conclusão (Ler Descrição)",
        "Sites geradores de base de dados",
        "Paleta de cores e Imagens",
        "Curso POWER APPS Expert na Prática!"
      ]
    },
    {
      number: "11",
      title: "(MÓDULO EXTRA +16 Aulas) Acompanhamento e Gestão de Projetos",
      icon: <Gift className="w-6 h-6 text-yellow-500" />,
      lessons: [
        "Apresentação DashBoard (Disponível no material para Download)",
        "Foto do Projeto (Importação do Desktop e da Internet)",
        "Tabela Calendário (Criação Alternativa)",
        "Gráfico Planejado x Real (Atualização Base de Dados)",
        "Curva S",
        "Curva S - Colunas com Datas Distintas",
        "Importação, Tratamento de Base e Calendário",
        "Explicação: Base com Colunas e Datas Distintas",
        "Relação Distinta da Tabela Calendário (USERELATIONSHIP)",
        "Expansão por Categoria/Hierarquia",
        "Expandir por Semanas",
        "Indicadores KPIs",
        "Mapas/Localização Satélite",
        "Gráfico de Cascata",
        "Matriz Etapas e Indicadores",
        "Gráfico de Gantt"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-50">
      {/* Home Button */}
      <div className="container mx-auto px-4 pt-4">
        <Button 
          onClick={handleHomeClick}
          variant="outline"
          className="mb-4 flex items-center gap-2 hover:bg-yellow-50 border-yellow-300"
        >
          <Home className="w-4 h-4" />
          Voltar ao Início
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-yellow-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-yellow-900/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              {/* Dynamic Gradient Logo */}
              <div className="mb-8">
                <div className="inline-block p-4 rounded-full bg-gradient-to-r from-yellow-400/20 to-white/10 backdrop-blur-sm border border-yellow-400/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-black">PBI</span>
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
                  <span className="text-xl font-bold">5.0</span>
                </div>
                <p className="text-yellow-200">+10.000 alunos transformados</p>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                POWER BI Expert
                <span className="block text-yellow-400">na Prática | 2025</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Transforme dados em insights poderosos e torne-se um especialista em Business Intelligence mais requisitado do mercado
              </p>

              {/* Timer Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 border border-yellow-400/30">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Timer className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Oferta Especial Termina em:</span>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-white/20 rounded-lg px-3 py-2">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-yellow-200 mt-1">Horas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-white/20 rounded-lg px-3 py-2">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-yellow-200 mt-1">Min</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-white/20 rounded-lg px-3 py-2">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-sm text-yellow-200 mt-1">Seg</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                <Button 
                  onClick={handleCTAClick}
                  size="lg" 
                  className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6 font-bold"
                >
                  Quero me Tornar Expert Agora
                </Button>
                <div className="text-center">
                  <div className="text-7xl font-black text-yellow-400 animate-pulse mb-2 drop-shadow-lg">R$ 297</div>
                  <div className="text-xl font-bold text-yellow-300 animate-pulse mb-1">em até 12x de R$29,03 no cartão</div>
                  <div className="text-xl font-bold text-yellow-300 animate-pulse">Ou à vista no Boleto e Pix</div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                alt="Power BI Dashboard - Business Intelligence" 
                className="rounded-2xl shadow-2xl border border-yellow-400/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que você vai aprender
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              11 módulos completos com mais de 80 aulas práticas para dominar o Power BI
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {courseModules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`} className="border border-yellow-200 rounded-lg">
                  <AccordionTrigger className="text-left font-semibold text-lg text-gray-800 hover:no-underline hover:text-yellow-600 px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full text-black font-bold">
                        {module.number}
                      </div>
                      <div className="flex items-center gap-3">
                        {module.icon}
                        <span>{module.title}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="space-y-2 ml-16">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center gap-3 py-2">
                          <PlayCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-700">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Benefícios do Curso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aproveite as aulas práticas e obtenha um certificado de conclusão
            </p>
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

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Depoimentos de Sucesso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja como nossos alunos transformaram suas carreiras
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                role: "Analista de Dados",
                content: "Consegui uma promoção após dominar o Power BI. O curso é muito prático e direto ao ponto!",
                rating: 5
              },
              {
                name: "Ana Santos",
                role: "Consultora BI",
                content: "Excelente conteúdo! Agora consigo criar dashboards profissionais para meus clientes.",
                rating: 5
              },
              {
                name: "Roberto Lima",
                role: "Gerente Comercial",
                content: "Transformei a forma como analiso vendas na empresa. Recomendo para todos!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-yellow-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-yellow-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Investimento que Transforma sua Carreira
          </h2>
          
          <Card className="max-w-md mx-auto bg-white text-gray-800 border-0 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="text-8xl font-black text-yellow-500 animate-bounce mb-3 drop-shadow-xl">R$ 297</div>
                <div className="text-2xl font-bold text-yellow-600 animate-pulse mb-2">em até 12x de R$29,03 no cartão</div>
                <div className="text-2xl font-bold text-yellow-600 animate-pulse mb-6">Ou à vista no Boleto e Pix</div>
                <div className="text-green-600 font-semibold mb-6">Economize 80%</div>
                
                <div className="space-y-3 mb-8">
                  {[
                    "Acesso vitalício ao curso",
                    "+80 aulas práticas",
                    "Certificado de conclusão",
                    "Bases de dados para prática",
                    "Suporte exclusivo",
                    "Atualizações gratuitas",
                    "Grupo VIP de alunos"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-yellow-500" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={handleCTAClick}
                  size="lg" 
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-lg py-6 font-bold"
                >
                  Quero me Tornar Expert Agora
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
                  question: "Preciso de conhecimento prévio em Power BI?",
                  answer: "Não! O curso foi desenvolvido para iniciantes e também para quem já tem alguma experiência. Começamos do zero e evoluímos até técnicas avançadas."
                },
                {
                  question: "O Power BI é gratuito?",
                  answer: "Sim! O Power BI Desktop é totalmente gratuito. Você pode baixar e usar todas as funcionalidades que ensinamos no curso sem custo adicional."
                },
                {
                  question: "Quanto tempo tenho para acessar o curso?",
                  answer: "O acesso é vitalício! Você pode assistir as aulas quantas vezes quiser e no seu próprio ritmo, sem pressa."
                },
                {
                  question: "Recebo certificado ao final?",
                  answer: "Sim! Ao concluir todas as aulas, você receberá um certificado de conclusão que pode ser adicionado ao seu LinkedIn e currículo."
                },
                {
                  question: "Existe suporte durante o curso?",
                  answer: "Claro! Você terá acesso a suporte exclusivo para tirar suas dúvidas e um grupo VIP com outros alunos para networking."
                },
                {
                  question: "Posso usar em qualquer dispositivo?",
                  answer: "Sim! O curso pode ser acessado de qualquer dispositivo: computador, tablet ou celular, a qualquer hora e lugar."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-yellow-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg text-gray-800 hover:no-underline hover:text-yellow-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-black">PBI</span>
              </div>
              <span className="text-xl font-bold">Power BI Expert na Prática</span>
            </div>
            <p className="text-gray-400 mb-8">
              Transformando profissionais em especialistas em Business Intelligence desde 2020.
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
              © 2024 Power BI Expert na Prática. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PowerBILanding;
