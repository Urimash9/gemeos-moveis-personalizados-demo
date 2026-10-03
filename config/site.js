export const site = {
  name: 'Gêmeos Móveis Planejados',
  location: 'Coromandel · MG',
  instagram: 'https://www.instagram.com/gemeosmoveis/',
  // PENDENTE: confirmar o WhatsApp atual. Não usar os números históricos.
  whatsapp: null,
  // PENDENTE: arquivo oficial GM / GÊMEOS MÓVEIS / PLANEJADOS.
  // O nome em texto é um fallback, não uma proposta de novo logo.
  logo: null,
  logoAlt: 'GM — Gêmeos Móveis Planejados',
  message: 'Olá, Gêmeos! Gostaria de solicitar um orçamento para móveis sob medida.',
  demo: true,
};

export function whatsappUrl(message = site.message) {
  const number = site.whatsapp?.replace(/\D/g, '');
  return number && /^55\d{10,11}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : null;
}
