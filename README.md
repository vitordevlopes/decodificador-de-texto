<div>
  <h1 align="center">Decodificador De Texto</h1>
  <p align="center">
<img loading="lazy" src="https://img.shields.io/badge/STATUS-EM_DESENVOLVIMENTO-green"/>
<img loading="lazy" src="https://img.shields.io/gitea/stars/vitordevlopes/decodificador-de-texto"/>
</p>
</div>


## Introdução
Esse projeto é um um site que fornece uma ferramenta para criptografar e descriptografar textos. Foi criado por mim em um desafio fornecido pela Alura no Oracle One, a maior parte dos códigos foram feitos a partir de conhecimentos que adquiri nos cursos de HTML, CSS, a parte de JavaScript apesar de um conhecimento maior, busquei ajuda algumas vezes na internet, principalmente nas documentações da [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript) e da [w3schools](https://www.w3schools.com/js/).

## Funcionalidades
Ao inserir qualquer texto, desde que seja com letras minúsculas e sem acento, o programa consegue criptografar ou descriptografar ele ao ser chamada umas das funções que estão nos botões 'Criptografar' ou 'Descriptografar'. Outra ferramenta adicionada para melhorar a experiência do usuário é o botão de copiar o texto gerado por essas funções.

## Tecnologias utilizadas
HTML, CSS e JavaScript foram as linguagens utilizadas.

## Sobre o JavaScript
Utilizei nesse projeto três funções dentro do Javascript, as funções de criptografia utilizam o método replace(), porém acredito que elas precisam de algumas correções.
A função de copiar utiliza a [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API) com o método writeText(), tentei usar outras abordagens tentando copiar o contéudo de uma tag &lt;p&gt; por exemplo, porém não tive sucesso.

# Lógica da criptografia

O algoritmo para criptografar ou descriptografar o texto é bem simples, basta seguir essa lógica ou o inverso:

- A letra "e" é convertida para "enter".
- A letra "i" é convertida para "imes".
- A letra "a" é convertida para "ai".
- A letra "o" é convertida para "ober".
- A letra "u" é convertida para "ufat".
