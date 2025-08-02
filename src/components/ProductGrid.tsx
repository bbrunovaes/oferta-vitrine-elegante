
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  affiliateLink: string;
  price?: string;
  category: 'fisicos' | 'digitais';
}

const products: Product[] = [];

const ProductGrid = () => {
  const digitalProducts = products.filter(product => product.category === 'digitais');
  const physicalProducts = products.filter(product => product.category === 'fisicos');

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Produtos Digitais Section */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {digitalProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              affiliateLink={product.affiliateLink}
              price={product.price}
            />
          ))}
        </div>
      </div>

      {/* Produtos Físicos Section */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {physicalProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              affiliateLink={product.affiliateLink}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
