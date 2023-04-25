const express = require('express');

//Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

var pdf = require('html-pdf');

var contenido = `
<div id="pageHeader" style="border-bottom: 1px solid #ddd; padding-bottom: 5px;">
  <img src="http://desarrolloweb.com/images/logodwgris.png" width="150" height="27" align="left">
  <p style="color: #666; margin: 0; padding-top: 12px; padding-bottom: 5px; text-align: right; font-family: sans-serif; font-size: .85em">
    Publicar en Internet
  </p>
</div>
<h1>Esto es un test de html-pdf</h1>
<p>Estoy generando PDF a partir de este código HTML sencillo</p>
<div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px;">
  <p style="color: #666; width: 70%; margin: 0; padding-bottom: 5px; text-align: let; font-family: sans-serif; font-size: .65em; float: left;">Hola soy un pie de pagina</p>
  <p style="color: #666; margin: 0; padding-bottom: 5px; text-align: right; font-family: sans-serif; font-size: .65em">Página {{page}} de {{pages}}</p>
</div>
`;

pdf.create(contenido).toFile('./salida.pdf', function(err, res) {
    if (err){
        console.log(err);
    } else {
        console.log(res);
    }
});

module.exports = app;