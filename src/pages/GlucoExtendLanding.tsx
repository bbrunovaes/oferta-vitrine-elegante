import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const HearingLanding = () => {
  const [showCookies, setShowCookies] = useState(true);
  useEffect(() => {
    document.title = "Guia de Audição - Imagem em Tela Cheia";
    const desc = "Imagem em tela cheia para o guia de saúde auditiva.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    const href = `${window.location.origin}/hearing-guide`;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", href);
  }, []);

  return (
    <main className="min-h-screen">
      <div className="fixed inset-0">
        <img
          src="https://i.imgur.com/3H55l0K.png"
          alt="Saúde auditiva - imagem em tela cheia do guia de audição"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      {showCookies && (
        <div className="fixed inset-0 z-10 bg-black/80 flex items-center justify-center p-4 cursor-pointer" onClick={() => { window.location.href = "https://671fe9q3he-03lee-ohmzms8nc.hop.clickbank.net"; }} role="link" aria-label="Open external page">
          <div className="bg-card text-foreground rounded-lg shadow-lg p-6 md:p-8 max-w-2xl w-full space-y-6">
            <p className="text-sm md:text-base leading-relaxed">
              We use cookies to improve your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you agree to our use of cookies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowCookies(false)}
                aria-label="Accept cookies"
              >
                Accept
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowCookies(false)}
                aria-label="Decline cookies"
              >
                Decline
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default HearingLanding;
