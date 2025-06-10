
const key =""

function ColocarDadosNaTela(dados) {
    document.querySelector(".municipio").innerHTML ="Tempo em" + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".texto.temperatura").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity +"%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png
    // console.log(dados)

}


async function buscarMunicipio() {
    const dados = await fetch(`q=${municipio}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json)

    // console.log(dados)

    ColocarDadosNaTela(dados)
}



function cliqueiNoBotao() {
    const input = document.querySelector(".input-municipio").value

    // console.log(input)

    buscarMunicipio(municipio)
}