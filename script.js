
// Chamada AJAX (GET) da API
var jqxhr = $.get( "http://5d556e6936ad770014cce06d.mockapi.io/api/v1/catalog/products", function() {
  // console.log( "Dados da API retornados com sucesso!" );
})
.done(function() {
  let json = JSON.parse(jqxhr.responseText);
  constroiCategorias(json.categories);
  constroiProdutos(json.products);
  // console.log( JSON.parse(jqxhr.responseText) );
})
.fail(function() {
  alert( "Erro ao solicitar a API!" );
});

// Fim da Chamada AJAX


// FUnção que constrói a lista de Categorias(Filtros)
function constroiCategorias(categorias) {
  for (let i = 0; i < categorias.length; i++) {
    if (i == 5) {
      $("#categorias").append(`<li class="list-group-item shadow selecionado">` + categorias[i].name + `</li>`);
    } else {
      $("#categorias").append(`<li class="list-group-item shadow ">` + categorias[i].name + `</li>`);
    }
  }
}

// FUnção que constróí a lista de Produtos
function constroiProdutos(produtos){
  console.log(produtos);
  for (let i=0 ; i< produtos.length; i++){
    if (i % 2 == 0){
      console.log('par')
    }
  $("#produtos").append(`
    <button id="` + produtos[i].id + `" type="button" class="btn btn-secondary ` + produtos[i].category.id + `" data-toggle="tooltip" data-placement="bottom" title="` + produtos[i].description + `">
      <img src="` + produtos[i].photo + `" alt="Foto do ` + produtos[i].name + `" height="42" width="42">
      <span>` + produtos[i].name + `</span>
      <span> R$` + produtos[i].salePrice + `</span>
    </button>`);
}
}
