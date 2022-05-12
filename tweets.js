var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var { v4, validate } = require('uuid');

//implementare una get che ritorni tutti i tweet
//implementare una get che ritorni un tweet in base all'uuid
//implementare una get che ritorni tutti i tweet di un determinato user
//implementare una delete che mi permett di eliminare i tweet
//implementare una post che mi permetta di inserire un nuovo tweet
//inserire una get che mi permetta di prendere tutti i Tweet che contengono all'interno del contenuto del tweet una determint parola, es:description:'stasera mancini incontrerà la stampa per euro2020!', utilizzando ad esempio /tweets?word=euro2020

var tweets = 
[
    { 
        name: 'tweetone', 
        content: "loreeamdnf", 
        date: "12-11-2021", 
        user: { name: "@don_lebo" } 
    },
    { 
        name: 'tweettwo', 
        content: "Alcuni vedono un semplice movimento, ma quello che porto in campo è la voglia di creare magia @lorenzoinsigne stasera ha fatto la differenza #adidasFootball #Soccer #Football #EURO2020", 
        date: "02-07-2021", 
        user: { name: "@adidasfootball" } },
    { 
        name: 'tweetthree', 
        content: "The official home of UEFA men's national team football on Twitter Soccer ball #EURO2020 #NationsLeague #WCQ", 
        date: "05-07-2021", 
        user: { name: "@EURO2020" } },
    { 
        name: 'tweetfour', 
        content: "Que Deus nos abençoe e nos proteja #brasil #love", 
        date: "05-07-2021", 
        user: { name: "@neymarjr" } }
];

tweets.forEach(item => {
    item = v4();
});

app.get('/tweets', (req, res) => {
    res.json(tweets);
});

app.get('/tweets/:id', (req, res) => {
    var tweets = tweets.find(item => item.id === req.params.id);
    res.json(tweets);
});

app.get('/tweets/:user', (req, res) => {
    var tweet = tweet.find(item => item.user === req.params.user);
    res.json(tweets);
});

app.delete('/tweets/:id', (req, res) => {
    console.log('tweet: ', tweet);
    var index = tweets.findIndex(item => item.id === req.params.id);
    var ch = tweets.splice(index, 1);
    res.json(ch[0]);
});

app.post('/tweets', (req, res) => {
    tweet.push({...req.body, id: v4() });
    res.json(tweets);
});

app.get('/tweets1', (req, res) => {
    res.json(tweets);
});

/*app.get('/tweets2', (req, res) => {
    if(req.query)
    {
        var results = tweets.filter(item => item.tweet.content === req.params.word);
        res.json(results); 
    }
    else{
        res.json('Not found');
    }
});
*/

app.listen(3008);