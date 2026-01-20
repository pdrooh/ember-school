'use client'

import { CreditCard, BookOpen, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Escolha seu plano',
    description: 'Mensal com acompanhamento completo ou Vitalício apenas com gravados',
    icon: CreditCard,
  },
  {
    number: '02',
    title: 'Jornada individual',
    description: '1 módulo liberado por semana a partir da sua compra. Avance no seu ritmo',
    icon: BookOpen,
  },
  {
    number: '03',
    title: 'Transformação',
    description: '(Mensal) Acompanhamento pastoral + encontros + lives + WhatsApp exclusivo',
    icon: Flame,
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
          >
            Como Funciona
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground"
          >
            Sua jornada em 3 passos simples
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-black gradient-text-ember mb-3 sm:mb-4">
                {step.number}
              </div>
              <div className="card-ember rounded-xl sm:rounded-2xl p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-blue flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
