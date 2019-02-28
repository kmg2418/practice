var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = '노드 연습';
    var head = queryData.id;
    var txtname = queryData.id;
    if(_url == '/'){
      head = 'NODE.JS';
      txtname = 'NODEJS';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    fs.readFile(`Data/${txtname}`, 'utf8', function(err, description){
        var template = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>WEB 1 - ${title}</title>
          </head>
          <body>
            <header>
              <h1><a href="/">WEB</a></h1>
            </header>
            <div id="grid">
              <ol>
                <li><a href="/?id=HTML">HTML</a></li>
                <li><a href="/?id=CSS">CSS</a></li>
                <li><a href="/?id=JavaScript">JavaScript</a></li>
              </ol>
              <div id="article">
                <h2>${head}</h2>
                <p>${description}</p>
              </div>
            </div>
            <footer>
              <h3><a href="index.html">WEB</a></h3>
            </footer>
          </body>
        </html>
        `;
        response.end(template);
    });
});
app.listen(80);
