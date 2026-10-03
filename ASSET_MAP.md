# Curadoria Gêmeos — Build 02

Diretório único: `assets/images/gemeos/`. Manifesto original preservado ao lado dos arquivos.
Todas as fotografias são material real da Gêmeos em screenshot/crop temporário,
com `provenance: 'gemeos-real'` e `needsOriginal: true`. A marcação de qualidade
não altera a proveniência nem gera aviso de imagem ilustrativa ao visitante.

| Arquivo | Uso ativo |
| --- | --- |
| hero-cozinha.webp | Hero; Cozinhas na seleção de ambientes; carrossel 01; projeto principal p1 |
| projeto-quarto-reflecta.webp | Quartos na seleção; carrossel 03; projeto p2; detalhe de reflecta |
| projeto-sala-tv.webp | Salas na seleção; carrossel 02; projeto p3 |
| projeto-sala-integrada.webp | Carrossel 06; projeto p4 |
| projeto-home-office.webp | Home office na seleção; carrossel 04 |
| area-gourmet.webp | Áreas gourmet na seleção; carrossel 05 |
| projeto-jantar-ripado.webp | Apoio institucional; carrossel 07; detalhe de madeira/ripado |
| projeto-quarto-infantil.webp | Carrossel 08 |
| comercial-oab.webp | Seção comercial; Comercial na seleção de ambientes |
| processo-equipe.webp | Fotografia editorial junto às quatro etapas do processo |
| institucional-marcio.webp | Imagem principal institucional, preservando o contexto de produção |
| painel-iluminacao.webp | Detalhe de iluminação; fundo do CTA final |
| logo-referencia.webp | Referência raster original no header e rodapé, acompanhada do nome em texto |

Projetos residenciais/comerciais: `isRealProject: true`.
Márcio e equipe: `isRealProject: false`, mantendo a proveniência real.
Logo de perfil: configuração independente `logoReference`; oficial ainda pendente.

Os crops ficam centralizados em `config/assets.js` (`position`, `positionMobile`)
e são aplicados por variáveis CSS. Dimensões intrínsecas são reservadas no HTML.
A estrutura mantém quatro fotografias de pesos diferentes no portfólio e oito
no carrossel espacial; não foi convertida em grade uniforme de catálogo.

Os arquivos originais do ZIP foram incorporados sem filtros, reconstrução ou
alteração dos móveis. CSS define apenas enquadramentos e contrastes necessários
para a leitura do texto. Elementos dos Stories podem permanecer no material.
A OAB é parte da recepção real, sem alegação de parceria. Fachada não utilizada.

Assets históricos Montaggio permanecem no repositório; nenhum componente ativo
aponta para eles. Origem estrutural preservada: `checkpoint/montaggio-v2.3-base`,
commit `d2cf26bc44f1a41b4fe3bc169380700e2ae9e78b`.
