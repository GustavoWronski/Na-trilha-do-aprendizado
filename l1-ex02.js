var val, resp, dol, rs, d, r

resp=prompt("Digite 1 para coverter para dólar e 2 para real")
if(resp==1){
    d=prompt("Insira o valor a ser convertido:")
    dol=parseFloat(d)/5.47
    alert("O valor convertido de Real (BRL) para Dólar (USD) é"+dol)
}
else{
    r=prompt("Insira o valor a ser convertido:")
    rs=parseFloat(r)*5.47
    alert("O valor convertido de Dólar (USD) para Real (BRL) é"+rs)
}