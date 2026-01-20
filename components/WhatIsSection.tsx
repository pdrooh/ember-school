'use client'

import { Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatIsSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          O Que É a Ember School?
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-ember rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl gradient-blue flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nosso Objetivo</h3>
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
            className="card-ember rounded-2xl p-8"
          >
            <div className="w-14 h-14 rounded-xl gradient-ember flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nossa Convicção</h3>
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
