import { Heart, Sparkles, Target } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Sobre Mim
        </h1>
        
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border">
            <div className="flex items-start gap-4 mb-4">
              <Heart className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Minha História
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Olá! Sou apaixonada pela arte do amigurumi há décadas. Tudo começou como um hobby e se transformou em uma paixão que me permite criar pequenos tesouros feitos à mão com muito amor e carinho.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border">
            <div className="flex items-start gap-4 mb-4">
              <Sparkles className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  O Que Faço
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cada boneco é único. Utilizo materiais de qualidade, garantindo produtos seguros e duráveis. Cada peça é cuidadosamente confeccionada com atenção aos detalhes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-card to-muted/50 rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border">
            <div className="flex items-start gap-4 mb-4">
              <Target className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Minha Missão
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Levar alegria e carinho através de cada criação. Meus amigurumis são perfeitos para presentear pessoas especiais ou decorar ambientes com um toque artesanal e acolhedor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
