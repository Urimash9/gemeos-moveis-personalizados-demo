// Build 02: material real fornecido pela Gêmeos, em screenshots/crops otimizados.
// Proveniência e qualidade são independentes. needsOriginal nunca é um aviso ao visitante.
const real = (src, alt, width, height, position = 'center', positionMobile = position, isRealProject = true) => ({
  src, alt, width, height, position, positionMobile,
  provenance: 'gemeos-real', isRealProject, needsOriginal: true,
  sourceFormat: 'screenshot-crop',
});
const kitchen = real('/assets/images/gemeos/hero-cozinha.webp', 'Cozinha Gêmeos com marcenaria clara, ilha preta e iluminação integrada', 625, 805, '50% 64%', '50% 64%');
const bedroom = real('/assets/images/gemeos/projeto-quarto-reflecta.webp', 'Quarto Gêmeos com armários em vidro reflecta, ripado e bancada', 691, 975, '50% 52%');
const tv = real('/assets/images/gemeos/projeto-sala-tv.webp', 'Sala Gêmeos com painel de TV amadeirado e iluminação nas prateleiras', 625, 810, '50% 52%');
const living = real('/assets/images/gemeos/projeto-sala-integrada.webp', 'Sala integrada Gêmeos com painel de TV e móveis sob medida', 691, 970, '50% 52%');
const office = real('/assets/images/gemeos/projeto-home-office.webp', 'Home office Gêmeos com bancada arredondada e armários cinza', 625, 615, '50% 52%');
const gourmet = real('/assets/images/gemeos/area-gourmet.webp', 'Área gourmet Gêmeos com bancada preta, armários fendi e mesa de convívio', 691, 1260, '50% 50%');
const dining = real('/assets/images/gemeos/projeto-jantar-ripado.webp', 'Sala de jantar Gêmeos com mesa de madeira e divisória ripada', 691, 910, '50% 52%');
const child = real('/assets/images/gemeos/projeto-quarto-infantil.webp', 'Quarto infantil Gêmeos com cabeceira iluminada e mobiliário sob medida', 691, 1220, '50% 47%');
const commercial = real('/assets/images/gemeos/comercial-oab.webp', 'Recepção com marcenaria Gêmeos e identificação da OAB de Coromandel no ambiente', 691, 830, '50% 52%');
const light = real('/assets/images/gemeos/painel-iluminacao.webp', 'Painel Gêmeos com iluminação quente integrada à marcenaria', 691, 1115, '50% 52%');

export const assets = {
  hero: kitchen,
  aboutMain: real('/assets/images/gemeos/institucional-marcio.webp', 'Márcio, proprietário da Gêmeos, na área de produção da marcenaria', 691, 1130, '50% 68%', '50% 68%', false),
  aboutDetail: dining,
  process: real('/assets/images/gemeos/processo-equipe.webp', 'Equipe Gêmeos trabalhando na montagem e conferência de um móvel', 691, 1185, '50% 56%', '50% 56%', false),
  commercial, glass: bedroom, wood: dining, light, cta: light,
  environments: [
    { title: 'Cozinhas', ...kitchen }, { title: 'Salas', ...tv },
    { title: 'Quartos', ...bedroom }, { title: 'Home office', ...office },
    { title: 'Áreas gourmet', ...gourmet }, { title: 'Comercial', ...commercial },
  ],
  gallery: [
    { title: 'Cozinhas', sub: 'Uso diário · marcenaria clara e bancada preta', ...kitchen },
    { title: 'Salas e painéis', sub: 'Convívio · madeira e iluminação', ...tv },
    { title: 'Quartos', sub: 'Descanso · reflecta, ripado e bancada', ...bedroom },
    { title: 'Home office', sub: 'Trabalho · espaço bem aproveitado', ...office, position: '23% 52%', positionMobile: '23% 52%' },
    { title: 'Áreas gourmet', sub: 'Encontros · integração de ambientes', ...gourmet },
    // Crop da borda do Story dentro do frame; arquivo recebido intacto.
    { title: 'Salas integradas', sub: 'Rotina · espaços que se conectam', ...living, scale: 1.18, frameInset: '7.63%' },
    { title: 'Sala de jantar', sub: 'Materialidade · madeira e ripado', ...dining },
    { title: 'Quarto infantil', sub: 'Cuidado · soluções para cada fase', ...child },
  ],
  projects: [
    { title: 'Cozinhas', ...kitchen }, { title: 'Quartos', ...bedroom },
    { title: 'Salas e painéis', ...tv }, { title: 'Salas integradas', ...living },
  ],
};
