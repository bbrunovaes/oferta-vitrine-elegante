
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
    title: 'Curso de Cutilagem para Manicures com Faby Cardoso',
    description: 'Aprenda técnicas profissionais de cutilagem com uma das maiores especialistas do Brasil.',
    image: 'https://i.imgur.com/VcpbYZV.png',
    affiliateLink: '/curso-cutilagem',
    price: 'R$ 59,00',
    category: 'digitais'
  },
  {
    id: '2',
    title: 'POWER BI Expert na Prática | 2025',
    description: 'Transforme dados em insights poderosos e torne-se um especialista em Business Intelligence mais requisitado do mercado.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
    affiliateLink: '/power-bi-curso',
    price: 'R$ 79,99',
    category: 'digitais'
  },
  {
    id: '3',
    title: 'SB2 Turbo - Emagrecimento Feminino Natural',
    description: 'Suplemento natural que ajuda mulheres a emagrecerem de forma saudável, sem dietas restritivas ou efeitos colaterais.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
    affiliateLink: '/monetizze-landing',
    price: 'A partir de R$ 137,00',
    category: 'fisicos'
  }
];

const ProductGrid = () => {
  const digitalProducts = products.filter(product => product.category === 'digitais');
  const physicalProducts = products.filter(product => product.category === 'fisicos');

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Produtos Digitais Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Produtos Digitais
        </h2>
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
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Produtos Físicos
        </h2>
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
