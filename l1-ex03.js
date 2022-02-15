var n1, n2, n3, n4, med

n1=prompt("Insira a primeira nota do aluno:")
n2=prompt("Insira a segunda nota do aluno:")
n3=prompt("Insira a terceira nota do aluno:")
n4=prompt("Insira a quarta nota do aluno:")
med=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4
if(med>9 && med<=10){
    alert("Em conceito, a nota "+med+" é A")
}
else{
    if(med>=8 && med<=8.9){
        alert("Em conceito, a nota "+med+" é B")
    }
    else{
        if(med>=7 && med<=7.9){
            alert("Em conceito, a nota "+med+" é C")
        }
        else{
            if(med<7){
                alert("Em conceito, a nota "+med+" é D")
            }
        }
    }
}