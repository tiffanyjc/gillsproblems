// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "06d790ea2ab541d99f22eb13b7732cf9", 
    'q': "value"
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function(result) {
    var mostRecent = result.response.docs[0]
    var mostRecent10 = result.response.docs
    var url = ""
    var title = ""
    var article = null
    
    for (i in mostRecent10) {
        article = mostRecent10[i]
        title = article.headline.main
        url = article.web_url
        
        var t1 = document.createTextNode(title); 
        var p1 = document.createElement("h3"); 
        p1.appendChild(t1); 
        
        var t2 = document.createTextNode(url); 
        var p2 = document.createElement("P"); 
        p2.appendChild(t2); 
        
        var d = document.createElement("DIV"); 
        d.appendChild(p1); 
        d.appendChild(p2); 
        
        document.body.append(d)
    }
    
    
    
    
}).fail(function(err) {
    throw err;
});