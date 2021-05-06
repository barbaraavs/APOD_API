// jQuery

$ ('#date').on ('change', function (){

  var data = $('#date').val();

  $.ajax ({
    'url': 'https://api.nasa.gov/planetary/apod',
    'data': {
      'api_key':'bT20vygzcYZv5zK9a1bWk4JWbc3bOYpcCbNeAtCH',
      // 'api_key':'DEMO_KEY',
      'date': data},

    'success': function (resultado) {

      $ ('div').removeClass ('invisivel')
      $ ('#textoPrincipal').html (`${resultado.title}`)
      $ ('#textoSecundario').html (`${resultado.explanation}`)

        if (resultado.media_type === 'image') {
          $ ('#conteudo').html (`<img class= "classImg" src = "${resultado.url}" width="640" height="360">`)
        }
        else if (resultado.media_type === 'video'){
        $ ('#conteudo').html (`<iframe class= "classImg" src = "${resultado.url}" width="640" height="360">`)
        }
      } 
})
})