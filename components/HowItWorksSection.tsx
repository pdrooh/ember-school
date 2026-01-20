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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Como Funciona
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Sua jornada em 3 passos simples
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="text-6xl font-black gradient-text-ember mb-4">
                {step.number}
              </div>
              <div className="card-ember rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
