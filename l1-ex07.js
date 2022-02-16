var cont, id, sexo, contm=0, contf=0, velhom, novom, maiortot=0, menortot=0, acm=0, acm1=0, maioridm=0, menoridm=0, maioridf=0, menoridf=0, velhaf, novaf
for (cont=0; cont<5;cont++) {
    id=prompt("Insira a idade:")
    sexo=prompt("Insira o sexo (F para feminino/ M para masculino")
    if(sexo=="M"){
        contm++
        while(acm<1){
            velhom=id
            novom=id
            acm++
        }
        if(idd>velhom){
            velhom=idd
        }
        else{
            if(id<novom){
                novom=idd 
            }
        }
        if(id>=18){
            maioridm++

        }
        else{
            menoridm++
        }
    }
    if(sexo=="F"){
        contf++
        while(acm1<1){
            velhaf=id
            novaf=id
            acm1++
        }
        if(id>velhaf){
            velhaf=id
        }
        else{
            if(id<novaf){
                novaf=id
            }
        }
        if(id>=18){
            maioridf++
        }
        else{
            menoridf++
        }
    }
}
maiortot=maioridm+maioridf
menortot=menoridm+menoridf
alert(contm+" pessoas são do sexo masculino e !"+cont+" pessoas são do sexo feminino")
alert(maiortot+"pessoas são maiores de idade e "+menortot+" pessoas são menores")
alert("O homem mais velho tem "+velhom+" anos e o mais novo tem "+novom+" anos")
alert("A mulher mais velha tem "+velhaf+" e a mais nova tem "+novaf+" anos")
alert(maioridm+" homens são maiores de idade e "+maioridf+" mulheres são maiores de idade")