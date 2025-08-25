
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      <Header />
      <main>
        <ProductGrid />
      </main>
      <footer className="py-8 border-t bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <Link to="/privacy-policy">
            <Button variant="outline" size="sm" className="flex items-center gap-2 mx-auto">
              <Shield className="w-4 h-4" />
              Política de Privacidade
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;
