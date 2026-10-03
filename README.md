# Gêmeos Móveis Planejados — Demo

Projeto independente da AVERO Studio para a Gêmeos Móveis Planejados.

## Origem da base visual

Este repositório parte da versão aprovada do projeto Montaggio, preservada no repositório `Urimash9/montaggio-personalizados-demo` no checkpoint:

`checkpoint/montaggio-v2.3-base`

Commit de referência:

`d2cf26bc44f1a41b4fe3bc169380700e2ae9e78b`

## Regra de trabalho

- Não editar o repositório Montaggio para desenvolver a Gêmeos.
- Trabalhar neste repositório de forma independente.
- A primeira adaptação deve acontecer na branch `build-01-gemeos`.
- Não fazer merge em `main` sem revisão visual.

## Build 01 — Gêmeos

Composição editorial adaptada para design, execução e confiança, com grafite,
off-white, madeira quente e tons fendi. A arquitetura responsiva, os recortes,
sobreposições e o carrossel espacial vêm do checkpoint aprovado.

O HTML de `index.html` foi recomposto a partir dos 11 chunks e do refinamento
V2.3, preservando os frames e as regras de layout. Agora o conteúdo semântico
é entregue diretamente, sem depender de `document.write` ou de 12 requisições
para montar a página. Os arquivos de `approved/` permanecem intactos para
rastreabilidade; não são a fonte ativa da demo Gêmeos.

### Executar e buildar

Node.js 20 ou superior. Nenhuma dependência de execução ou instalação adicional.

```sh
npm run build
python3 -m http.server 4173 --directory dist
```

O build valida a sintaxe dos scripts da base preservada e os caminhos de imagens,
e gera `dist/`. `vercel.json` define apenas build e saída; não contém vínculo com
o projeto Montaggio. O push em `build-01-gemeos` deve gerar somente preview.

### Configuração e pendências

- `config/site.js`: WhatsApp, logo oficial, Instagram e mensagem centralizados.
  `whatsapp: null` é intencional: não reutilizar telefones históricos sem confirmação.
  O CTA abre uma conversa orientada ao Instagram enquanto o número está pendente.
- `config/assets.js`: todos os slots de fotos, dimensões, crops e status provisório.
  Substituir com arquivos originais da Gêmeos. Somente marcar `provisional: false`
  quando a imagem corresponder a um trabalho confirmado da empresa.
- O nome em texto no cabeçalho e rodapé é fallback para o arquivo oficial de logo.
  Nenhum símbolo GM foi redesenhado.
- Fotos do Márcio e da equipe, projetos reais, avaliações independentes e endereço
  completo ainda precisam ser disponibilizados/confirmados. Nenhum número de projetos,
  clientes, prêmios, data de fundação ou capacidade de fábrica foi inventado.
- Todas as imagens ativas são referências editoriais provisórias da base, identificadas
  na interface. As fotografias reais do Montaggio foram copiadas para preservar a árvore,
  mas não são exibidas como projetos Gêmeos.
- A demo tem `noindex, nofollow`. Title, description, headings e dados estruturados
  estão preparados para Coromandel/MG; rever indexação somente após validar os dados.

### Validação realizada

Build base antes da adaptação e build final aprovados. Chromium/Playwright em
360, 390, 768, 1440 e 1920 px: conteúdo, imagens, anchors, menu, carrossel por
botões/teclado, modal de contato, configuração única de WhatsApp e redução de
movimento verificados. Nenhum overflow, imagem quebrada ou erro de console.

Revisar visualmente a fotografia e o crop da hero, os títulos, a composição de
projetos e a narrativa institucional quando chegarem os assets reais.
