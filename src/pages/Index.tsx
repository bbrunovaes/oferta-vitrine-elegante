
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      <Header />
      <main>
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;
