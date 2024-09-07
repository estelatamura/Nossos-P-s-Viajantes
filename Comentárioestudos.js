function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga o elemento HTML no console para verificação
  
    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa
  
    // Itera sobre cada dado na lista de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
      // Constrói o HTML para cada item da pesquisa, formatando com template literals
      resultados += `
        <div class="item-resultado"> <p class="descricao-meta"> <a href=${dado.link} target="_blank">${dado.titulo}</a> </p>
          <p class="descricao-meta2"> ${dado.descricao}
          </p>
        </div>
      `;
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }