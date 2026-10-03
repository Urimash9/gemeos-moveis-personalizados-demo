# Gêmeos V2.1 — Build 02.4

Referência preservada: `ebe7187e3369a548d5ee235f71ccd3a8096d8b5a` (Build 02.3).
Implementação centralizada em `styles/gemeos.css`. Esta rodada altera apenas cores. O HTML, o CSS base, os scripts, a configuração e os assets permanecem byte a byte iguais à referência.

## Tokens

| Token | Valor | Função |
| --- | --- | --- |
| `--surface-ink` | `#17191A` | Hero, prova social, footer, menu |
| `--surface-charcoal` | `#25282A` | Processo, carrossel, assinatura institucional |
| `--surface-graphite` | `#303438` | Base dos cards fotográficos |
| `--surface-light` | `#F2EFEA` | Superfícies claras e texto claro |
| `--surface-paper` | `#FAF8F4` | Materialidade, variação clara, hover dos botões |
| `--neutral-stone` | `#B6B2AC` | Labels sobre escuro, camadas e neutros |
| `--neutral-steel` | `#747A7E` | Bordas e linhas; não utilizado como body text |
| `--text-muted` | `#626A6E` | Texto secundário sobre claro |
| `--text-primary` | `#292B2C` | Texto principal |
| `--accent-blue` | `#526978` | Estado ativo, microtextos e divisor |
| `--accent-blue-deep` | `#394E5B` | Hover e foco sobre claro |
| `--accent-blue-light` | `#6F8B9B` | Linhas, indicadores e foco sobre escuro |
| `--accent-wood` | `#89664C` | Linhas próximas a projetos/materialidade |
| `--accent-amber` | `#C49A67` | Hachura pontual junto às fotografias de acabamento |

Derivado acessível: `--text-accent-on-charcoal: color-mix(in srgb, var(--accent-blue-light) 90%, var(--surface-paper))`. Usado nos números pequenos do Processo; contraste **4,78:1** sobre carvão, contra 4,13:1 do azul claro puro. Os 14 tokens principais conservam os valores exatos solicitados.

Os aliases de superfícies `--dark`, `--dark2`, `--dark3`, `--light`, `--warm`, `--paper`, `--text`, `--muted` e `--wood` mantêm compatibilidade com `base.css`. `--line-d` e `--line-l` derivam dos neutros.

## Substituição funcional do legado

A camada ativa da Gêmeos não define nem utiliza `--red` ou `--gold`. As declarações históricas de `base.css` foram preservadas, mas seus seletores ativos receberam overrides semânticos:

| Uso herdado | Nova função |
| --- | --- |
| `--red` em marcador/indicador | Azul aço ou azul claro conforme o fundo |
| `--red` em ambiente ativo | `--accent-blue`; hover profundo |
| `--red` em número de processo/hover | Derivado acessível do azul claro |
| `--red` em linha próxima ao projeto comercial | `--accent-wood` |
| `--gold` no progresso do carrossel | `--accent-blue-light` |
| Vermelho literal na geometria da Hero | Azul claro, preservando todas as camadas, posições e tamanhos do background |
| Vermelho literal junto à materialidade | Madeira |
| Dourado literal na hachura junto às fotografias | Âmbar suave |

## Distribuição e aplicação

- **Hero/header:** base grafite, headline clara com ênfase cinza pedra, CTA off-white. Linha B e pequeno indicador azuis; linha A neutra. Não há superfície azul grande.
- **Institucional:** mesma composição conectada da Build 02.3, card textual carvão, assinatura off-white, filete azul de 2px aplicado por sombra interna. A fotografia não recebe moldura azul.
- **Ambientes:** fundo off-white neutro, contorno cinza aço, seleção azul aço e hover azul profundo.
- **Carrossel:** carvão, progresso azul claro, borda do card ativo azul claro, linhas de fundo neutras.
- **Projetos/materialidade/comercial:** fotografia preservada, labels pequenos azuis nos projetos; madeira nas linhas de apoio e âmbar apenas na hachura próxima aos materiais e à iluminação. Madeira e calor reais permanecem nas fotografias.
- **Processo:** carvão, números azul claro com ajuste acessível; diagonal azul discreta e legenda neutra.
- **Prova social:** grafite, assinatura cinza pedra, divisor azul discreto.
- **CTA final/footer:** grafite/off-white, linha geométrica azul discreta; CTA principal claro. Foco azul claro no escuro e profundo no claro.
- **Superfícies neutralizadas:** Ambientes e Comercial saem do fendi/bege para `--surface-light`; placeholders neutros usam pedra. Materialidade conserva `--surface-paper`.

## Validação

Build completo: **OK**, 11 chunks preservados, 13 caminhos de imagens válidos.

Em **390, 768 e 1440px**, foram comparados 325 elementos do DOM e seus pseudo-elementos antes/depois. **Zero diferenças** em retângulos, dimensões, margens, paddings, grids, tipografia, clip-paths, object-position, escala, animações e transições. Sem overflow horizontal, imagens quebradas, falhas HTTP ou erros de console. CLS medido: 0 em todas as larguras.

Hover, foco por teclado, seleção de Ambientes, carrossel, menu mobile/Escape e reduced-motion: **aprovados**. O foco preserva espessura de 2px e offset de 5px; somente a cor muda.

| Par avaliado | Contraste |
| --- | --- |
| Texto principal / off-white | 12,40:1 |
| Texto secundário / off-white | 4,81:1 |
| Azul aço ativo / off-white | 5,02:1 |
| Números do Processo / carvão | 4,78:1 |
| Assinatura off-white / carvão | 12,93:1 |
| Labels do footer / grafite | 8,36:1 |

Evidência estruturada: `docs/build-02-4-validation.json`. Comparações completas antes/depois em `docs/previews/build-02-4-before-after-{390,768,1440}.jpg`. Composição desktop/mobile lado a lado em `docs/previews/build-02-4-palette-desktop-mobile.jpg`. Os elementos fixos são ocultados nas capturas completas para não obstruir as seções; o código publicado não recebe essa alteração.

Escopo Git: somente `build-01-gemeos`, sem merge, sem alteração de `main` ou Montaggio. Publicação apenas como preview Vercel.
