'use client'

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const forWhoItems = [
  'Você quer mais intimidade com Deus',
  'Está cansado de uma vida cristã morna',
  'Busca descobrir sua identidade em Cristo',
  'Quer ativar seus dons espirituais',
  'Deseja fazer parte de uma comunidade viva',
  'Está disposto a se comprometer 8 semanas',
  'Quer transformar sua cidade com o fogo de Deus',
];

const notForItems = [
  'Você busca fórmulas mágicas instantâneas',
  'Não está disposto a se dedicar',
  'Quer apenas informação, não transformação',
  'Não acredita no poder do Espírito Santo',
  'Prefere ficar na zona de conforto',
  'Não está aberto a mudanças profundas',
  'Busca apenas mais um curso online',
];

export const ForWhoSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
          >
            A Ember School É Para Você?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground"
          >
            Seja honesto consigo mesmo
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* For Who */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-ember rounded-xl sm:rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="text-xl sm:text-2xl">✅</span>
              Para Quem É
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {forWhoItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-ember rounded-xl sm:rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <span className="text-xl sm:text-2xl">❌</span>
              Não É Para Você Se
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {notForItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
