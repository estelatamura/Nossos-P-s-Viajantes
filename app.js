//--console.log(dados);-- para conferir se os dados ou outro valor estão corretos no console do navegador

// --function-- + nome da função indicada no HTML + () (parenteses): indica uma ação programada que será executada 1x quando essa função for acionada 
function pesquisar() {

// --let-- para declarar/criar uma variavel + nome ue queremos dar a ela
let section = document.getElementById("resultados-pesquisa") //document. indica o elemento do html para compor a variavel

let campoPesquisa = document.getElementById("campo-pesquisa").value //value cria condição de valores indicados????


if(campoPesquisa == "") {
    section.innerHTML = "<p>Busca vazia. Tente outra vez</p>"
    return
}


campoPesquisa = campoPesquisa.toLowerCase() //transformar tudo o que for digitado no campo pesquisa em letras minúsculas

// inicializa uma string vazia para armazenar os resultados
let resultados = ""; //conjunto referente ao agrupamento de links de lugares  
let titulo = "";  
let descricao = "";
let tags = "";

// --for -- condição para ação (para cada dado dentro da lista de dados) uma estrutura irá se repetir
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        //criar condicional: se titulo ou descrição includes campoPesquisa
    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes (campoPesquisa) || dado.tags.includes(campoPesquisa)) {
        //--console.log(dado.titulo.includes(campoPesquisa))-- ação para o console apontar true/false para palavras buscadas na área de pesquisa

            // cria um novo elemento HTML para cada resultado
    resultados += `
        <div class="item-resultado"> 
            <p class="descricao-meta">
                 <a href=${dado.link} target="_blank">${dado.titulo}</a>
            </p>
            <p class="descricao-meta2">
                ${dado.descricao}
            </p>
        </div> 
    `}
    }

    if(!resultados) {
        resultados = "<p>Nenhum resultado encontrado. Vamos buscar novamente?</p>"
    }

    section.innerHTML = resultados
}
// AÇÃO REALIZADA: colocamos todo a estruturação anteriormente construída durante a aula dentro da funcion (função) para que os resultados somente apareçam quando o botão "pesquisar" for acionado


// let section = document.getElementById("resultados-pesquisa")
// // usamos --console-- para..........
// console.log(section);

// let resultados = "" //aqui está organizado o agrupamento de de links de lugares

// Usamos então o --for-- como um condicionante (condição para determinada ação)
// para cada --DADO-- (um item listado dendo da "pasta" dados) dentro da --lista de dados--(variável já criada) - queremos que a estrutura se repita

// for (let dado of dados) {
// resultados += `
//     <div class="item-resultado"> 
//         <p class="descricao-meta">
//              <a href=${dado.link} target="_blank">${dado.titulo}</a>
//         </p>
//         <p class="descricao-meta2">
//             ${dado.descricao}
//         </p>
//     </div> 
//     `
// }
// section.innerHTML = resultados
   

// !!!EXPLICAÇÃO DAS AÇÕES ACIMA:

    //section.innerHTML é a ação que faz com que o conteúdo fique visível na página
// podemos organizar da seguinte maneira a listagem de lugares reduzindo o código original estruturado no HTML

// section.innerHTML += `
//    <div class="item-resultado"> 
//        <p class="descricao-meta">
//             <a href=${dado.link} target="_blank">${dado.titulo}</a>
//        </p>
//        <p class="descricao-meta2">
//            ${dado.descricao}
//        </p>
//    </div> 
// `

// 1- Quando uso innerHTML = eu construo uma lista de códigos dos items dentro da variavel
// 1.2- = Quando uso innerHTML += (incluindo o +) eu indico uma somatória dos dados que compoem a variavel
// 2 - subistituir a informação específica que era fixa para uma posição de variavel - uso então o símbolo            $(indicando um valor variavel){colocar entre chaves dado(item).atributo que quero citar}  


//Boas práticas de estruturação: 
// 1- passar o código estruturado da section para um conjunto nomeado por texto ("resultado")
// 2- criar a "section" indicando o conjunto "resultado"