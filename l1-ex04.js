var n=0, val, cont=0, ant1=0, ant2=1  
valores=prompt("Insira a quantidade de elementos para formar a sequência de Fibonacci:")
while(cont<valores){
    document.write("<t2> "+n+" </t2>")
    n=ant1+ant2
    ant2=ant1
    ant1=n 
    cont++
}