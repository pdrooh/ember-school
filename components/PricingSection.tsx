'use client'

import { Check, X, Star, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCheckout } from '@/hooks/useCheckout';
import { motion } from 'framer-motion';

const monthlyFeatures = [
  { text: 'Acompanhamento direto com pastor', included: true },
  { text: 'Encontros online exclusivos', included: true },
  { text: 'Aulas novas constantemente', included: true },
  { text: 'Lives interativas', included: true },
  { text: 'Grupo no WhatsApp exclusivo', included: true },
  { text: 'Conteúdo gravado liberado semanalmente', included: true },
  { text: 'Certificado de conclusão', included: true },
  { text: 'Suporte prioritário', included: true },
];

const lifetimeFeatures = [
  { text: 'Conteúdo gravado liberado semanalmente', included: true },
  { text: 'Acesso vitalício ao material', included: true },
  { text: 'Sem acompanhamento com pastor', included: false },
  { text: 'Sem encontros online', included: false },
  { text: 'Sem lives', included: false },
  { text: 'Sem aulas novas futuras', included: false },
  { text: 'Sem grupo no WhatsApp', included: false },
];

export const PricingSection = () => {
  const { handleCheckout } = useCheckout();

  return (
    <section id="precos" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Escolha Seu Plano
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Comece sua jornada de transformação hoje
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative card-ember rounded-2xl p-8 border-2 border-primary glow-blue"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1 gradient-blue text-white rounded-full px-4 py-1 text-sm font-semibold">
                <Star className="w-4 h-4 fill-white" />
                RECOMENDADO
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2 mt-4">Plano Mensal</h3>
            <div className="mb-4">
              <span className="text-4xl font-black gradient-text-blue">R$ 37</span>
              <span className="text-muted-foreground">/mês</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Transformação completa com acompanhamento
            </p>

            <ul className="space-y-3 mb-8">
              {monthlyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => handleCheckout({ plan: 'monthly', price: 37 })}
              className="w-full gradient-ember text-white font-bold text-lg py-6 rounded-xl glow-ember hover:scale-105 transition-transform"
            >
              <Flame className="w-5 h-5 mr-2" />
              COMEÇAR AGORA
            </Button>
            
            <p className="text-center text-muted-foreground text-sm mt-4">
              Garantia de 7 dias • Cancele quando quiser
            </p>
          </motion.div>

          {/* Lifetime Plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="card-ember rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-2">Plano Vitalício</h3>
            <div className="mb-4">
              <span className="text-4xl font-black">R$ 197</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Pagamento único • Apenas conteúdo gravado
            </p>

            <ul className="space-y-3 mb-8">
              {lifetimeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  )}
                  <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => handleCheckout({ plan: 'lifetime', price: 197 })}
              variant="outline"
              className="w-full font-bold text-lg py-6 rounded-xl"
            >
              COMPRAR VITALÍCIO
            </Button>
            
            <p className="text-center text-muted-foreground text-sm mt-4">
              Ideal para quem prefere autoestudo
            </p>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto card-ember rounded-2xl p-8 overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 font-bold">Recurso</th>
                <th className="text-center py-4 font-bold gradient-text-blue">Mensal</th>
                <th className="text-center py-4 font-bold">Vitalício</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Conteúdo gravado', monthly: true, lifetime: true },
                { name: 'Liberação semanal', monthly: true, lifetime: true },
                { name: 'Acompanhamento pastoral', monthly: true, lifetime: false },
                { name: 'Encontros online', monthly: true, lifetime: false },
                { name: 'Lives exclusivas', monthly: true, lifetime: false },
                { name: 'Aulas novas', monthly: true, lifetime: false },
                { name: 'Grupo no WhatsApp', monthly: true, lifetime: false },
                { name: 'Certificado', monthly: true, lifetime: true },
              ].map((row, index) => (
                <tr key={index} className="border-b border-border/50">
                  <td className="py-4 text-muted-foreground">{row.name}</td>
                  <td className="text-center py-4">
                    {row.monthly ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4">
                    {row.lifetime ? (
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};
