# Gêmeos — Curadoria Build 01

Origem: checkpoint/montaggio-v2.3-base,
commit d2cf26bc44f1a41b4fe3bc169380700e2ae9e78b.

Todos os slots ativos estão em `config/assets.js`, com caminho, alt, dimensões,
posição do crop e `provisional: true`. As imagens são editoriais/ilustrativas
herdadas da base; nenhuma representa trabalho executado pela Gêmeos.

| Slot | Referência provisória | Substituição esperada |
| --- | --- | --- |
| hero | cozinha-hero.webp | Cozinha clara com bancada preta; original Gêmeos |
| aboutMain / aboutDetail | editorial/sobre | Márcio na produção e equipe trabalhando |
| environments | ambientes/referencias | Cozinhas, salas, quartos, home office, gourmet e comercial |
| gallery | ambientes/referencias | Referências reais Gêmeos para o carrossel |
| commercial | home-office-executivo.webp | Recepção/escritório real |
| glass / wood / light | editorial/materialidade | Detalhes reais de acabamento, materiais e luz |
| projects | ambientes/referencias | Quatro projetos reais em composição assimétrica |
| cta | cta-adega.webp | Foto real com boa área para contraste do texto |

Não utilizar a fachada na hero. Não alterar artificialmente os móveis nas
fotografias reais. Remover a indicação provisória de um slot apenas quando a
proveniência da fotografia estiver confirmada.

O diretório `assets/images/reais/` contém fotografias Montaggio copiadas como
parte da árvore funcional original. Nenhum componente ativo utiliza esses arquivos.

Logo: nenhum arquivo oficial GM foi localizado. `config/site.js` tem `logo: null`;
o nome em texto é um fallback, não uma identidade nova.
