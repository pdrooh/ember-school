'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Como funciona a liberação semanal do conteúdo?',
    answer: 'A partir do momento da sua compra, um novo módulo é liberado a cada semana. Você terá acesso gradual ao conteúdo, permitindo que você absorva e pratique cada ensinamento antes de avançar para o próximo.',
  },
  {
    question: 'O plano Vitalício inclui acompanhamento, lives e WhatsApp?',
    answer: 'Não. O plano Vitalício inclui apenas o acesso ao conteúdo gravado. Para ter acompanhamento pastoral, participar das lives, encontros online e grupo no WhatsApp, você precisa do Plano Mensal.',
  },
  {
    question: 'O plano Mensal inclui os conteúdos gravados?',
    answer: 'Sim! O plano Mensal inclui tudo: conteúdo gravado liberado semanalmente, acompanhamento com pastor, encontros online, lives exclusivas, grupo no WhatsApp e suporte prioritário.',
  },
  {
    question: 'O que acontece se eu cancelar o plano Mensal?',
    answer: 'Você pode cancelar a qualquer momento. Seu acesso continua até o final do período já pago. Não há multas ou taxas de cancelamento.',
  },
  {
    question: 'Como recebo meu acesso após a compra?',
    answer: 'Imediatamente após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à plataforma. O primeiro módulo já estará disponível para você começar.',
  },
  {
    question: 'Posso assistir as aulas quantas vezes quiser?',
    answer: 'Sim! Você pode assistir e reassistir as aulas quantas vezes precisar, durante todo o período do seu acesso.',
  },
  {
    question: 'Existe alguma garantia?',
    answer: 'Sim! Oferecemos garantia incondicional de 7 dias. Se você não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas.',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
          >
            Perguntas Frequentes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground"
          >
            Tire suas dúvidas antes de começar
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-ember rounded-xl sm:rounded-2xl px-4 sm:px-6 border-none"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
