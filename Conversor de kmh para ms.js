//Conversão de para km/h m/s 

//1 km/h = 3,6 m/s ou 3,6 m/s = 1 km/h
var kmPorHora = 1//Valor padrão para representar km/h
var metrosPorSegundo = 3.6//Valor padrão para representar m/s

var kmPorHora = prompt("Digite um número para converter de km/h para m/s")
parseInt(kmPorHora)//Convertendo para números inteiros tudo que for digitado no prompt

kmPorHora = kmPorHora / metrosPorSegundo

var kmPorHoraInteiro = kmPorHora.toFixed(1)//O resultado terá apenas 1 casa, para representar um número inteiro
alert(kmPorHoraInteiro + "m/s") 

//Conversão de m/s para km/h
var metrosPorSegundo = prompt("Digite um número para converter de m/s para km/h")
parseInt(metrosPorSegundo)//Convertendo para números inteiros tudo que for digitado no prompt

metrosPorSegundo = metrosPorSegundo * kmPorHora 

var metrosPorSegundoInteiro = metrosPorSegundo.toFixed(1)
//Exibindo na tela o valor digitado no prompt
alert(metrosPorSegundoInteiro + "km/h")