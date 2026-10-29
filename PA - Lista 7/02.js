let input = require("readline-sync")

let n = [];

for( let i = 0; i < 5; i++){
    n[i] = Number(input.question("SYSTEM | digite um numero: "));
}


for (let i = 0; i < 4; i++) {
    for(let k = 0; k < 4; k++){
        if(n[k] > n[k + 1]){
            let temp = n[k];
            n[k] = n[k + 1];
            n[k + 1]= temp;
        }
    }
}

    

for (let i = 0; i < 5; i++) {
    console.log(n[i]);
    
}