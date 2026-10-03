# Montaggio — Base visual aprovada

Esta branch/main deve ser tratada como a referência de implementação da Montaggio.

## Regra de trabalho
- A versão Mobile V2 é a referência visual mestre.
- Não redesenhar ou reinterpretar a página.
- Refinamentos futuros devem preservar layout, tipografia, cards, shapes, alternância claro/escuro e carrossel 3D.
- A implementação aprovada está serializada em `approved/chunk-01.txt` … `approved/chunk-07.txt`.
- O `index.html` apenas recompõe e executa essa implementação no navegador.
- Antes de uma refatoração estrutural, reconstrua o HTML concatenando os chunks na ordem numérica e compare visualmente com a versão publicada.
- As imagens estão comprimidas apenas para manter a base leve no repositório; a curadoria/substituição definitiva de imagens é uma etapa posterior.

## Não fazer
- Não iniciar um novo layout do zero.
- Não substituir a linguagem visual por templates genéricos.
- Não aplicar reveal/fade-up global no scroll.
- Não descaracterizar o Mobile V2.
