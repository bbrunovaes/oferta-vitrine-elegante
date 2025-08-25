import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Política de Privacidade / Privacy Policy
          </h1>

          <div className="space-y-8">
            {/* Portuguese Version */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Em Português</h2>
              
              <p className="text-gray-600 mb-6">
                <strong>Última atualização:</strong> 25/08/25
              </p>

              <p className="text-gray-700 mb-6">
                No promospro.com.br, a sua privacidade é prioridade. Este documento descreve como coletamos, usamos e protegemos as suas informações ao navegar em nosso site.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Coleta de Informações</h3>
                  <div className="text-gray-700 space-y-2">
                    <p>Podemos coletar informações como endereço IP, tipo de navegador, dispositivo, páginas visitadas e tempo de permanência.</p>
                    <p>Quando você interage com links de produtos afiliados, parceiros comerciais podem usar cookies ou tecnologias similares para rastrear sua navegação com o objetivo de medir resultados e oferecer ofertas personalizadas.</p>
                    <p>Não coletamos informações pessoais sensíveis (como CPF, dados bancários ou senhas).</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Uso das Informações</h3>
                  <p className="text-gray-700 mb-2">As informações coletadas são utilizadas para:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Melhorar a experiência do usuário no site.</li>
                    <li>Exibir ofertas e promoções relevantes.</li>
                    <li>Medir desempenho de campanhas de afiliados.</li>
                    <li>Cumprir exigências legais, quando necessário.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Cookies e Tecnologias de Rastreamento</h3>
                  <p className="text-gray-700">
                    Utilizamos cookies para melhorar a navegação, entender preferências e personalizar conteúdos. Você pode desativar os cookies no seu navegador, mas isso pode limitar algumas funcionalidades do site.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Compartilhamento de Dados</h3>
                  <div className="text-gray-700 space-y-2">
                    <p>Podemos compartilhar dados de navegação com parceiros de afiliação (como ClickBank, Hotmart, Amazon, entre outros).</p>
                    <p>Nunca vendemos informações pessoais a terceiros.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Direitos do Usuário</h3>
                  <p className="text-gray-700 mb-2">De acordo com a LGPD (Lei Geral de Proteção de Dados), você pode solicitar:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Confirmação de tratamento dos seus dados.</li>
                    <li>Acesso, correção ou exclusão dos dados.</li>
                    <li>Revogação do consentimento para uso de cookies e rastreamento.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Segurança</h3>
                  <p className="text-gray-700">
                    Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não autorizados.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Alterações na Política</h3>
                  <p className="text-gray-700">
                    Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que revise este documento regularmente.
                  </p>
                </div>
              </div>
            </section>

            {/* English Version */}
            <section className="border-t pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">In English</h2>
              
              
              
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> 25/08/25
              </p>

              <p className="text-gray-700 mb-6">
                At promospro.com.br, your privacy is our priority. This document explains how we collect, use, and protect your information while you browse our website.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">1. Information Collection</h4>
                  <div className="text-gray-700 space-y-2">
                    <p>We may collect data such as IP address, browser type, device information, visited pages, and session duration.</p>
                    <p>When you interact with affiliate links, our business partners may use cookies or similar technologies to track your navigation in order to measure results and provide personalized offers.</p>
                    <p>We do not collect sensitive personal data (such as social security numbers, bank details, or passwords).</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">2. Use of Information</h4>
                  <p className="text-gray-700 mb-2">The collected information may be used to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Improve user experience on the website.</li>
                    <li>Display relevant offers and promotions.</li>
                    <li>Measure affiliate campaign performance.</li>
                    <li>Comply with legal obligations when required.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">3. Cookies and Tracking Technologies</h4>
                  <p className="text-gray-700">
                    We use cookies to enhance navigation, understand preferences, and personalize content. You can disable cookies in your browser, but some website features may not work properly.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">4. Data Sharing</h4>
                  <div className="text-gray-700 space-y-2">
                    <p>We may share browsing data with affiliate partners (such as ClickBank, Hotmart, Amazon, among others).</p>
                    <p>We never sell personal data to third parties.</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">5. User Rights</h4>
                  <p className="text-gray-700 mb-2">According to LGPD (Brazilian General Data Protection Law) and GDPR (General Data Protection Regulation – EU), you have the right to:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Request confirmation of data processing.</li>
                    <li>Access, correct, or delete your data.</li>
                    <li>Withdraw consent for cookies and tracking.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">6. Security</h4>
                  <p className="text-gray-700">
                    We implement technical and administrative measures to protect your data against unauthorized access.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">7. Changes to this Policy</h4>
                  <p className="text-gray-700">
                    We may update this Privacy Policy periodically. We recommend reviewing this page regularly.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
