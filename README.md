# Gêmeos Móveis Planejados — Demo

Projeto independente da AVERO Studio para a Gêmeos Móveis Planejados, Coromandel/MG.

## Origem preservada

A fundação visual vem de `Urimash9/montaggio-personalizados-demo`, checkpoint
`checkpoint/montaggio-v2.3-base`, commit
`d2cf26bc44f1a41b4fe3bc169380700e2ae9e78b`.

Montaggio permanece somente leitura. Os arquivos de `approved/` e os assets
históricos foram preservados para rastreabilidade; não são a fonte ativa da demo.
Todo o trabalho acontece em `Urimash9/gemeos-moveis-personalizados-demo`, branch
`build-01-gemeos`. Nenhum merge ou promoção para produção nesta rodada.

## Build 02 — identidade e material real

Continua a Build 01 (`e00c2d77086c9ade2288ea73e571bb4b372307b8`), preservando
hierarquia, assimetria, sobreposições, navegação e carrossel espacial.
As fotografias ativas agora vêm do pacote `gemeos-build-02-assets.zip`.
O manifesto original acompanha os arquivos em `assets/images/gemeos/`.

**Proveniência:** fotografias de trabalhos reais da Gêmeos, além de Márcio e da
equipe em atividade. **Qualidade:** screenshots/crops otimizados, ainda sem os
originais de câmera. Essas informações são independentes em `config/assets.js`:
`provenance`, `isRealProject`, `sourceFormat` e `needsOriginal`. Márcio e equipe são
material real, mas não são classificados como fotografias de projetos.
Não há aviso de imagem ilustrativa nas fotografias reais. Nenhum móvel foi
reconstruído, gerado ou alterado. O enquadramento é feito por CSS.

A paleta usa grafite `#171819` / `#1B1C1E`, off-white `#F2EFE9`, fendi `#B8AEA4`,
madeira `#8F6B50` / `#9B7559` e âmbar `#D5A45F` em microacentos.
A referência raster do perfil oficial é aplicada junto ao nome legível, sem
redesenhar GM. Pequenos cantos chanfrados reforçam sua geometria angular.

O mapa de cada fotografia e seus usos está em [ASSET_MAP.md](ASSET_MAP.md).

## Executar e buildar

Node.js 20 ou superior. Sem dependências adicionais de execução.

```sh
npm run build
python3 -m http.server 4173 --directory dist
```

`index.html` entrega o conteúdo semântico e as imagens diretamente, incluindo
as dimensões, sem flash de assets herdados. `config/assets.js` centraliza os
arquivos e os crops desktop/mobile; ao substituir uma fotografia, atualizar
os dados e o fallback correspondente no HTML. `scripts/interactions.js`
aplica a configuração e preserva menu, seleção de ambientes e carrossel.

O build valida a sintaxe dos scripts e os caminhos de imagens e gera `dist/`.
`vercel.json` contém somente build e saída; nenhum vínculo com Montaggio.
O push na branch deve gerar preview pelo projeto Vercel já existente.

## Dados pendentes

- WhatsApp atual confirmado: `config/site.js` mantém `whatsapp: null`.
  CTAs abrem o contato orientado ao Instagram oficial enquanto aguarda confirmação.
- Logo oficial em alta qualidade/vetor: `logo: null` é independente de
  `logoReference`, a captura do perfil. Não tratar a captura como vetor oficial.
- Fotografias originais: todos os slots reais têm `needsOriginal: true`.
  Substituir antes da publicação definitiva do portfólio, conforme manifesto.
- Avaliações completas e autorias independentes ainda não cadastradas.
  Qualidade, acabamento e atendimento aparecem como temas, sem depoimentos inventados.
- Endereço completo não confirmado. Apenas Coromandel/MG é apresentado.

A presença da OAB na recepção fotografada não é alegação de parceria ou de
contexto contratual. Nenhum número de clientes, projetos, prêmio, funcionário,
capacidade de fábrica ou data de fundação foi inventado. A fachada não foi usada.
A demo continua com `noindex, nofollow`; rever somente após validar os dados.

## Revisão visual

Priorizar a hero em 360/390 px e telas largas, Márcio no contexto da oficina,
a montagem da equipe, a seleção dos oito ambientes no carrossel e a assimetria
no portfólio. As proporções verticais dos screenshots limitam alguns crops.
O enquadramento dos arquivos originais poderá melhorar definição e remover
naturalmente os elementos de Stories ainda presentes, sem reconstrução por IA.

## Validação Build 02

`npm run build` aprovado. Chromium/Playwright em 360, 390, 768, 1440 e 1920 px:
sem overflow, imagens quebradas, anchors inválidos ou erros de console; CLS
medido em **0** nas cinco larguras nesta execução local. Foram conferidos menu,
contato provisório, configuração central de WhatsApp, seleção dos seis ambientes,
carrossel por botões/teclado/gesto e redução de movimento. Todos os componentes
ativos usam `/assets/images/gemeos/`.

Evidência: [validação](docs/build-02-validation.json) e
[desktop/mobile](docs/previews/build-02-desktop-mobile.jpg). A medição local de CLS
não substitui dados de uso real. Nenhuma alteração foi feita no Montaggio.
