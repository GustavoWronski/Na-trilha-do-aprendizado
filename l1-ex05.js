var n, raz, cont, pg, quant
n=prompt("Insira o primeiro termo")
raz=prompt("Insira a razão")
quant=prompt("Insira a quantidade de termos para a progressão geométrica")
pg=n
document.write("A progressão geométrica é ( ")
for(cont=1;cont<=quant;cont++){
    if(cont<quant){
        document.write(pg+" , ")
    }
    else{
        document.write(pg+" ) ")
    }
    pg=pg*raz
}