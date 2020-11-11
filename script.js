let realData = "";
let quotesData = "";
let quote = document.getElementById("quotes");
let author = document.getElementById("author");
let getQuotesButton = document.getElementById("getQuotes");
let getTweetButton = document.getElementById("tweet");


const tweet = () => {
    let request = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
    window.open(request);
}

const getNewQuote = () => {
    const random = Math.floor(Math.random() * 1632);
    quotesData = realData[random];
    quote.innerText = quotesData.text;
    if (quotesData.author == null) {
        author.innerText = "By Unknown";
    }
    else {
        author.innerText = "By " + `${quotesData.author}`;
    }
}


const getQuotes = async () => {

    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // quote.innerHTML = realData[0].text;
        // author.innerHTML = "By "+realData[0].author;
        getNewQuote();

    } catch (error) {

    }
}
getTweetButton.addEventListener("click", tweet);
getQuotesButton.addEventListener("click", getNewQuote);

getQuotes();