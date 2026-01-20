'use client'

import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const GuaranteeSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full gradient-ember flex items-center justify-center mx-auto mb-6 sm:mb-8 glow-ember"
        >
          <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
        >
          Garantia Incondicional de 7 Dias
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6"
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
          className="text-sm sm:text-base md:text-lg gradient-text-ember font-semibold"
        >
          Isso mostra nossa confiança no poder transformador deste treinamento.
        </motion.p>
      </div>
    </section>
  );
};
