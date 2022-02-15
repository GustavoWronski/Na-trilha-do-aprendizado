var celsius, kelvin, farenheit

celsius=prompt("Insira o valor da temperatura em Graus Celsius")

farenheit=(parseFloat(celsius)*9/5)+32
alert("A temperatura convertida em farenheit é "+farenheit+"°F")

kelvin=parseFloat(celsius)+273.15
alert("A temperatura convertida em Kelvin é "+kelvin+"K")