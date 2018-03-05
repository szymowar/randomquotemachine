var quotes = {
    a : "abcd",
    b : "bcda",
    c : "huiec"
}

document.getElementById("btn-qt").onclick = displayQuote;

function displayQuote() {
    document.getElementById("qtholder").innerHTML = quotes["a"];
}
