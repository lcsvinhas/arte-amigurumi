import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contato = () => {
  const whatsappUrl = "https://wa.me/5521990607878?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20amigurumis.";

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Entre em Contato
        </h1>
        
        <p className="text-lg text-muted-foreground mb-12">
          Tem alguma dúvida ou quer fazer um pedido personalizado? Estou aqui para ajudar!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-card to-muted/50 border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <MessageCircle className="h-6 w-6 text-primary" />
                WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                A forma mais rápida de me contatar e fazer seu pedido!
              </p>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Abrir WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-muted/50 border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <Instagram className="h-6 w-6 text-accent" />
                Instagram
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground mb-4 flex-1">
                Acompanhe minhas criações e novidades!
              </p>
              <Button
                variant="outline"
                className="w-full border-accent text-accent hover:bg-accent/10 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm"
                asChild
              >
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-1 sm:mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="truncate">Seguir no Instagram</span>
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-muted/50 border-border shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <Mail className="h-6 w-6 text-secondary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground break-words text-sm sm:text-base">
                bvinhas.bv@gmail.com
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-muted/50 border-border shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <MapPin className="h-6 w-6 text-primary" />
                Localização
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Teresópolis, RJ - Brasil
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contato;
