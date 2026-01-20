'use client'

import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-20 h-20 rounded-full gradient-ember flex items-center justify-center mx-auto mb-8 glow-ember"
        >
          <Shield className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Garantia Incondicional de 7 Dias
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-muted-foreground leading-relaxed mb-6"
        >
          Experimente a Ember School por 7 dias completos. Se você não sentir que está 
          no caminho certo para transformar sua vida espiritual, devolvemos 100% do seu 
          investimento, sem perguntas, sem burocracia.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg gradient-text-ember font-semibold"
        >
          Isso mostra nossa confiança no poder transformador deste treinamento.
        </motion.p>
      </div>
    </section>
  );
};
