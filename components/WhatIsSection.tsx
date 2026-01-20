'use client'

import { Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatIsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16"
        >
          O Que É a Ember School?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-ember rounded-xl sm:rounded-2xl p-6 sm:p-8"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-blue flex items-center justify-center mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Nosso Objetivo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ativar corações para uma vida de relacionamento constante e profundo com Deus. 
              Queremos que você desfrute plenamente da sua verdadeira identidade espiritual 
              e ande no poder do Espírito Santo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-ember rounded-xl sm:rounded-2xl p-6 sm:p-8"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-ember flex items-center justify-center mb-4 sm:mb-6">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Nossa Convicção</h3>
            <p className="text-muted-foreground leading-relaxed">
              Entendemos que os dons do Espírito Santo são ferramentas dadas para 
              reconectarmos a humanidade com o Deus-Pai. Estamos comprometidos em 
              ser voz de Deus na sua vida.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
