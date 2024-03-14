// O que acontece ao tentar reatribuir um valor a const idade? ou seja, criar uma segunda const idade = 30?
// R = Vai ocorrer um erro durante a execução do código, pois uma constante não pode ser mudada posteriormente depois de ser declarada.
//const idade = 25;
//console.log(idade); 

////////////////////////////////////////////////////////////////////////


//O que acontece ao chamar a let x dentro e fora do escopo? 
//A variável só é acessível dentro do bloco em que foi declarada. Se for declarada fora do escopo, vai ocorrer um erro dizendo que não foi encontrada.

//Escopo refere-se ao contexto no qual as variáveis e funções são definidas e acessadas.
//Nesse caso as chaves delimitam o nosso escopo

{
    //let x = 10;
    //console.log(x); 
}
 //console.log(x);



///////////////////////////////////////////////////////////////////////

//Ainda sobre escopo explique a diferença dos console.log
//Let cria uma variável com escopo de bloco, enquanto var cria uma variável com escopo de função ou escopo global, dependendo do contexto em que é declarada.

{
    //let x = 10;
    //var y = 20;
}

//console.log(x);
//console.log(y);

///////////////////////////////////////////////////////////////////////

//O que acontece nessa declaração, explique sobre o Hoisting
//O hoisting move a declaração da variável a para o topo do escopo, mas não move sua inicialização, então a é undefined. Para b, o hoisting não ocorre da mesma maneira com let, então você recebe um erro quando tenta acessá-lo antes de sua declaração.

//console.log(a); 
//var a = 5;
//console.log(b);
//let b = 10;


/////////////////////////////////////////////////////////////////////////////////

//No código abaixo apresenta um erro, qual?
//Em JavaScript, quando você declara uma variável com let, você não pode redeclará-la no mesmo escopo. Portanto, a segunda declaração let y = 20; resultará em um erro.

//var x = 5;
//var x = 10;
//console.log(x); 

//let y = 15;
//let y = 20; 
//console.log(y); 


//// Escreva um programa que print a primeira letra dessa variavel 

let nomeCompleto = 'eduardo';
let primeiraLetra = nomeCompleto.charAt(0);
console.log(primeiraLetra);

//sua lógica para pegar a primeira letra 
/// const letraInicial = ...
//console.log(letraInicial)







