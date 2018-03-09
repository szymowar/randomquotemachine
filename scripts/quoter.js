function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

function displayQuote(quote, author) {
    document.getElementById("qtholder").innerHTML = '"' + quote + '"';
    document.getElementById("author").innerHTML = author;
};

function errorHandle(status) {

    if (status == 401){
        document.getElementById("er-disc").innerHTML = "Authentication error occurred (" + status + ")";
        document.getElementById("er-disc").style.display = "inline-block";
    }
    if (status == 404){
        document.getElementById("er-disc").innerHTML = "Source link seems to be empty (" + status + ")";
        document.getElementById("er-disc").style.display = "inline-block";
    }
    else if (status < 200 && status >= 400) {
        document.getElementById("er-disc").innerHTML = "Error (" + status + ")";
        document.getElementById("er-disc").style.display = "inline-block";
    }

}

function getRandomQuotes(){
    var request = new XMLHttpRequest();
    request.open('GET', "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1", true);
    request.setRequestHeader("X-Mashape-Key", "A6EFpJ2oCQmshDaNl1pgKgMEfT9pp1DzSYwjsnrign0RheBPlH")
    request.onload = function() {
        if(request.status >= 200 && request.status < 400){
            var data = JSON.parse(this.response);
            displayQuote(data["quote"], data["author"])
        }else {
            errorHandle(request.status);
            console.log(request.status);
        }
      };
    request.send();
}
//tweetQuote tweets quote
function tweetQuote(){
    var quote = document.getElementById("qtholder").innerHTML;
    var author = document.getElementById("author").innerHTML;
    var twtext = quote + " - " + author;
    if(twtext.length > 140){
        //extra 3 characters for "..."
        var twtextCut = quote.length - (twtext.length - 137);
        twtext = quote.slice(0, twtextCut) +"... - " + author;
    }
    var twtLink = 'http://twitter.com/home?status=' + (twtext);
    window.open(twtLink,'_blank');
}
function starter(){
    getRandomQuotes();
    document.getElementById("btn-qt").onclick = getRandomQuotes;
    document.getElementById("btn-tw").onclick = tweetQuote;
}

ready(starter);
