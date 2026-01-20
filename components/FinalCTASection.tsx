'use client'

import { Flame, Zap, ShieldCheck, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';
import { useCheckout } from '@/hooks/useCheckout';
import { motion } from 'framer-motion';

export const FinalCTASection = () => {
  const { handleCheckout } = useCheckout();

  return (
    <section className="py-20 px-4 bg-ember-radial">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Seja uma <span className="gradient-text-ember">Brasa Viva</span>
          <br />
          do Altar
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-muted-foreground mb-4"
        >
          Este é o seu chamado. Este é o seu tempo.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-foreground mb-8"
        >
          Junte-se ao exército que está sendo levantado para incendiar corações.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-6 py-3 mb-8"
        >
          <Zap className="w-5 h-5 text-accent" />
          <span className="text-accent font-semibold">Últimas vagas com esse valor:</span>
          <CountdownTimer />
        </motion.div>

        <div className="mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={() => handleCheckout({ plan: 'monthly', price: 37 })}
              size="lg"
              className="gradient-ember text-white font-bold text-xl px-12 py-8 rounded-2xl glow-ember"
            >
              <Flame className="w-6 h-6 mr-2" />
              Entrar Agora — R$ 37/mês
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>Protegido por garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-green-500" />
            <span>Pagamento 100% seguro</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
