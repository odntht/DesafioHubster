
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
  // console.log(json);
  for (let i=0 ; i< produtos.length; i++){
    if (produtos[i].category.id == 15889) {
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

  function mudaCategoria(produtos, categoria) {

  }
