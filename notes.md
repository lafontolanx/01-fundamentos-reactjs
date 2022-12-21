## Forma alternativa de formatar data:
    
```js
const formattedDate = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'full',
    timeStyle: 'short'
}).format(publushedAt) 
``` 

## Biblioteca para formatar data:

    npm i date-fns

## Programação imperativa

O que deve ser feito (passo-a-passo).

## Programação declarativa

Quais as condições para eu ter o resultado final.

## Key no react
## Por que única?

3 momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente.

------------------

a key ajuda o React a entender o que já estava em tela e o que vai entrar em tela. Sem precisar renderizar todo o componente denovo.

------------------

## Por que não posso usar o índice (index) do array?

```js
const posts = [1, 2, 3, 4, 5]
// index = 0, 1, 2, 3, 4

// caso eu mude de posição algum  dos posts, o índice no array não vai mudar de posição tbm

const posts = [1, 2, 5, 4, 3]
// index = 0, 1, 2, 3, 4
```

Por esse motivo não podemos utilizar o index como key!

## Comunicação entre componentes:

Dentro do react nós podemos passar também funções como parâmetro em um componente, para fazer a comeunicação entre componentes.

## Imutabilidade

* As variáveis não são alteradas, mas sim recriadas. Nós criamos um novo valor (um novo espaço na memória);

* Mais performático, o react consegue identificar que o valor foi alterado e renderizar apenas o que foi alterado (comparando o valor anterior com o novo valor).


