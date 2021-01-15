var nombreRestaurante="Tacomiendo";
var orden=[];

window.addEventListener("DOMContentLoaded", function(){
  actualizarCarro();
  //monitorear agregar platillo a ordern
  var platillos = document.querySelectorAll(".comida");
  for (var platillo of platillos){
    platillo.addEventListener("click", function(){
      var titulo = this.dataset.title;
      orden.push(titulo);
      actualizarCarro();
    });
  }
  //monitoreando el click de cancelar
  var enlaceCancela = document.querySelector("#reiniciar");
  enlaceCancela.addEventListener("click", function(){
    var confirma = confirm("Seguro que quieres cancelar?");
    if (confirma){
      orden=[];
      actualizarCarro();
    }
  });

});

function actualizarCarro() {
  var html = "";
  for (var platillo of orden){
    html += "<li>" + platillo + "</li>";
  }
  var ul = document.querySelector("#carro ul");
  ul.innerHTML = html;

  var carro = document.querySelector("#carro");
  if (orden.length==0){
    carro.style.backgroundColor="gray";
  } else {
    carro.style.backgroundColor="#006";
  }

}
