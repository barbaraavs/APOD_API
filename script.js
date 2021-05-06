// jQuery
// $ ('button').click (function (){

//   console.log ('caiu')

$ ('#date').on ('change', function (){

  console.log ('caiu2')

  var data = $('#date').val();

  $.ajax ({
    'url': 'https://api.nasa.gov/planetary/apod',
    'data': {
      'api_key':'DEMO_KEY',
      'date': data},

    'success': function (resultado) {

      console.log (resultado)

      $ ('div').removeClass ('invisivel')
      $ ('#textoPrincipal').html (`${resultado.title}`)
      $ ('#textoSecundario').html (`${resultado.explanation}`)

        if (resultado.media_type === 'image') {
          $ ('#imagem').html (`<img class = "imagem" scr = "${resultado.url}">`)
        }
        else if (resultado.media_type === 'video'){
        $ ('#imagem').html (`<iframe class = "imagem" scr = "${resultado.url}">`)
        }
      } 
   
})
})