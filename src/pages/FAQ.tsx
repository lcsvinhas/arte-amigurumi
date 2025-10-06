import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como faço para comprar um amigurumi?",
      answer: "É muito simples! Basta clicar no botão 'Comprar via WhatsApp' do produto que você gostou, e você será redirecionado para uma conversa comigo no WhatsApp. Lá podemos conversar sobre detalhes, cores e finalizar seu pedido."
    },
    {
      question: "Posso encomendar um amigurumi personalizado?",
      answer: "Sim! Aceito encomendas personalizadas. Entre em contato via WhatsApp com a sua ideia e faremos um orçamento especial para você."
    },
    {
      question: "Quais materiais são utilizados?",
      answer: "Utilizo apenas fios 100% algodão de alta qualidade e enchimento de fibra siliconada antialérgica. Todos os materiais são seguros e podem ser utilizados por crianças."
    },
    {
      question: "Os amigurumis podem ser lavados?",
      answer: "Sim! Recomendo lavar à mão com sabão neutro e água fria. Não torcer, apenas apertar delicadamente para retirar o excesso de água e secar à sombra."
    },
    {
      question: "Vocês fazem entregas?",
      answer: "Sim! Fazemos entregas para todo o Brasil via Correios. O valor do frete é calculado de acordo com o CEP de destino."
    },
    {
      question: "Qual o tamanho médio dos amigurumis?",
      answer: "A maioria dos meus amigurumis tem entre 15 e 30 cm de altura, mas posso fazer em diversos tamanhos sob encomenda."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceito pagamento via PIX, transferência bancária ou depósito. Para encomendas, cobramos sinal de 50%."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Perguntas Frequentes
        </h1>
        
        <p className="text-lg text-muted-foreground mb-12">
          Aqui você encontra respostas para as dúvidas mais comuns. Se não encontrar o que procura, entre em contato!
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gradient-to-br from-card to-muted/50 rounded-2xl px-6 border border-border shadow-[var(--shadow-soft)]"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
