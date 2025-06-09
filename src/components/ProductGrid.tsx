
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

interface ProductGridProps {
  category: 'fisicos' | 'digitais';
}

const products: Product[] = [
  {
    id: '1',
    title: 'Curso de Cutilagem para Manicures com Faby Cardoso',
    description: 'Aprenda técnicas profissionais de cutilagem com uma das maiores especialistas do Brasil.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
    affiliateLink: '#',
    price: 'R$ 59,00',
    category: 'digitais'
  }
];

const ProductGrid = ({ category }: ProductGridProps) => {
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
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
    </section>
  );
};

export default ProductGrid;
