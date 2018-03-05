function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

    var quotes = {
        a : "abcd",
        b : "bcda",
        c : "huiec",
        d : "stolec",
        e : "bolek"
}
function starter(){
document.getElementById("btn-qt").onclick = displayQuote;
document.getElementById("btn-tw").onclick = tweetQuote;
}
//getRandomInt returns random number from 0 to max;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
//getRandom returns random quote from quotes set;
function getRandomQuotes(quotes){
    var keyArr = Object.keys(quotes);
    var keyArrLen = keyArr.length;
    var quoteIndex = keyArr[getRandomInt(keyArrLen)]
    return quotes[quoteIndex];
}
//displayQuote changes quote displayed;
function displayQuote() {
    document.getElementById("qtholder").innerHTML = getRandomQuotes(quotes);
}
//tweetQuote tweets quote
function tweetQuote(){
    var twtext = document.getElementById("qtholder").innerHTML;
    var twtLink = 'http://twitter.com/home?status=' +(twtext);
    console.log(twtLink);
 window.open(twtLink,'_blank');
}

ready(starter);
