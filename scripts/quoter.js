function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

function getRandomQuotes(){
    var request = new XMLHttpRequest();
    request.open('GET', "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1", true);
    request.setRequestHeader("X-Mashape-Key", "A6EFpJ2oCQmshDaNl1pgKgMEfT9pp1DzSYwjsnrign0RheBPlH")
    request.onload = function() {
        if(request.status >= 200 && request.status < 400){
            var data = JSON.parse(this.response);
            (function displayQuote() {
                document.getElementById("qtholder").innerHTML = data["quote"];
                document.getElementById("author").innerHTML = data["author"];
            })();
        }else {
      console.log("Error!")
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
document.getElementById("btn-qt").onclick = getRandomQuotes;
document.getElementById("btn-tw").onclick = tweetQuote;
}

ready(starter);
