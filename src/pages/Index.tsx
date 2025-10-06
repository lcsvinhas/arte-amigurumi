import { ProductCard } from "@/components/ProductCard";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import amigurumiBear from "@/assets/amigurumi-bear.jpg";
import amigurumiBunny from "@/assets/amigurumi-bunny.jpg";
import amigurumiElephant from "@/assets/amigurumi-elephant.jpg";
import amigurumiCat from "@/assets/amigurumi-cat.jpg";
import amigurumiUnicorn from "@/assets/amigurumi-unicorn.jpg";
import amigurumiOctopus from "@/assets/amigurumi-octopus.jpg";

const products = [
  {
    name: "Ursinho Fofo",
    price: "R$ 85,00",
    image: amigurumiBear,
    description: "Ursinho de crochê feito com carinho em tons rosados.",
    size: "15cm"
  },
  {
    name: "Coelhinho Saltitante",
    price: "R$ 90,00",
    image: amigurumiBunny,
    description: "Coelho adorável com orelhinhas compridas em lavanda.",
    size: "18cm"
  },
  {
    name: "Elefantinho Feliz",
    price: "R$ 95,00",
    image: amigurumiElephant,
    description: "Elefante charmoso em verde menta suave.",
    size: "16cm"
  },
  {
    name: "Gatinho Travesso",
    price: "R$ 80,00",
    image: amigurumiCat,
    description: "Gatinho super fofo em tons pêssego.",
    size: "14cm"
  },
  {
    name: "Unicórnio Mágico",
    price: "R$ 110,00",
    image: amigurumiUnicorn,
    description: "Unicórnio especial com cores do arco-íris.",
    size: "20cm"
  },
  {
    name: "Polvo Marinho",
    price: "R$ 100,00",
    image: amigurumiOctopus,
    description: "Polvo encantador em azul celeste.",
    size: "17cm"
  }
];

const ITEMS_PER_PAGE = 9;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Bonecos em Amigurumi
            </h1>
            <Sparkles className="h-8 w-8 text-secondary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bonecos de crochê feitos à mão com muito amor e dedicação. Cada peça é única e especial! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              size={product.size}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Pedidos Personalizados
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
              Tem uma ideia especial? Faço amigurumis personalizados nas cores e modelos que você quiser!
            </p>
            <a
              href="https://wa.me/5521990607878?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-[var(--shadow-soft)]"
            >
              Solicitar Personalização
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
