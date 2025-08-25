import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
const Index = () => {
const Header = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
      <Header />
      <main>
        <ProductGrid />
      </main>
    </div>
    <header className="bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-2 tracking-tight">
            Promos Pro
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Index;
export default Header;
