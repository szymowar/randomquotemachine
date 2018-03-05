var quotes = {
    a : "abcd",
    b : "bcda",
    c : "huiec",
    d : "stolec",
    e : "bolek"
}

document.getElementById("btn-qt").onclick = displayQuote;
function getRandom(quotes){
    var keyArr = Object.keys(quotes);
    var keyArrLen = keyArr.length;

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    return quotes[keyArr[getRandomInt(keyArrLen)]];
}
function displayQuote() {
    document.getElementById("qtholder").innerHTML = getRandom(quotes);
}
