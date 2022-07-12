function verificaPalindromo(string){
   if(!string) return "string inexistente!";

   return string.split("").reverse().join("") === string;
   // split: divide a string -- reverse: inverte a order da string -- join: junto todos os caracteres
}

//console.log((verificaPalindromo("omo")));

function verificaPalindromo2(string){
    if(!string) return "string inexistente!";

    for(let i = 0; i<string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(verificaPalindromo2("fada"));