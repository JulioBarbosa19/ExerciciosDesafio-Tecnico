function letterA(str){
    let quantA = 0;
    const splitStr = str.split("");

    for(let i = 0; i <= splitStr.length; i++){
        if(splitStr[i] == 'a' || splitStr[i] == 'A'){
                       quantA = quantA + 1;
       }
    }
    return quantA;

}

console.log(letterA('Amanha vai ser outro dia'));