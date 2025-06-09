
import { Button } from "@/components/ui/button";

interface HeaderProps {
  activeCategory: 'fisicos' | 'digitais';
  onCategoryChange: (category: 'fisicos' | 'digitais') => void;
}

const Header = ({ activeCategory, onCategoryChange }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Vitrine de Promoções
          </h1>
          <p className="text-muted-foreground">
            Catálogo de produtos afiliados com as melhores ofertas
          </p>
        </div>
        
        <nav className="flex justify-center space-x-4">
          <Button
            variant={activeCategory === 'fisicos' ? 'default' : 'outline'}
            onClick={() => onCategoryChange('fisicos')}
            className="px-6 py-2"
          >
            Produtos Físicos
          </Button>
          <Button
            variant={activeCategory === 'digitais' ? 'default' : 'outline'}
            onClick={() => onCategoryChange('digitais')}
            className="px-6 py-2"
          >
            Produtos Digitais
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
