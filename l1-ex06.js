var val, maior, menor, cont1, cont2=0
for(cont1=0; cont1<5; cont1++){
    val=prompt("Insira um número")
    while(cont2<1){
        maior=val
        menor=val
        cont2++
    }
    if(val>maior){
        maior=val
    }
    else{
        if(val<menor){
            menor=val
        }
    }
}
alert("O maior valor digitado foi" +maior)
alert("O menor valor digitado foi" +menor)