import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  size: string;
}

export function ProductCard({ name, price, image, description, size }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de comprar o ${name} por ${price}.`
  );
  const whatsappUrl = `https://wa.me/5521990607878?text=${whatsappMessage}`;

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)] border-border bg-gradient-to-b from-card to-muted/30 flex flex-col h-full">
      <CardContent className="p-0 flex-1 flex flex-col">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
          <p className="text-muted-foreground text-sm mb-2 flex-1">{description}</p>
          <p className="text-sm text-muted-foreground mb-2">Tamanho: {size}</p>
          <p className="text-2xl font-bold text-primary">{price}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 text-xs sm:text-sm"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-1 sm:mr-2 h-4 w-4 flex-shrink-0" />
            <span className="truncate">Comprar via WhatsApp</span>
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
