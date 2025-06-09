
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  affiliateLink: string;
  price?: string;
}

const ProductCard = ({ title, description, image, affiliateLink, price }: ProductCardProps) => {
  const handleOfferClick = () => {
    window.open(affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border border-border">
      <CardHeader className="p-0">
        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between p-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {description}
          </p>
          {price && (
            <p className="text-primary font-bold text-xl mb-4">
              {price}
            </p>
          )}
        </div>
        <Button 
          onClick={handleOfferClick}
          className="w-full mt-auto"
        >
          Ver Oferta
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
