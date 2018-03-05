function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
function starter(){
    var quotes = {
        a : "abcd",
        b : "bcda",
        c : "huiec",
        d : "stolec",
        e : "bolek"
}
document.getElementById("btn-qt").onclick = displayQuote;
document.getElementById("btn-tw").onclick = tweetQuote;
//getRandomInt returns random number from 0 to max;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//getRandom returns random quote from quotes set;
function getRandom(quotes){
    var keyArr = Object.keys(quotes);
    var keyArrLen = keyArr.length;
    return quotes[keyArr[getRandomInt(keyArrLen)]];
}
var quote_index = getRandom(quotes);
//displayQuote changes quote displayed;
function displayQuote() {
    document.getElementById("qtholder").innerHTML = quote_index;
}

function tweetQuote(){
    var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(quote_index);
 window.open(twtLink,'_blank');
}
}
ready(starter);
