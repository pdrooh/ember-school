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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 overflow-hidden">
      {/* Background effects - Responsivo */}
      <motion.div
        className="absolute inset-0 bg-ember-radial"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full sm:w-[600px] md:w-[800px] h-[400px] sm:h-[500px] md:h-[600px] bg-ember-radial opacity-50"
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
        className="relative z-10 max-w-4xl mx-auto text-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Countdown banner - Responsivo */}
        <motion.div
          className="inline-flex flex-wrap items-center justify-center gap-2 bg-secondary/50 border border-border rounded-full px-3 sm:px-4 py-2 mb-6 sm:mb-8 text-xs sm:text-sm"
          variants={itemVariants}
        >
          <span className="text-muted-foreground">Oferta especial termina em:</span>
          <CountdownTimer />
        </motion.div>

        {/* Scripture reference */}
        <motion.p
          className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4"
          variants={itemVariants}
        >
          Jeremias 20:9
        </motion.p>

        {/* Main headline - Responsivo */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 leading-tight px-2"
          variants={itemVariants}
        >
          <span className="text-foreground block">EMBER SCHOOL</span>
          <span className="text-foreground block mt-1 sm:mt-2">Transforme-se em uma</span>
          <motion.span
            className="gradient-text-ember inline-block mt-1 sm:mt-2"
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
            className="ml-1 sm:ml-2 inline-block"
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

        {/* Subheadline - Responsivo */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-medium mb-2 px-2"
          variants={itemVariants}
        >
          8 semanas para ativar sua identidade em Cristo
        </motion.p>
        <motion.p
          className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 px-2"
          variants={itemVariants}
        >
          + Acompanhamento pastoral exclusivo
        </motion.p>

        {/* Stats - Responsivo */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 px-2"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
            <span className="font-semibold">+500</span>
            <span className="hidden sm:inline">alunos transformados</span>
            <span className="sm:hidden">alunos</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-accent flex-shrink-0" />
            <span className="font-semibold">4.9/5</span>
            <span className="hidden sm:inline">avaliação média</span>
            <span className="sm:hidden">avaliação</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
            <span className="hidden sm:inline">Certificado incluso</span>
            <span className="sm:hidden">Certificado</span>
          </motion.div>
        </motion.div>

        {/* Scripture quote - Responsivo */}
        <motion.blockquote
          className="max-w-2xl mx-auto mb-6 sm:mb-8 p-4 sm:p-6 card-ember rounded-xl sm:rounded-2xl"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-muted-foreground italic text-sm sm:text-base md:text-lg leading-relaxed">
            "Mas, se eu digo: 'Não o mencionarei nem mais falarei em seu nome', é como se um fogo ardesse em meu coração, um fogo dentro de mim. Estou exausto tentando contê-lo; já não posso mais!"
          </p>
          <cite className="block mt-3 sm:mt-4 text-accent font-semibold not-italic text-xs sm:text-sm">— Jeremias 20:9</cite>
        </motion.blockquote>

        {/* Module info */}
        <motion.p
          className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6 px-2"
          variants={itemVariants}
        >
          1 módulo liberado por semana • Comece agora mesmo
        </motion.p>

        {/* CTA Buttons - Responsivo */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6 w-full px-2"
          variants={itemVariants}
        >
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto gradient-ember text-white font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl glow-ember"
              onClick={() => handleCTAClick('monthly')}
            >
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
              <span className="whitespace-nowrap text-xs sm:text-sm md:text-base">Quero Ser Uma Brasa</span>
              <span className="hidden md:inline"> — R$ 37/mês</span>
              <span className="md:hidden block text-xs mt-1">R$ 37/mês</span>
            </Button>
          </motion.div>
          <motion.div
            className="w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-border text-foreground font-semibold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl hover:bg-secondary"
              onClick={() => handleCTAClick('lifetime')}
            >
              <span className="text-xs sm:text-sm md:text-base">Ver Plano Vitalício</span>
              <span className="hidden md:inline"> — R$ 197</span>
              <span className="md:hidden block text-xs mt-1">R$ 197</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Guarantee text */}
        <motion.p
          className="text-muted-foreground text-xs sm:text-sm px-2"
          variants={itemVariants}
        >
          Garantia de 7 dias • Cancele quando quiser
        </motion.p>
      </motion.div>
    </section>
  );
};
