var http = require('http');
var server = http.createServer(function(request,response){
    if(request.url=='/'){
        response.writeHead(200, { 'Content-Type': 'text/html',
        'Access-Control-Allow-Headers':'*','Access-Control-Allow-Methods':'GET',
        'access-control-allow-origin':'*' });
        response.end('Nothing to send');
    }
    else if(request.url=="/text"){
        var verbs, nouns, adjectives, adverbs, preposition;
        nouns = ["Ramit", "clock", "Ninad", "plastic", "Avishek", "teacher", "old lady", "professor", "pussy", "Sukhi"];
        verbs = ["fucked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
        adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
        adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
        preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];
        var rand1 = Math.floor(Math.random() * 10);
        var rand2 = Math.floor(Math.random() * 10);
        var rand3 = Math.floor(Math.random() * 10);
        var rand4 = Math.floor(Math.random() * 10);
        var rand5 = Math.floor(Math.random() * 10);
        var rand6 = Math.floor(Math.random() * 10);
        var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " +
        adverbs[rand3] + " " + verbs[rand4] + " because some " + 
        nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + 
        adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + 
        adjectives[rand4] + " " + nouns[rand6] + ".";
        response.writeHead(200, {'Content-Type': 'text/html',
        'Access-Control-Allow-Headers':'*','Access-Control-Allow-Methods':'GET',
        'access-control-allow-origin':'*'},);
        response.end(content);
    }
});
server.listen(3000);
console.log('Server is listening at port 3000');
