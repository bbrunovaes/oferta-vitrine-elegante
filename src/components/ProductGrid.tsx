
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

const products: Product[] = [
  {
    id: '1',
    title: 'The Hidden Reason You Can\'t Lose Weight — And Why It\'s Not Your Fault',
    description: 'Discover why your body is working against you, even when you\'re eating right and exercising correctly.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    affiliateLink: '/metabolism',
    price: 'Free Guide',
    category: 'digitais'
  },
  {
    id: '2',
    title: 'Is Your Body Trying to Tell You Something?',
    description: 'Learn how to naturally support your liver and metabolism without extreme changes. Discover science-backed tips you can start today.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    affiliateLink: '/liver-guide',
    price: 'Free Guide',
    category: 'digitais'
  },
  {
    id: '3',
    title: 'Is Gradual Hearing Loss Sneaking Up on You?',
    description: 'Discover the early signs, hidden causes, and science-backed ways to support healthy hearing naturally.',
    image: 'https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=400&h=300&fit=crop',
    affiliateLink: '/hearing-guide',
    price: 'Free Guide',
    category: 'digitais'
  }
];

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
