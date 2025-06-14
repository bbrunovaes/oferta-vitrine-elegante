import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Star, Users, Clock, Award, Mail, MapPin, Home, Timer, PlayCircle, BookOpen, TrendingUp, Database, BarChart3, Globe, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import PowerBILogo from "@/components/PowerBILogo";

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
    window.open('https://go.hotmart.com/H100100655T?ap=98ba', '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.open('mailto:relacionamento@viscari.com.br', '_blank');
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

  const testimonials = [
    {
      date: "28/03/2025",
      text: "Nota 10! ampliei minha capacidade de análise de dados, criação de dashboards interativos e extração de insights estratégicos para a tomada de decisões! Recomendo mil vezes!",
      name: "Yolanda",
      rating: 5
    },
    {
      date: "14/11/2024", 
      text: "Gostei demais dos cursos de análise de dados! Terminei o Excel e Power BI e agora vou fazer o de Power Apps! Eternamente agradecida por esses conhecimentos repassados.",
      name: "Ana",
      rating: 5
    },
    {
      date: "31/10/2024",
      text: "Excelente! Meus colegas de trabalho aqui da Ambev que recomendaram. Nota 10!",
      name: "Samuel", 
      rating: 5
    },
    {
      date: "17/09/2024",
      text: "Esta foi a melhor metodologia utilizado de todos cursos de Power BI que fiz! Muito obrigado!",
      name: "Bruno",
      rating: 5
    },
    {
      date: "30/07/2024",
      text: "Amei!",
      name: "Paula",
      rating: 5
    },
    {
      date: "23/07/2024",
      text: "Finalizado! Muito feliz com o certificado de conclusão e obrigado aos professores da Viscari pelo curso e material. Sucesso a todos!",
      name: "Victor",
      rating: 5
    },
    {
      date: "17/06/2024",
      text: "Sou analista de RH e este curso foi recomendado pelos meus colegas de trabalho. Estou muito satisfeita, foi o melhor curso de Power BI que já fiz. Excelente didática e metodologia!!",
      name: "Rubia",
      rating: 5
    },
    {
      date: "07/05/2024",
      text: "11/10",
      name: "Marcelo",
      rating: 5
    },
    {
      date: "30/03/2024",
      text: "Fiquei muito satisfeita com o curso, pois me ajudou muito na área em que estou trabalhando e enriqueceu meus conhecimentos. Gostei muito do curso e acredito q ele vai me ajudar bastante na minha vida...",
      name: "Vanessa",
      rating: 5
    },
    {
      date: "25/03/2024",
      text: "Sou analista de pesquisa e desenvolvimento e esse curso com certeza está fazendo toda diferença no meu dia-a-dia!! Muito obrigada! Recomendo demais!",
      name: "Luana",
      rating: 5
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
              {/* New Logo */}
              <div className="mb-8">
                <PowerBILogo />
              </div>

              {/* Rating Section */}
              <div className="mb-6 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xl font-bold">4.7</span>
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
                <div className="flex justify-center gap-4 mb-6">
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
                
                {/* Button aligned with timer */}
                <div className="flex justify-center">
                  <Button 
                    onClick={handleCTAClick}
                    size="lg" 
                    className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-6 font-bold"
                  >
                    Quero me Tornar Expert Agora
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-yellow-400/20">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/m1rThefKPVs"
                  title="Power BI Expert na Prática - Demonstração"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>
              </div>
              
              {/* Price Text Below Video */}
              <div className="text-center mt-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-yellow-400/30 mb-4">
                  <div className="text-lg font-bold text-red-400 animate-pulse">
                    APENAS HOJE, OFERTA ESPECIAL
                  </div>
                </div>
                <div className="text-6xl font-bold text-white">
                  R$ 79,99<br />
                  <span className="text-4xl">em 8x de R$ 11,63* no cartão<br />
                  Ou à vista no Boleto e Pix</span>
                </div>
              </div>
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
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
              <CardContent className="p-0">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Aprenda todos os recursos do Power BI transformando base de dados em relatórios dinâmicos e Dashboards profissionais na prática. Ganhe reconhecimento e qualificação para o mundo corporativo.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-colors">
              <CardContent className="p-0">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Ao final do curso você obtêm um certificado de conclusão com maestria, tendo a possibilidade de compartilhar no LinkedIn, aumentando suas conexões e network.
                </p>
              </CardContent>
            </Card>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-yellow-200 hover:border-yellow-400 transition-colors shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{testimonial.date}</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">Aluno Certificado</p>
                    </div>
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
          
          <Card className="max-w-lg mx-auto bg-white text-gray-800 border-0 shadow-2xl">
            <CardContent className="p-10">
              <div className="text-center">
                <div className="text-xl font-bold text-red-600 animate-pulse mb-6">APENAS HOJE, OFERTA ESPECIAL</div>
                <div className="text-8xl font-black text-yellow-500 animate-bounce mb-3 drop-shadow-xl">R$ 79,99</div>
                <div className="text-2xl font-bold text-yellow-600 animate-pulse mb-2">em 8x de R$ 11,63* no cartão</div>
                <div className="text-2xl font-bold text-yellow-600 animate-pulse mb-6">Ou à vista no Boleto e Pix</div>
                <div className="text-green-600 font-semibold mb-8">Economize 80%</div>
                
                <div className="space-y-3 mb-8">
                  {[
                    "Garantia de 7 dias",
                    "Certificado de conclusão",
                    "Estude do seu jeito e em qualquer dispositivo",
                    "60 aulas e 30 horas de conteúdo original",
                    "+52600 estudantes",
                    "94% de avaliações positivas"
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
                  question: "Quem avaliou POWER BI Expert na Prática | 2025?",
                  answer: "Todas as avaliações mostradas aqui foram feitas por pessoas reais que compraram e deram sua opinião sobre o curso. Quando alguém compra um curso através da Hotmart, a pessoa recebe um convite para avaliar o conteúdo dele. A nota nesta página é o resultado da média das avaliações feitas por estes compradores, que vai de 1 a 5 estrelas."
                },
                {
                  question: "O que é e como funciona a Nota Média do curso?",
                  answer: "A nota média de POWER BI Expert na Prática | 2025 é de 4.7 estrelas. Depois de cada compra na Hotmart, você tem a oportunidade de avaliar a qualidade do curso e o seu nível de satisfação. Com a opinião dos compradores, nosso sistema calcula a nota média e colhemos os comentários que vão ajudar outras pessoas no momento da decisão de compra."
                },
                {
                  question: "Como funciona o \"Prazo de Garantia\"?",
                  answer: "O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório. Assim que solicitado, seu reembolso é processado automaticamente pela Hotmart em até 5 dias. Para pagamentos com boleto bancário, você precisa preencher uma conta bancária para receber o dinheiro. Passados os 5 dias, o valor poderá ser identificado em sua conta em até 7 dias úteis. Já o estorno da fatura do cartão de crédito varia de acordo com o meio de pagamento e pode ocorrer na fatura atual ou na seguinte."
                },
                {
                  question: "O que é e como funciona o Certificado de Conclusão digital?",
                  answer: "Alguns cursos online oferecem um certificado digital de conclusão. Alunos podem emitir esse certificado ao final do curso ou entrando em contato com o Autor ou Autora. Esses certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares."
                },
                {
                  question: "Quais diferenciais os produtos podem ter?",
                  answer: "Os produtos na Hotmart têm diferenciais que mudam de acordo com o tipo de produto e a disponibilidade. Por exemplo, produtos do tipo \"Cursos online\" podem ou não oferecer certificado digital de conclusão. Caso o certificado esteja disponível, alunos podem emiti-lo dentro do curso ou entrando em contato com o(a) Autor(a). Os certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares. A garantia também é um diferencial dos nossos produtos e pode variar de 7, 15 ou 30 dias, de acordo com o oferecido pelo Autor(a). Para ver os diferenciais disponíveis neste produto, basta checar a seção Diferenciais."
                },
                {
                  question: "Como acesso meu produto?",
                  answer: "Você receberá o acesso a POWER BI Expert na Prática | 2025 por email. Pode ser um curso online, um ebook, uma série de videoaulas, um serviço, evento, etc. O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital. Você também pode acessar o produto comprado fazendo login, acessando o menu lateral \"Minha conta\" e clicando em \"Minhas compras\". Em \"Minhas compras\" estarão todos os produtos que você já comprou!"
                },
                {
                  question: "Tenho interesse neste curso, como posso comprar?",
                  answer: "Para comprar este curso, clique no botão \"Comprar\". Lembre-se de que nem todos os cursos estarão sempre disponíveis para compra. É possível que o Autor ou Autora esteja preparando uma nova turma ainda sem inscrições abertas."
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
            <div className="flex items-center justify-center mb-4">
              <PowerBILogo className="w-auto h-12" />
            </div>
            <p className="text-gray-400 mb-8">
              Transformando profissionais em especialistas em Business Intelligence desde 2020.
            </p>
            
            <div className="mb-8">
              <Button 
                onClick={handleEmailClick}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
              >
                <Mail className="w-5 h-5" />
                Contato por Email
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
