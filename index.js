
function httpGet(url,callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }

    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8' );
    xmlHttp.send();
}


function googleImageSearch(search, callback){
    console.log("sending saerch request for: "+search)
    httpGet("https://www.googleapis.com/customsearch/v1?key=AIzaSyB6Hj2K28y8A2aXummTkFY4dck8vFr8MIU&cx=017576662512468239146:omuauf_lfve&q="+search+"",function(s){
        callback(JSON.parse(s).items)
    })
}


googleImageSearch("gill",function(results){
    console.log(results);
    for (var i = results.length - 1; i >= 0; i--) {
        var result = results[i];

        var a = document.createElement('a');
        var linkText = document.createTextNode(result.displayLink);
        a.appendChild(linkText);
        a.title = result.htmlTitle;
        a.href = "https://"+result.formattedUrl;
        document.body.appendChild(a);

        var div = document.createElement('div');
        document.body.appendChild(div);
    };
})

