//Observe o trecho de código abaixo:
 //int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA); 

 let soma = 0;
 let indice = 12
 for(let k = 1; k < indice;k++){
      soma = soma + k; 
 }

 console.log(soma);