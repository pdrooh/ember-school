'use client'

import { motion } from 'framer-motion';
import { CountdownTimer } from './CountdownTimer';
import { Button } from '@/components/ui/button';
import { Flame, Users, Star, Award } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const HeroSection = () => {
  const handleCTAClick = (plan: 'monthly' | 'lifetime') => {
    // Aqui você pode integrar com seu sistema de checkout
    console.log('Checkout:', plan);
    // Exemplo: window.location.href = `https://checkout.com/${plan}`;
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background effects */}
      <motion.div
        className="absolute inset-0 bg-ember-radial"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-ember-radial opacity-50"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Countdown banner */}
        <motion.div
          className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-8"
          variants={itemVariants}
        >
          <span className="text-muted-foreground text-sm">Oferta especial termina em:</span>
          <CountdownTimer />
        </motion.div>

        {/* Scripture reference */}
        <motion.p
          className="text-muted-foreground text-sm mb-4"
          variants={itemVariants}
        >
          Jeremias 20:9
        </motion.p>

        {/* Main headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
          variants={itemVariants}
        >
          <span className="text-foreground">EMBER SCHOOL</span>
          <br />
          <span className="text-foreground">Transforme-se em uma</span>
          <br />
          <motion.span
            className="gradient-text-ember inline-block"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            Brasa Viva do Altar
          </motion.span>
          <motion.span
            className="ml-2 inline-block"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🔥
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-foreground font-medium mb-2"
          variants={itemVariants}
        >
          8 semanas para ativar sua identidade em Cristo
        </motion.p>
        <motion.p
          className="text-lg text-muted-foreground mb-8"
          variants={itemVariants}
        >
          + Acompanhamento pastoral exclusivo
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center gap-2 text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users className="w-5 h-5 text-accent" />
            <span className="font-semibold">+500</span>
            <span>alunos transformados</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Star className="w-5 h-5 text-accent fill-accent" />
            <span className="font-semibold">4.9/5</span>
            <span>avaliação média</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Award className="w-5 h-5 text-accent" />
            <span>Certificado incluso</span>
          </motion.div>
        </motion.div>

        {/* Scripture quote */}
        <motion.blockquote
          className="max-w-2xl mx-auto mb-8 p-6 card-ember rounded-2xl"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-muted-foreground italic text-lg leading-relaxed">
            "Mas, se eu digo: 'Não o mencionarei nem mais falarei em seu nome', é como se um fogo ardesse em meu coração, um fogo dentro de mim. Estou exausto tentando contê-lo; já não posso mais!"
          </p>
          <cite className="block mt-4 text-accent font-semibold not-italic">— Jeremias 20:9</cite>
        </motion.blockquote>

        {/* Module info */}
        <motion.p
          className="text-muted-foreground mb-6"
          variants={itemVariants}
        >
          1 módulo liberado por semana • Comece agora mesmo
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="gradient-ember text-white font-bold text-lg px-8 py-6 rounded-xl glow-ember"
              onClick={() => handleCTAClick('monthly')}
            >
              <Flame className="w-5 h-5 mr-2" />
              Quero Ser Uma Brasa — R$ 37/mês
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground font-semibold text-lg px-8 py-6 rounded-xl hover:bg-secondary"
              onClick={() => handleCTAClick('lifetime')}
            >
              Ver Plano Vitalício — R$ 197
            </Button>
          </motion.div>
        </motion.div>

        {/* Guarantee text */}
        <motion.p
          className="text-muted-foreground text-sm"
          variants={itemVariants}
        >
          Garantia de 7 dias • Cancele quando quiser
        </motion.p>
      </motion.div>
    </section>
  );
};
