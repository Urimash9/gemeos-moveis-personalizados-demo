# Curadoria Gêmeos — Build 02.5

Referência visual preservada: Build 02.4, commit `2faafc6d3bf6cf497d6b3b356b3400d698bf8a63`.
Layout, composição institucional e paleta Gêmeos V2.1 permanecem aprovados.

## Proveniência e arquivos

- `assets/images/gemeos/`: referências reais recebidas na Build 02 em screenshots/crops. Mantêm `provenance: 'gemeos-real'`, `sourceFormat: 'screenshot-crop'`, `needsOriginal: true`.
- `assets/images/gemeos/final/`: os seis WebP e o `ASSET_MANIFEST.txt` do pacote `gemeos-assets-final-v1.zip`, copiados sem recompressão ou alteração de bytes. Todos os novos arquivos têm **900 × 1125px**.
- Os novos arquivos são **tratamentos/reconstruções assistidas derivados de referências reais**, não originais de câmera. Configuração: `provenance: 'gemeos-reference'`, `underlyingReferenceReal: true`, `treatment: 'ai-assisted'`, `sourceFormat: 'treated-webp'`, `needsOriginal: true`.
- Nos ambientes, `isRealProject` e `underlyingProjectReal` são `true`. Márcio e equipe são contexto real de oficina/execução, classificados como retrato/atividade e não como fotos de ambientes: ambos os campos de projeto são `false`, mantendo `underlyingReferenceReal: true`.
- Essa distinção é interna. Nenhum aviso de tratamento é apresentado ao visitante na demo.

## Substituições e aplicação

Os nomes novos abaixo pertencem ao diretório `final/`.

| Asset anterior | Asset atual | Slot e aplicação |
| --- | --- | --- |
| `institucional-marcio.webp` | `institucional-marcio-final.webp` | `aboutMain`: protagonista institucional; mesma composição e apoios |
| `processo-equipe.webp` | `processo-equipe-final.webp` | `process`: fotografia junto às quatro etapas |
| `projeto-sala-tv.webp` | `sala-tv-final.webp` | `tv`: Ambientes/Salas, carrossel 02 e projeto p3 |
| `projeto-quarto-infantil.webp` | `quarto-infantil-final.webp` | `child`: carrossel 08, mesma categoria |
| `projeto-quarto-reflecta.webp` no detalhe de vidro | `cristaleira-final.webp` | `cristaleira`/`glass`: frame vertical de materialidade |
| `projeto-sala-integrada.webp` no carrossel 06 | `cristaleira-final.webp` | O mesmo card 06 passa a CRISTALEIRAS; sub: Vidro · madeira · iluminação integrada |
| `hero-cozinha.webp` no conteúdo interno | `cozinha-tratada-final.webp` | `kitchenSecondary`: Ambientes/Cozinhas, carrossel 01 e projeto p1 |
| `hero-cozinha.webp` na Hero | **Preservado** | `heroKitchen`/`hero`: arquivo, crop, metadados e impacto de abertura mantidos |

A cozinha da Hero deixa de se repetir no conteúdo interno. O quarto reflecta deixa de representar o detalhe de vidro, mas permanece na categoria Quartos. A sala integrada deixa o carrossel e permanece em Projetos. O número de cards segue em **8**, os ambientes em **6** e os projetos em **4**.

## Referências existentes mantidas ativas

| Arquivo | Uso ativo |
| --- | --- |
| `hero-cozinha.webp` | Hero |
| `projeto-quarto-reflecta.webp` | Ambientes/Quartos, carrossel 03, projeto p2 |
| `projeto-sala-integrada.webp` | Projeto p4 |
| `projeto-home-office.webp` | Ambientes/Home office, carrossel 04 |
| `area-gourmet.webp` | Ambientes/Áreas gourmet, carrossel 05 |
| `projeto-jantar-ripado.webp` | Apoio institucional, carrossel 07, detalhe madeira/ripado |
| `comercial-oab.webp` | Seção Comercial e seleção de Ambientes |
| `painel-iluminacao.webp` | Detalhe de iluminação e fundo do CTA final |
| `logo-referencia.webp` | Header e footer, acompanhado do nome em texto |

Os arquivos anteriores substituídos permanecem no repositório para rastreabilidade. Não foram apagados ou recomprimidos. A logo raster continua independente de uma futura logo oficial em vetor. A OAB faz parte do ambiente fotografado, sem alegação de parceria.

## Enquadramento e entrega

Os crops são centralizados em `config/assets.js`, com `position` e `positionMobile`. O HTML reserva as dimensões intrínsecas reais dos novos arquivos e já aponta para eles antes da execução do JavaScript. Não há flash da fotografia antiga nem troca de proporção estrutural durante a inicialização.

| Slot | Desktop (≥901px) | Mobile/tablet (≤900px) |
| --- | --- | --- |
| `aboutMain` | `50% 0%` | `100% 0%` |
| `process` | `50% 60%` | `50% 50%` |
| `tv` | `40% 45%` | `45% 50%` |
| `child` | `50% 55%` | `50% 55%` |
| `kitchenSecondary` | `50% 50%` | `50% 50%` |
| `glass`/`cristaleira` | `30% 50%` | `25% 50%` |
| Cristaleira no carrossel | `35% 50%` | `35% 50%` |

`object-fit: cover` permanece o do frame aprovado. O crop antigo de Story (`scale: 1.18`, `frameInset: 7.63%`) sai somente da imagem do card 06, pois a nova cristaleira não possui bordas de Story. A geometria do card e todos os seus movimentos permanecem iguais.

Somente atributos de imagem, curadoria e documentação mudam. A única alteração de rótulo visível é o card CRISTALEIRAS, expressamente previsto no briefing. CSS, paleta, frames, grids, textos institucionais, navegação e código das interações permanecem iguais à Build 02.4. Nenhum filtro foi adicionado às fotografias; o comportamento de contraste dos cards inativos do carrossel permanece o previamente aprovado.

Os assets históricos Montaggio e `approved/` continuam preservados e inativos. Nenhuma alteração foi feita no projeto Montaggio, na `main` ou em produção.
