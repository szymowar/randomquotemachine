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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandom(quotes){
    var keyArr = Object.keys(quotes);
    var keyArrLen = keyArr.length;
    return quotes[keyArr[getRandomInt(keyArrLen)]];
}
var quote_index = getRandom(quotes);
function displayQuote() {
    document.getElementById("qtholder").innerHTML = quote_index;
}
}
ready(starter);
