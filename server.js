var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var articles = {
    articleone:{
    title: "Article One | Bijo Mariyil",
    heading: "ARTICLE O N E",
    date: "02nd october 2016",
    content: `
    <p>
       Hi Everybody, I am Little busy with my duties and responsibilities and also late. Anyway this is my first Article.
    </p>
    <p>
        Hi Everybody, I am a bit late. Trying to do fast. Anyway this is my First Article.
    </p>
    <p>
        Hi Everybody, At last this is my First Article.
    </p>`
}, 
    articletwo:{
    title: "Article Two | Bijo Mariyil",
    heading: "ARTICLE T W O",
    date: "01st october 2016",
    content: `
    <p>
       Hi Everybody, I am Little busy with my duties and responsibilities and also late. Anyway this is my first Article.
    </p>
    <p>
        Hi Everybody, I am a bit late. Trying to do fast. Anyway this is my First Article.
    </p> `
},
    articlethree:{
    title: "Article Three | Bijo Mariyil",
    heading: "ARTICLE T H R E E",
    date: "02nd october 2016",
    content: `
    <p>
        Hi Everybody, At last this is my Third Article.
    </p> `
}
};
function createtemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmltemplate=`
<html>
   <title>
       ${title}
   </title> 
   <meta name= "viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    <body>
            <div class="container">
                <div>
                    <a href="/"> Home </a>
                </div>
                <hr/>
               </h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
    </body>
</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get ('/:articlename', function (req, res) {
    //articlename=articleone
    //articles(articlename)={}content object of article one
    var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});