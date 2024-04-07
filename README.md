# Boas vindas ao exercício Exception Handling

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Seu exercício será realizado a partir do código que estão nos arquivos `index.html` e `script.js`, tire um tempo para entender os códigos e o que eles fazem.

- A aplicação pede à pessoa usuária que informe dois números para realizar uma soma. Esses números são inseridos através dos `inputs`;

- Ao clicar o botão, a função `sum` é chamada, capturando o valor escrito nos `inputs` e realizando a operação. Antes, é necessária a conversão do valor usando o [Number()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number), pois ele chega à função em forma de `string`. Há também outras formas de se converter uma `string` em um número, como o [parseInt()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt) e o [parseFloat()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat);

- Ao final, a função `sum` imprime o valor em um parágrafo e limpa os `inputs` para que a pessoa usuária possa inserir novos valores.

Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?

</details>

<details>
  <summary><strong>📝 Habilidades</strong></summary><br />

Nesse Execício, você será capaz de:

- Utilizar a tag `<script>` para inserir código JavaScript na sua página HTML;
- Utilizar _throw_ para lançar um erro, na sintaxe `throw new Error()`;
- Utilizar _try_ e _catch_ para tentar executar um bloco de código e capturar um erro;
- Utilizar _finally_ para executar um comando após o retorno do _try_ ou _catch_.
</details>

# Requisitos

Você deve criar erros personalizados para cada exercício, as mudanças devem ser feitas no arquivo `script.js`!

## Requisito 1 - Lance um erro em caso de input vazio

<details>
<summary> Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo? Caso a pessoa usuária não preencha nenhum input, ou preencha apenas um input, lance um erro.</summary><br/>
</details>

## Requisito 2 - Lance um erro em caso de valores não numéricos

<details>
<summary> Caso os valores inseridos nos `inputs` pela pessoa usuária não sejam números, lance um erro.</summary><br/>
</details>

## Requisito 3 - Apague os inputs ao clicar no botão de realizar a soma

<details>
<summary> Ao clicar no botão para realizar a soma os inputs devem ser apagados.</summary><br/>
</details>