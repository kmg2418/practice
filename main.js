var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url,true).pathname;
    var title = queryData.id;
    var textNum = queryData.data;

    if (pathname === '/') {
        fs.readFile(`Data/${textNum}`, 'utf8', function(err, description){
            if (queryData.id === undefined) {
                textname = 'Welcome';
            }
            var template = `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <title>WEB 2 - NODE.JS</title>
                <link rel="stylesheet" href="css/practice.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="js/practice.js"></script>
              </head>
              <body>
                <header>
                  <h1><a href="/">WEB</a></h1>
                </header>
                <span class="top">
                  <input type="button" id="NAD" value="night" onclick="nightAndDay(this)">
                </span>
                <div id="grid">
                  <ol>
                    <li><a href="/?id=HTML">HTML</a></li>
                    <li><a href="/?id=CSS">CSS</a></li>
                    <li><a href="/?id=JavaScript">JavaScript</a></li>
                  </ol>
                  <div id="article">
                    <h2>${title}</h2>
                    <p>${description}</p>
                  </div>
                </div>
                <span class="bottom">
                  <input type="button" id="NAD" value="night" onclick="nightAndDay(this)">
                </span>
                <footer>
                  <h3><a href="index.html">WEB</a></h3>
                </footer>
              </body>
            </html>
            `;
            response.writeHead(200);
            response.end(template);
        });
    } else {
        response.writeHead(404);
        response.end("Not Found");
    }
});
app.listen(80);
