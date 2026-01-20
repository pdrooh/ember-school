'use client'

export type PlanType = 'monthly' | 'lifetime';

interface CheckoutOptions {
  plan: PlanType;
  price: number;
  currency?: string;
}

export const useCheckout = () => {
  const handleCheckout = (options: CheckoutOptions) => {
    const { plan, price, currency = 'BRL' } = options;

    // Aqui você pode integrar com:
    // - Stripe
    // - PayPal
    // - Mercado Pago
    // - Hotmart
    // - Kiwify
    // - Outro gateway de pagamento

    // Exemplo de integração (substitua pela sua URL de checkout):
    const checkoutUrl = plan === 'monthly' 
      ? 'https://checkout.emberschool.com/monthly' // Substitua pela sua URL
      : 'https://checkout.emberschool.com/lifetime'; // Substitua pela sua URL

    // Redirecionar para checkout
    console.log('Checkout:', { plan, price, currency });
    // window.open(checkoutUrl, '_blank');
    
    // Ou usar window.location.href para redirecionamento na mesma aba:
    // window.location.href = checkoutUrl;
  };

  return { handleCheckout };
};
