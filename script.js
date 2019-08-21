
// Chamada AJAX (GET) da API
jqxhr = $.get( "http://5d556e6936ad770014cce06d.mockapi.io/api/v1/catalog/products", function() {
  console.log( "Dados da API retornados com sucesso!" );
  // var json = jqxhr.responseJSON;
  console.log(jqxhr.responseJSON.products)
  //Constroi a lista de categorias (bebidas, pratos, massas...)
  constroiCategorias(jqxhr.responseJSON.categories);
  //Constroi a lista de produtos
  constroiProdutos(jqxhr.responseJSON.products, 15889);
  $("#categorias li").click(function(){
    mudaCategoria(this, jqxhr.responseJSON)
    // console.log(this.id);
  });
})
.fail(function() {
  alert( "Erro ao solicitar a API!" );
});
// Fim da Chamada AJAX

// console.log(jqxhr);

// FUnção que constrói a lista de Categorias(Filtros)
function constroiCategorias(categorias) {
  for (let i = 0; i < categorias.length; i++) {
    //Resolvi deixar a de bebida como 'default' para aparecer
    if (i == 5) {
      $("#categorias").append(`<li class="list-group-item shadow selecionado" id="` + categorias[i].id + `"> ` + categorias[i].name + `</li>`);
    } else {
      $("#categorias").append(`<li class="list-group-item shadow" id="` + categorias[i].id + `">` + categorias[i].name + `</li>`);
    }
  }
}

// FUnção que constróí a lista de Produtos
function constroiProdutos(produtos, padrao){
  $("#produtos").html(``);
  for (let i=0 ; i< produtos.length; i++){
    //Como as bebidas ficaram 'default' no controiCategorias, aqui também filta apenas para exibir as bebidas
    if (produtos[i].category.id == padrao) {
      $("#produtos").append(`
        <div class="card mb-3 col-6 ` + produtos[i].category.id + `" id="` + produtos[i].id + `" data-toggle="tooltip" data-placement="bottom" title="` + produtos[i].description + `">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img class="img-fluid rounded " src="` + produtos[i].photo + `" alt="Foto do ` + produtos[i].name + `">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h6 class="card-title">` + produtos[i].name + `</h5>
                <p class="card-text"> R$ ` + produtos[i].salePrice + `</p>
              </div>
            </div>
          </div>
        </div>
        `);
      }
    }
  }

// var teste = jqxhr;

function mudaCategoria(selecionado, json) {
  //Remove a classe 'selecionado' da lista de Categorias(filtros)
  $("#"+selecionado.id).parent().children().removeClass("selecionado");
  //Adiciona a classe 'selecionado' na categoria que foi clicada
  $("#"+selecionado.id).addClass("selecionado");
  console.log(json.products);
  constroiProdutos(json.products, selecionado.id);

}
