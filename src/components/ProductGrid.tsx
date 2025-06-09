
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
  // Produtos Físicos
  {
    id: '1',
    title: 'Smartphone Premium',
    description: 'Smartphone de última geração com câmera profissional e bateria de longa duração.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    affiliateLink: '#',
    price: 'R$ 1.299,99',
    category: 'fisicos'
  },
  {
    id: '2', 
    title: 'Notebook Gamer',
    description: 'Notebook para jogos com placa de vídeo dedicada e processador de alta performance.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop',
    affiliateLink: '#',
    price: 'R$ 2.899,99',
    category: 'fisicos'
  },
  {
    id: '3',
    title: 'Fones Bluetooth',
    description: 'Fones de ouvido wireless com cancelamento de ruído e qualidade de áudio superior.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    affiliateLink: '#',
    price: 'R$ 299,99',
    category: 'fisicos'
  },
  {
    id: '4',
    title: 'Smartwatch Fitness',
    description: 'Relógio inteligente com monitoramento de saúde e GPS integrado.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
    affiliateLink: '#',
    price: 'R$ 599,99',
    category: 'fisicos'
  },
  // Produtos Digitais
  {
    id: '5',
    title: 'Curso de Cutilagem para Manicures com Faby Cardoso',
    description: 'Aprenda técnicas profissionais de cutilagem com uma das maiores especialistas do Brasil.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop',
    affiliateLink: '#',
    price: 'R$ 197,00',
    category: 'digitais'
  },
  {
    id: '6',
    title: 'Curso de Marketing Digital',
    description: 'Domine as estratégias de marketing digital e aumente suas vendas online.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    affiliateLink: '#',
    price: 'R$ 297,00',
    category: 'digitais'
  },
  {
    id: '7',
    title: 'E-book de Receitas Fitness',
    description: 'Mais de 100 receitas saudáveis para manter a forma sem abrir mão do sabor.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
    affiliateLink: '#',
    price: 'R$ 47,00',
    category: 'digitais'
  },
  {
    id: '8',
    title: 'Curso de Programação Web',
    description: 'Aprenda a criar sites profissionais do zero com HTML, CSS e JavaScript.',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
    affiliateLink: '#',
    price: 'R$ 497,00',
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
