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

## Build 02 — histórico de identidade e referências reais

Continua a Build 01 (`e00c2d77086c9ade2288ea73e571bb4b372307b8`), preservando
hierarquia, assimetria, sobreposições, navegação e carrossel espacial.
Nessa etapa, as fotografias foram integradas do pacote `gemeos-build-02-assets.zip`.
O manifesto original acompanha os arquivos em `assets/images/gemeos/`.

**Proveniência:** fotografias de trabalhos reais da Gêmeos, além de Márcio e da
equipe em atividade. **Qualidade:** screenshots/crops otimizados, ainda sem os
originais de câmera. Essas informações são independentes em `config/assets.js`:
`provenance`, `isRealProject`, `sourceFormat` e `needsOriginal`. Márcio e equipe são
material real, mas não são classificados como fotografias de projetos.
Na Build 02 original não houve reconstrução dos móveis. A curadoria atual inclui
os tratamentos assistidos da Build 02.5, descritos abaixo; sua proveniência é
registrada separadamente. Não há aviso visual de tratamento nesta demo.

A paleta atual é a **Gêmeos V2.2**, refinada na Build 02.7: grafite `#17191A`,
carvão `#25282A`, off-white `#F2EFEA`, cinzas, azul aço `#3F708D`, madeira
`#89664C` e âmbar `#C49A67`. Tokens e aplicações em
[Paleta V2.2](docs/PALETTE_GEMEOS_V2_2.md).
A referência raster do perfil oficial é aplicada junto ao nome legível, sem
redesenhar GM. Pequenos cantos chanfrados reforçam sua geometria angular.

O mapa de cada fotografia e seus usos está em [ASSET_MAP.md](ASSET_MAP.md).

## Build 02.5 — assets tratados na Home

Integra `gemeos-assets-final-v1.zip` sobre a referência
`2faafc6d3bf6cf497d6b3b356b3400d698bf8a63`, sem alterar layout ou paleta.
Os seis WebP e o manifesto estão em `assets/images/gemeos/final/`, preservando
os bytes recebidos. São derivados de referências reais com tratamento/reconstrução
assistida, **não arquivos originais de câmera**: `provenance: 'gemeos-reference'`,
`underlyingReferenceReal: true`, `treatment: 'ai-assisted'`,
`sourceFormat: 'treated-webp'`, `needsOriginal: true`. Márcio/equipe continuam
classificados como retrato/atividade, separados dos ambientes de projetos.
Essa informação fica somente na configuração/documentação.

A Hero mantém a cozinha principal original. A cozinha tratada é usada no
conteúdo interno; Márcio, equipe, sala/painel e quarto infantil recebem as novas
versões. A cristaleira representa vidro/materialidade e ocupa o card 06 do
carrossel, mantendo oito cards. Quarto reflecta, home office, gourmet, jantar,
comercial, iluminação e sala integrada continuam ativos quando pertinentes.
Nenhum arquivo anterior foi removido. O [mapa de assets](ASSET_MAP.md) registra
slots, reutilizações e proveniência. Os fallbacks do HTML e as dimensões
intrínsecas acompanham a configuração, evitando troca inicial de fotografia.

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

## Contato confirmado

WhatsApp: **+55 34 9927-1517** — [conversar](https://wa.me/553499271517).
Número e mensagem centralizados em `config/site.js`, com URL gerada por
`whatsappUrl()`. CTAs gerais usam: “Olá, Gêmeos! Vi o site e gostaria de solicitar
um orçamento para móveis planejados.” O carrossel preserva mensagens específicas
por ambiente. O fallback de contato permanece como segurança, mas fica inativo
com o número confirmado. Instagram: `https://www.instagram.com/gemeosmoveis/`.

## Dados pendentes

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
Os novos tratamentos assistidos melhoram a apresentação nesta demo; referências
antigas ainda podem conter elementos de Stories. A substituição futura por
originais de câmera permanece pendente e deve preservar a curadoria aprovada.

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


## Validação Build 02.5

Build completo aprovado: 11 chunks preservados e 15 caminhos de imagens válidos.
Chromium/Playwright em **390, 768, 1440 e 1920px**, comparando a Build 02.4 com a
integração: zero diferenças estruturais nos 325 elementos e seus pseudo-elementos;
CSS/paleta e scripts byte a byte preservados. Somente os crops das imagens podem
mudar. Rosto e tronco do Márcio permanecem livres dos cards, com oficina/maquinário
visíveis; todos os seis assets receberam revisão visual nas quatro larguras.

Sem overflow, imagens quebradas, respostas HTTP com erro ou erros de console.
CLS local medido em **0** nas quatro larguras. Seleção dos seis ambientes,
carrossel com oito cards por botões/teclado, menu/Escape e reduced-motion aprovados.
Os 22 fallbacks de imagem correspondem aos slots configurados antes do JavaScript;
os sete arquivos do ZIP (seis WebP + manifesto) são byte a byte idênticos.

Evidências: [validação](docs/build-02-5-validation.json),
[institucional desktop/mobile](docs/previews/build-02-5-institutional-desktop-mobile.jpg),
[conteúdo desktop/mobile](docs/previews/build-02-5-content-desktop-mobile.jpg) e
[carrossel desktop/mobile](docs/previews/build-02-5-carousel-desktop-mobile.jpg).

## Fechamento Build 02.7

Referência: `4eb72ed08045258a14f64060bd966ae8c8459f19`. WhatsApp confirmado
e paleta Gêmeos V2.2 documentados acima. Somente número/mensagem de contato e
três tokens azuis mudam no código; HTML, imagens, crops, CSS base e scripts
de interação permanecem iguais. A função `whatsappUrl()` é preservada.

QA em **360, 390, 768, 1440 e 1920px**: sete CTAs, mensagens dos oito cards,
seis Ambientes, setas/teclado/swipe e toque sobre o card, menu mobile/Escape,
hover/focus-visible, reduced-motion e destinos internos aprovados. Todos os
links externos mantêm `target="_blank"` e `rel="noopener noreferrer"`.
O aviso/modal de contato provisório fica inativo com o número configurado.
Não foram enviadas mensagens durante a validação.

Build completo: 11 chunks e 15 caminhos de imagem válidos. Sem imagens
quebradas, overflow horizontal, erros de console ou respostas HTTP com erro.
CLS local máximo: **0,000071**. Zero diferenças de geometria, tipografia,
crops e animações na comparação dos 325 elementos e pseudo-elementos,
isolando o refinamento de cor da ativação do contato definitivo.

Contrastes: azul/off-white **4,68:1**, azul claro/carvão **5,44:1**, azul
claro/grafite **6,47:1**, números do Processo/carvão **6,06:1**. Nenhum
ajuste extra de cor ou correção de layout foi necessário.

Evidências: [QA final](docs/build-02-7-validation.json),
[desktop/mobile](docs/previews/build-02-7-desktop-mobile.jpg) e
[paleta V2.2](docs/PALETTE_GEMEOS_V2_2.md).
Demo pronta para revisão de merge, **sem merge automático**. Publicação
somente como preview da branch `build-01-gemeos`; produção preservada.
