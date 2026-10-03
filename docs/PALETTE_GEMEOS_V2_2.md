# GÊMEOS PALETTE V2.2 — Build 02.7

Referência: `4eb72ed08045258a14f64060bd966ae8c8459f19` (Build 02.6.1).
A composição aprovada permanece intacta. Esta revisão muda somente os três
tokens azuis em `styles/gemeos.css`, sem criar aplicações ou componentes novos.
A documentação V2.1 permanece como registro histórico da Build 02.4.

## Família azul final

| Token | Valor | Uso existente |
| --- | --- | --- |
| `--accent-blue` | `#3F708D` | Categoria ativa, microtextos, divisores |
| `--accent-blue-deep` | `#31576D` | Hover e foco sobre superfícies claras |
| `--accent-blue-light` | `#74A3BC` | Linhas da Hero, indicador ativo, progresso, filete institucional e foco sobre escuro |

O derivado `--text-accent-on-charcoal` mantém sua fórmula:
`color-mix(in srgb, var(--accent-blue-light) 90%, var(--surface-paper))`.
Os números do Processo continuam usando esse derivado acessível.

| Par | Contraste |
| --- | --- |
| Azul principal / off-white | 4,68:1 |
| Azul claro / grafite | 6,47:1 |
| Azul claro / carvão | 5,44:1 |
| Azul profundo / off-white | 6,74:1 |

Todos os pares superam 4,5:1 para texto pequeno. Nenhum microajuste adicional
de cor foi necessário; os três valores solicitados são usados exatamente.

Permanecem inalterados: grafite `#17191A`, carvão `#25282A`, grafite intermediário
`#303438`, off-white `#F2EFEA`, papel `#FAF8F4`, pedra `#B6B2AC`, aço `#747A7E`,
texto principal `#292B2C`, texto secundário `#626A6E`, madeira `#89664C` e âmbar
`#C49A67`. Nenhum fundo grande ou botão principal recebe azul. Fotografias,
crops, linhas, bordas e demais geometrias conservam a aplicação aprovada.

## Contato definitivo

WhatsApp confirmado pela Gêmeos: **+55 34 9927-1517**.
Número de configuração: `553499271517`.
Link base: <https://wa.me/553499271517>.

`config/site.js` centraliza o contato e `whatsappUrl()` continua responsável
pela validação do número e pela codificação UTF-8 da mensagem.

Mensagem geral: “Olá, Gêmeos! Vi o site e gostaria de solicitar um orçamento
para móveis planejados.”

O carrossel preserva as oito mensagens por ambiente, no padrão:
“Olá, Gêmeos! Gostaria de conversar sobre [ambiente] sob medida.”

Todos os sete CTAs existentes recebem o WhatsApp, `target="_blank"` e
`rel="noopener noreferrer"`. O aviso e o modal de contato provisório não são
exibidos com o número configurado; o código de fallback permanece como segurança.
Instagram preservado: <https://www.instagram.com/gemeosmoveis/>.
Logo oficial em alta/vetor e fotografias originais continuam pendentes.

## Evidência de QA

Build completo e verificação em Chromium nas larguras **360, 390, 768, 1440 e
1920px**. Resultados, contrastes, URLs e mensagens por ambiente registrados em
`docs/build-02-7-validation.json`. Nenhuma mensagem foi enviada no teste;
a navegação externa foi cancelada após exercitar os links e seus handlers.

Publicação somente em `build-01-gemeos`, como preview Vercel. Sem merge,
alteração de `main`, promoção para produção ou mudança no Montaggio.
