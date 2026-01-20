'use client'

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Ana Silva',
    initials: 'AS',
    date: 'Aluna desde Janeiro/2024',
    text: 'A Ember School transformou completamente minha forma de enxergar minha identidade em Cristo. Hoje ando em poder e convicção!',
  },
  {
    name: 'Carlos Mendes',
    initials: 'CM',
    date: 'Aluno desde Março/2024',
    text: 'Nunca imaginei que seria possível ter tanta intimidade com Deus. Os encontros online mudaram minha vida de oração.',
  },
  {
    name: 'Júlia Oliveira',
    initials: 'JO',
    date: 'Aluna desde Fevereiro/2024',
    text: 'O acompanhamento pastoral é diferenciado. Sinto que não estou sozinha nessa jornada. Grupo do WhatsApp é incrível!',
  },
];

export const TestimonialsSection = () => {
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
            Vidas Transformadas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground"
          >
            Veja o que nossos alunos dizem
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card-ember rounded-xl sm:rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full gradient-ember flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-foreground text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-accent fill-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic text-sm sm:text-base">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
