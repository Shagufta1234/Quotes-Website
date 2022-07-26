let realData = "";
let quotesData = "";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");

const tweetNow = () =>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}  ${quotesData.author}`;
    window.open(tweetPost);
    // console.log(tweetPost);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 100);
    // console.log(realData[rnum].text);
    quotesData = realData[rnum];
    quotes.innerText = `${quotesData.text}`;
    if (quotesData.author == null) {
        author.innerText = "unKnown";
    } else {
        author.innerText = `${quotesData.author}`;
    }
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        const data = await fetch(api);
        realData = await data.json();
        getNewQuotes();
        // console.log(realData[0].text);
    } catch (error) {

    }
}

newQ.addEventListener("click", getNewQuotes);
tweetMe.addEventListener("click", tweetNow);
getQuotes();