
import { useState } from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<'fisicos' | 'digitais'>('digitais');

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      <Header 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <main>
        <ProductGrid category={activeCategory} />
      </main>
    </div>
  );
};

export default Index;
