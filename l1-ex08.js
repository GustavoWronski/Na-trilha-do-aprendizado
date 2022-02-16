var fat=1, val
val=prompt("Insira o valor para gerar o fatorial:")
for(fat=1; val>1; val=val-1){
    fat=fat*val
}
alert("O fatorial do número inserido é" +fat)