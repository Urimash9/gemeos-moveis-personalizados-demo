// Todos os slots são PROVISÓRIOS. Imagens editoriais herdadas da base;
// nenhuma delas representa um trabalho executado pela Gêmeos.
// Trocar src, alt, width, height e position quando chegar a foto original.
const reference = (src, alt, width, height, position = 'center') => ({
  src, alt: `Imagem ilustrativa provisória: ${alt}`, width, height, position,
  provisional: true,
});

export const assets = {
  hero: reference('/assets/images/hero/cozinha-hero.webp', 'cozinha com madeira e bancada', 1672, 941, '58% center'),
  aboutMain: reference('/assets/images/editorial/sobre/sobre-principal.webp', 'marcenaria e luz integrada', 840, 1200),
  aboutDetail: reference('/assets/images/editorial/sobre/sobre-secundaria.webp', 'mobiliário e organização', 840, 1200),
  commercial: reference('/assets/images/ambientes/home-office-executivo.webp', 'ambiente de trabalho planejado', 1122, 1402),
  glass: reference('/assets/images/editorial/materialidade/vidro-transparencia.webp', 'vidro e marcenaria', 840, 1200),
  wood: reference('/assets/images/editorial/materialidade/madeira-textura.webp', 'padrões amadeirados', 1200, 840),
  light: reference('/assets/images/editorial/materialidade/luz-integrada.webp', 'iluminação integrada', 840, 1200),
  cta: reference('/assets/images/editorial/contato/cta-adega.webp', 'mobiliário e iluminação quente', 1200, 675),
  environments: [
    { title: 'Cozinhas', ...reference('/assets/images/ambientes/cozinha-alt.webp', 'cozinha planejada', 1448, 1086) },
    { title: 'Salas', ...reference('/assets/images/ambientes/sala-painel-tv.webp', 'sala e painel de TV', 1448, 1086) },
    { title: 'Quartos', ...reference('/assets/images/ambientes/dormitorio-painel.webp', 'quarto planejado', 1122, 1402) },
    { title: 'Home office', ...reference('/assets/images/referencias/home-office-minimal.webp', 'home office', 1122, 1402) },
    { title: 'Áreas gourmet', ...reference('/assets/images/referencias/sala-jantar.webp', 'área de convívio', 1448, 1086) },
    { title: 'Comercial', ...reference('/assets/images/ambientes/home-office-executivo.webp', 'ambiente profissional', 1122, 1402) },
  ],
  gallery: [
    { title: 'Cozinhas', sub: 'Organização · uso diário', ...reference('/assets/images/ambientes/cozinha-alt.webp', 'cozinha sob medida', 1448, 1086) },
    { title: 'Salas e painéis', sub: 'Convívio · madeira e iluminação', ...reference('/assets/images/referencias/painel-madeira-corredor.webp', 'painel amadeirado', 1122, 1402) },
    { title: 'Quartos', sub: 'Descanso · soluções para a rotina', ...reference('/assets/images/ambientes/dormitorio-painel.webp', 'quarto com marcenaria', 1122, 1402) },
    { title: 'Home office', sub: 'Trabalho · espaço bem aproveitado', ...reference('/assets/images/referencias/home-office-minimal.webp', 'home office planejado', 1122, 1402) },
    { title: 'Áreas gourmet', sub: 'Encontros · integração de ambientes', ...reference('/assets/images/referencias/sala-jantar.webp', 'ambiente de convívio', 1448, 1086) },
    { title: 'Comercial', sub: 'Recepções · ambientes profissionais', ...reference('/assets/images/ambientes/home-office-executivo.webp', 'ambiente comercial', 1122, 1402) },
  ],
  projects: [
    { title: 'Cozinhas', ...reference('/assets/images/ambientes/cozinha-alt.webp', 'cozinha, foto real pendente', 1448, 1086) },
    { title: 'Quartos', ...reference('/assets/images/ambientes/closet-frontal.webp', 'armários, foto real pendente', 1122, 1402) },
    { title: 'Home office', ...reference('/assets/images/referencias/home-office-minimal.webp', 'home office, foto real pendente', 1122, 1402) },
    { title: 'Salas e painéis', ...reference('/assets/images/ambientes/sala-painel-tv.webp', 'painel de TV, foto real pendente', 1448, 1086) },
  ],
};
