export const site = {
  name: 'Gêmeos Móveis Planejados',
  location: 'Coromandel · MG',
  instagram: 'https://www.instagram.com/gemeosmoveis/',
  // WhatsApp atual confirmado pela Gêmeos — Build 02.7.
  whatsapp: '553499271517',
  // PENDENTE: arquivo oficial GM / GÊMEOS MÓVEIS / PLANEJADOS.
  // A referência raster é exibida junto ao nome para preservar a legibilidade.
  logo: null,
  logoReference: '/assets/images/gemeos/logo-referencia.webp',
  logoNeedsOriginal: true,
  logoAlt: 'GM — Gêmeos Móveis Planejados',
  message: 'Olá, Gêmeos! Vi o site e gostaria de solicitar um orçamento para móveis planejados.',
  demo: true,
};

export function whatsappUrl(message = site.message) {
  const number = site.whatsapp?.replace(/\D/g, '');
  return number && /^55\d{10,11}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : null;
}
