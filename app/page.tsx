import { HeroSection } from '@/components/HeroSection';
import { TransformationSection } from '@/components/TransformationSection';
import { ForWhoSection } from '@/components/ForWhoSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { WhatIsSection } from '@/components/WhatIsSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { PricingSection } from '@/components/PricingSection';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { FAQSection } from '@/components/FAQSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <TransformationSection />
      <ForWhoSection />
      <TestimonialsSection />
      <WhatIsSection />
      <HowItWorksSection />
      <PricingSection />
      <GuaranteeSection />
      <FinalCTASection />
      <FAQSection />
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text-ember">
                Ember School
              </h3>
              <p className="text-sm text-muted-foreground">
                Transformando vidas através da Palavra de Deus. Seja uma brasa viva do altar.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#sobre" className="hover:text-foreground transition-colors">
                    Sobre o Curso
                  </a>
                </li>
                <li>
                  <a href="#precos" className="hover:text-foreground transition-colors">
                    Planos e Preços
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-foreground transition-colors">
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="hover:text-foreground transition-colors">
                    Depoimentos
                  </a>
                </li>
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:suporte@emberschool.com" className="hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="/politica-privacidade" className="hover:text-foreground transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="/termos-uso" className="hover:text-foreground transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="/garantia" className="hover:text-foreground transition-colors">
                    Política de Garantia
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: suporte@emberschool.com</li>
                <li>WhatsApp: (00) 00000-0000</li>
                <li className="pt-2">
                  <span className="text-xs">Segunda a Sexta</span>
                  <br />
                  <span className="text-xs">9h às 18h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Ember School. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              Desenvolvido com ❤️ para transformar vidas
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
