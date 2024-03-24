## Explicação dos algoritmos implementados em Eval.js

Alguns conceitos interessantes de Estruturas de Dados e Algoritmos foram implementados na Calculadora para que o cálculo do resultado seja feito sem o uso da função built-in ´eval()´. Vamos passar pelos algoritmos usados os explicando passo a passo.
## Tabela de conteúdo

- [ValidaParensis](#ValidaParentesis)
- [ExpressaoComoArray](#ExpressaoComoArray)
- [Notação Posfixa x Notação Infixa](#posfixaxinfixa)
- [InfixaParaPosfixa](#InfixaParaPosfixa)
- [ResolveExpressao](#ResolveExpressao)
- [Aprendizados](#Aprendizados)

## ValidaParentesis

A função ValidaParentesis recebe como parâmetro uma expressão matemática em forma de String e valida os parêntesis da expressão.

O algoritmo funciona empregando a Estrutura de Pilha, sempre que um caractere de abertura da parêntesis é encontrado ("("), ele é empilhado na Pilha, e sempre que um caractere de fechamento de parêntesis é encontrado (")") o caractere no topo da Pilha é desempilhado, caso a pilha esteja vazia ao encontrar o caractere de fechamento ou sobre caracteres na pilha ao final da execução, a expressão matemática não é válida.
## ExpressaoComoArray

A função ExpressaoComoArray recebe uma expressão matemática em forma de String e a retorna na forma de um array.

A função passa por todos os caracteres da entrada, caso seja encontrado um número, o dígito é salvo como String e vai sendo concatenado, quando um simbolo de operação matemática é encontrado (+, -, *, /, ^) o número que foi salvo como String é empilhado e resetado, e a operação encontrada também é empilhada.
## InfixaParaPosfixa

### Notação Posfixa x Notação Infixa
Este é o algoritmo principal do programa mas antes de explicar o seu funcionamento é necessário entender o que são notação Infixa e notação Posfixa de operações.

A forma comum de se escrever expressões matemáticas é a ordem Infixa, onde os operadores aritméticos são colocados **entre** os seus operandos, como por exemplo: 2 + 2, 30 * 2 + 9. 

Já a forma Posfixa posiciona os operadores **depois** de seus operadores, como: 10 10 +, 4 2 2 3 ** + **. Essa notação é bem difícil para o ser humano ler, mas ajuda o computador ao fazer cálculos porque a expressão pode ser lida como uma simples Pilha, além de simplificar expressões que escritas de forma convencional seria necessário o uso de parêntesis, o que não acontece na forma Posfixa.

### O algoritmo

O algoritmo funciona com duas Pilhas, uma para a expressão total e outra apenas para as operações, lendo a expressão, quando é encontrado um número ou um parêntesis abrindo, eles são empilhados na pilha da expressão; já quando é encontrado um parêntesis de fechamento os operadores na Pilha são colocados na Pilha da expressão até que seja encontrado o parêntesis de abertura, dessa forma garantindo a ordem correta de resolução; Quando é encontrado uma operação é necessário verificar a Pilha de operações e comparar se a operação na Pilha tem mais prioridade que a operação encontrada, caso sim, ela deve ir para a Pilha da expressão, quando uma operação na Pilha tiver menos prioridade que a operação encontrada, ela vai ser empilhada na Pilha da expressão. Ao final do algoritmo existe a possibilidade de sobrar operações na Pilha de operações, dessa forma é necessário esvaziar a Pilha colocando tudo na pilha da expressão, assim finalizando o algoritmo e retornando a expressão na forma Posfixa.
## ResolveExpressao

Finalmente podemos resolver a expressão matemática inserida pelo usuário, foi necessário passar por todos os passos anteriores para garantir que a expressão está correta, porque caso algo dê errado nos algoritmos anteriores foi causado por uma expressão má escrita, e também para formatar a expressão de uma forma que o computador entenda melhor e para que o algoritmo de resolução seja o mais simples possível.

O Algoritmo recebe a expressão já escrita na forma Posfixa e com a ajuda de uma Pilha vai encontrar o resultado. Lendo a expressão sempre que um número é encontrado ele é empilhado; já quando uma operação é encontrada, é necessário desempilhar dois operadores e resolver essa simples operação, o resultado também é empilhado. Dessa forma retornando a primeira posição da Pilha (e única caso tudo tenha corrido como planejado) temos o resultado da expressão matemática inserida pelo usuário.
## Aprendizados

Construir uma calculadora usando Javascript não é uma tarefa muito complicada, tanto que é visto como um projeto bem iniciante, mas o meu objetivo ao empregar uma função de resolução de expressões matemáticas "na mão" foi deixar este projeto mais interessante mostrando o poder da Pilha como Estrutura de Dados, porque ela é a estrela do projeto, a sua maneira de funcionar é o que viabiliza os algoritmos empregados. Em conclusão, depois deste projeto eu *acho* que aprendi bem o que é uma Pilha e como a utilizar ao meu favor ;).