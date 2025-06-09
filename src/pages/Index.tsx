
import { useState } from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<'fisicos' | 'digitais'>('fisicos');

  return (
    <div className="min-h-screen bg-background">
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
