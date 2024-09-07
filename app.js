function pesquisar () {
// Seleciona a seção HTML onde os resultados serão exibidos
        let section = document.getElementById ("resultados-pesquisa")
        console.log(section);

         // Obtém o valor do campo de pesquisa e o converte para minúsculas
let campoPesquisa = document.getElementById ("campo-pesquisa").value

// Se o campo de pesquisa estiver vazio, não realiza a pesquisa
if (campoPesquisa == "") {Return};

// Inicializa uma string vazia para armazenar os resultados da pesquisa
campoPesquisa = campoPesquisa.toLowerCase();
console.log(campoPesquisa);

        let resultados = "";
        let titulo = "";
        let descricao = "";
        let tags = "";
        // Itera sobre cada dado no conjunto de dados
        for (let dado of dados) {
  // Converte o título, descrição e tags para minúsculas para facilitar a comparação
                let titulo = dado.titulo.toLowerCase();              
                titulo = dado.titulo.toLowerCase();
                descricao = dado.descricao.toLowerCase();
                tags = dado.tags.toLowerCase();

                  // Verifica se o termo de pesquisa está contido em alguma das propriedades do dado
                if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

                        resultados += `
                        <div class="item-resultado">
                        <img src="${dado.imagem}">
                                <h2> 
                                    <a href="#" target="_blank">${dado.titulo} </a> 
                                </h2>
                                <p class="descricao-meta">${dado.descricao}</p>
                                <a href="${dado.link}" target="_blank"> disponivel agora</a>
                               </div>
                        `;
                }

        }
// Se não houver resultados, exibe uma mensagem
        if(!resultados){
                resultados = "<p>Não foi encontrado</p>";
        }
        
        section.innerHTML = resultados;
}