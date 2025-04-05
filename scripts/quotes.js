//My Favourite quotes section JS
const quotes = [
    "“The impediment to action advances action. What stands in the way, becomes the way.”",
    "“The best revenge is not to be like that.”",
    "“You have power over your mind not outside events, realize this and you will find true strength.”",
    "“Choose not to feel harmed and you won’t feel harmed. Don’t feel harmed and you haven’t been.”",
    "“Don’t be overheard complaining… Not even to yourself.”",
    "“We suffer more often in our imagination than reality.”",
    "“A man can have everything in the world, but if he decides he will be unhappy than he is not happy.”",
    "“It is not death that a man should fear, but he should fear never beginning to live.”"
]

let currentIndex = 0;

const quoteText = document.getElementById("quote-text");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

function updateQuote(index){
    quoteText.textContent = quotes[currentIndex];
}

leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    updateQuote(currentIndex);
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    updateQuote(currentIndex);
});

leftArrow.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
        currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
        updateQuote(currentIndex);
    }
});

rightArrow.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
        currentIndex = (currentIndex + 1) % quotes.length;
        updateQuote(currentIndex);
    }
});

updateQuote(currentIndex);


//Stoic Quotes API JS
const button = document.getElementById("quote-btn");
const quoteAPIText = document.getElementById("quote-api-text");
const quoteAuthor = document.getElementById("quote-author");

button.addEventListener("click", async () => {
    try {
        //allorigins proxy bypass to get around CORS restrictions, caching must be disabled for fresh responses
        const response = await fetch(
        "https://api.allorigins.win/get?url=" + encodeURIComponent("https://stoic.tekloon.net/stoic-quote") +
        "&disableCache=true"
        );
        const data = await response.json();
        const parsed = JSON.parse(data.contents);

        quoteAPIText.textContent = `“${parsed.data.quote}”`;
        quoteAuthor.textContent = `- ${parsed.data.author}`;
        console.log(response);
    } catch (error) {
        quoteAPIText.textContent = "Failed to load quote.";
        quoteAuthor.textContent = "Try again in a few seconds.";
        console.error("Error fetching quote:", error);
    }
});

//gets a quote on page load
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("quote-btn");
    button.click();
});