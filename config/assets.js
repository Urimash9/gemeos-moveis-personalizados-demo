// Build 02.5: referências reais e tratamentos assistidos são registrados separadamente.
// Proveniência e qualidade são independentes. needsOriginal nunca é um aviso ao visitante.
const real = (src, alt, width, height, position = 'center', positionMobile = position, isRealProject = true) => ({
  src, alt, width, height, position, positionMobile,
  provenance: 'gemeos-real', isRealProject, needsOriginal: true,
  sourceFormat: 'screenshot-crop',
});
const heroKitchen = real('/assets/images/gemeos/hero-cozinha.webp', 'Cozinha Gêmeos com marcenaria clara, ilha preta e iluminação integrada', 625, 805, '50% 64%', '50% 64%');
// Arquivos do pacote final: bytes preservados, derivados de referências reais.
// Retratos/equipe são contexto real; isRealProject classifica somente ambientes/projetos.
const treated = (filename, alt, position = '50% 50%', positionMobile = position, isRealProject = true) => ({
  src: `/assets/images/gemeos/final/${filename}`, alt, width: 900, height: 1125,
  position, positionMobile, provenance: 'gemeos-reference',
  underlyingReferenceReal: true, underlyingProjectReal: isRealProject,
  isRealProject, treatment: 'ai-assisted', sourceFormat: 'treated-webp', needsOriginal: true,
});
const kitchenSecondary = treated('cozinha-tratada-final.webp', 'Cozinha Gêmeos com armários claros, bancada em L e janela');
const cristaleira = treated('cristaleira-final.webp', 'Cristaleira Gêmeos com portas de vidro, madeira e iluminação interna', '30% 50%', '25% 50%');
const bedroom = real('/assets/images/gemeos/projeto-quarto-reflecta.webp', 'Quarto Gêmeos com armários em vidro reflecta, ripado e bancada', 691, 975, '50% 52%');
const tv = treated('sala-tv-final.webp', 'Sala Gêmeos com painel de TV amadeirado e iluminação nas prateleiras', '40% 45%', '45% 50%');
const living = real('/assets/images/gemeos/projeto-sala-integrada.webp', 'Sala integrada Gêmeos com painel de TV e móveis sob medida', 691, 970, '50% 52%');
const office = real('/assets/images/gemeos/projeto-home-office.webp', 'Home office Gêmeos com bancada arredondada e armários cinza', 625, 615, '50% 52%');
const gourmet = real('/assets/images/gemeos/area-gourmet.webp', 'Área gourmet Gêmeos com bancada preta, armários fendi e mesa de convívio', 691, 1260, '50% 50%');
const dining = real('/assets/images/gemeos/projeto-jantar-ripado.webp', 'Sala de jantar Gêmeos com mesa de madeira e divisória ripada', 691, 910, '50% 52%');
const child = treated('quarto-infantil-final.webp', 'Quarto infantil Gêmeos com cama de madeira e palha, cabeceira azul e iluminação integrada', '50% 55%');
const commercial = real('/assets/images/gemeos/comercial-oab.webp', 'Recepção com marcenaria Gêmeos e identificação da OAB de Coromandel no ambiente', 691, 830, '50% 52%');
const light = real('/assets/images/gemeos/painel-iluminacao.webp', 'Painel Gêmeos com iluminação quente integrada à marcenaria', 691, 1115, '50% 52%');

export const assets = {
  hero: heroKitchen,
  heroKitchen, kitchenSecondary, tv, child, cristaleira,
  aboutMain: treated('institucional-marcio-final.webp', 'Márcio, proprietário da Gêmeos, na área de produção da marcenaria', '50% 0%', '100% 0%', false),
  aboutDetail: dining,
  process: treated('processo-equipe-final.webp', 'Equipe Gêmeos trabalhando na montagem e conferência de um móvel', '50% 60%', '50% 50%', false),
  commercial, glass: cristaleira, wood: dining, light, cta: light,
  environments: [
    { title: 'Cozinhas', ...kitchenSecondary }, { title: 'Salas', ...tv },
    { title: 'Quartos', ...bedroom }, { title: 'Home office', ...office },
    { title: 'Áreas gourmet', ...gourmet }, { title: 'Comercial', ...commercial },
  ],
  gallery: [
    { title: 'Cozinhas', sub: 'Uso diário · marcenaria clara e bancada preta', ...kitchenSecondary },
    { title: 'Salas e painéis', sub: 'Convívio · madeira e iluminação', ...tv },
    { title: 'Quartos', sub: 'Descanso · reflecta, ripado e bancada', ...bedroom },
    { title: 'Home office', sub: 'Trabalho · espaço bem aproveitado', ...office, position: '23% 52%', positionMobile: '23% 52%' },
    { title: 'Áreas gourmet', sub: 'Encontros · integração de ambientes', ...gourmet },
    // Troca da referência de Story por vidro/iluminação; oito cards e frames preservados.
    { title: 'CRISTALEIRAS', sub: 'Vidro · madeira · iluminação integrada', ...cristaleira, position: '35% 50%', positionMobile: '35% 50%' },
    { title: 'Sala de jantar', sub: 'Materialidade · madeira e ripado', ...dining },
    { title: 'Quarto infantil', sub: 'Cuidado · soluções para cada fase', ...child },
  ],
  projects: [
    { title: 'Cozinhas', ...kitchenSecondary }, { title: 'Quartos', ...bedroom },
    { title: 'Salas e painéis', ...tv }, { title: 'Salas integradas', ...living },
  ],
};
