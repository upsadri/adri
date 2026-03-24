let numero1 = 10
let numero2 = 5
let operacao = "/"

if (operacao === "+"){
 let soma = numero1 + numero2
 console.log ("resultado", soma)
}
else if (operacao === "-"){
    let subtracao = numero1 - numero2
    console.log ("resultado",subtracao)
}
else if (operacao === "*"){
    let multiplicacao = numero1 * numero2
    console.log ("resultado", multiplicacao)
}
else if (operacao === "/" && numero2 == 0 ){
    console.log ("erro")
}
else if (operacao === "*" && numero1 >100 && numero2 >100 ){
    console.log ("erro")
}

else if (operacao === "/"){
    let divisao = numero1 / numero2
    console.log ("resultado", divisao)
}
else{
    console.log ("erro operacao")
}