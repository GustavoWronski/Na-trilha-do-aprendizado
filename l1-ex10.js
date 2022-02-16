var nome, val, cont=0, cont1=2
nome=prompt("Digite seu nome:")
val=prompt("Digite um número para ser adivinhado")
if(val==5){
    alert("Você acertou "+nome+"!")
}
else{
    alert("Você errou "+nome+" o número está entre "+cont1+" e 10")
    cont1=cont+2
    while(val!=5 && cont<3){
        if(cont<2){
            val=prompt("Digite um número:")
            if(val==5){
                alert("Você acertou "+nome+"!")
            }
            else{
                alert("Você errou "+nome+"! O número está entre "+cont1+" e 8")
                cont1=cont1+2
            }
        }
        else{
            if(cont==2){
                val=prompt("Digite um número:")
                if(val==5){
                    alert("Você acertou "+nome+"!")
                }
                else{
                    alert(nome+"Você errou "+nome+", o número correto era 5")
                }
            }
        }
        cont++
    }
}