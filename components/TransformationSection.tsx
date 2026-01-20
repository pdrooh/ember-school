'use client'

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const beforeItems = [
  'Vida cristã morna e sem propósito',
  'Identidade frágil e insegura',
  'Distante da presença de Deus',
  'Sem clareza sobre seus dons',
  'Sozinho na jornada espiritual',
];

const afterItems = [
  'Vida cristã vibrante e cheia de propósito',
  'Identidade sólida e confiante em Cristo',
  'Intimidade profunda com o Pai',
  'Dons ativados e operando',
  'Comunidade de apoio constante',
];

export const TransformationSection = () => {
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
            A Transformação Que Te Espera
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Do apagado ao incandescente em 8 semanas
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-ember rounded-2xl p-8 border-l-4 border-l-destructive"
          >
            <h3 className="text-2xl font-bold mb-6 text-destructive">Antes da Ember</h3>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-ember rounded-2xl p-8 border-l-4 border-l-accent glow-ember"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text-ember">Depois da Ember</h3>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Inspirational text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="text-2xl md:text-3xl font-medium leading-relaxed">
            <span className="text-muted-foreground">Este é um sonho que veio</span>
            <br />
            <span className="gradient-text-ember font-bold">do coração de Deus</span>
            <br />
            <span className="text-muted-foreground">para o coração de um homem.</span>
          </p>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Não estamos formando <span className="line-through">alunos</span>.
            <br />
            Estamos formando <span className="text-foreground font-bold">homens e mulheres</span>
            <br />
            que carregam as marcas de Cristo.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Faça parte desse exército que será lançado
            <br />
            como <span className="gradient-text-ember font-semibold">brasas vivas do Altar</span> nas cidades
            <br />
            até que um grande incêndio seja produzido
            <br />
            nos corações de cada filho e filha.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
