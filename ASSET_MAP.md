# Montaggio — Asset Map V1

Generated/editorial assets. These images are visual references and must NOT be presented as completed Montaggio projects.

## Hero
- `assets/images/hero/cozinha-hero.webp`

## Ambientes
- Cozinhas: `assets/images/ambientes/cozinha-alt.webp`
- Closets: `assets/images/ambientes/closet-frontal.webp`
- Dormitórios: `assets/images/ambientes/dormitorio-painel.webp`
- Home Offices: `assets/images/ambientes/home-office-executivo.webp`
- Salas & painéis: `assets/images/ambientes/sala-painel-tv.webp`

## Referências / carrossel 3D
- Painel amadeirado: `assets/images/referencias/painel-madeira-corredor.webp`
- Cristaleira iluminada: `assets/images/referencias/cristaleira.webp`
- Closet canelado: `assets/images/referencias/closet-canelado.webp`
- Adega planejada: `assets/images/referencias/adega.webp`
- Home office minimal: `assets/images/referencias/home-office-minimal.webp`
- Sala de jantar: `assets/images/referencias/sala-jantar.webp`
- Detalhe de marcenaria: `assets/images/referencias/detalhe-marcenaria.webp`

## Real project sections
Do not use the generated/editorial assets above in sections labeled as completed/real work.
For Sobre, Projeto em Destaque, Materialidade and Projetos Realizados, preserve selected real Montaggio photography from the current implementation, but migrate it out of base64/chunks into standalone optimized image files under:
- `assets/images/reais/sobre/`
- `assets/images/reais/destaque/`
- `assets/images/reais/materialidade/`
- `assets/images/reais/projetos/`

## Rules
- No visible repeated generated image across Hero, Ambientes and Referências.
- Preserve current V2.3 layout and section order.
- Optimize real extracted images to WebP.
- Use responsive `object-fit: cover` and per-slot `object-position` instead of distorting assets.
- Keep image filenames ASCII/kebab-case.
