import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  const faqData = [
    {
      question: "COMO ADQUIRIR O INGRESSO?",
      answer:
        "É possível adquirir o ingresso somente no local, no dia da visita.",
    },
    {
      question: "QUAIS SÃO AS FORMAS DE PAGAMENTO?",
      answer:
        "Cartão e dinheiro. Pagamento com cartão tem valor maior (alguns centavos a mais) por conta da taxa da maquininha.",
    },
    {
      question: "COMO FUNCIONAM AS RESERVAS DE GRUPOS ESCOLARES E PCD?",
      answer:
        "Necessário entrar em contato pelo email museuaquario@campinas.sp.gov.br",
    },
    {
      question: "O MUSEU POSSUI INFRAESTRUTURA COM ACESSIBILIDADE?",
      answer:
        "Sim, há rampas e espaços abertos para circulação, além do áudio da visita guiada com elementos de audiodescrição.",
    },
    {
      question: "HÁ BANHEIROS DISPONÍVEIS?",
      answer:
        "O museu não possui banheiros internos, mas você encontrará banheiros amplos (masculino e feminino) no bosque, em frente ao parquinho de areia. Há também fraldário e banheiro acessível para pessoas com deficiência.",
    },
    {
      question:
        "COM UM INGRESSO, POSSO VISITAR TAMBÉM O AQUÁRIO E SERPENTÁRIO?",
      answer:
        "Sim, o ingresso é único e permite acesso ao museu, aquário e serpentário.",
    },
  ];

  return (
    <div className="w-full mx-auto">
      <h2 className="text-2xl font-semibold text-[#e76f51] mb-4">
        Perguntas Frequentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="flex justify-between items-center w-full p-4 font-medium text-left text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="p-4 text-gray-600 bg-white">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
