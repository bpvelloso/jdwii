

function loadData() {
    $.getJSON('./dados.json', function(dados) {
        // Faça algo com os dados, por exemplo, exibir na página
        var acJogos = $('#acJogos');
        let html = '';
        $.each(dados, function(i, item) {
          console.log(item);
           html += ''+
                '<div class="accordion-item">'+
                  '<h2 class="accordion-header" id="panelsStayOpen-heading'+item['codigo']+'">'+
                    '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" '+
                            'data-bs-target="#panelsStayOpen-collapse'+item['codigo']+'" aria-expanded="false" aria-controls="panelsStayOpen-collapse'+item['codigo']+'">'+
                    '</p>'+item['nome']+'</p><img src='+item['imagem']+' />'+  
                    '</button>'+
                  '</h2>'+
                  '<div id="panelsStayOpen-collapse'+item['codigo']+'" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-heading'+item['codigo']+'">'+
                    '<div class="accordion-body ">';
                      //item['musicas']+

                    $.each(item['musicas'], function(i, musica) {
                        html += '<div class="card"><h6 class="card-title">'+
                                           musica['autor']+' </h6><div class="card-body"> '+musica['titulo']+
                                '<a target="_blank" href="https://www.youtube.com/results?search_query=\''+musica['titulo']+' '+musica['autor']+'\'">Play</a>'+
                                '<a target="_blank" href="https://www.google.com/search?q=\''+musica['titulo']+' '+musica['autor']+'\'">Letra</a>'+
                                '</div></div>';
                    });
                
            html +=  '</div>'+
                  '</div>'+
                '</div>';
        });
        acJogos.html(html);
      });
      
}


//Registra o serviceWorker da aplicação para cache de recursos offline
if ('serviceWorker' in navigator) {  
  navigator.serviceWorker.register("./service-worker.js");
}

//Verifica se o app pode ser instalado e mostra o botão
var pedidoInstalacao;
window.addEventListener('beforeinstallprompt', function(installPrompt) {
  if(installPrompt){
      $("#installAppBt").show();
      pedidoInstalacao = installPrompt;
  }
});

//Inicia a instalação do app
function installApp() {
  pedidoInstalacao.prompt(); 
}
