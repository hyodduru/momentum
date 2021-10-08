const quotes = [{
    text : "The most beautiful thins in the world cannot be seen or even touched.",
    author : "Helen Keller",},
    {text : "To succed in life, you need three things : a wishbone, a backbone, and a funny bone.",
    author : "Reba Mcentire."
}, {text : "Every dat is not a success. Every year is not a success. You have to celebrate the good.",
    author : "Reese Witherspoon."},
    {text : "In three words I can sum up everything I've learned about life: it goes on." ,
    author : "Robert Frost",},
    {text : "In the middle of difficulty lies opportunity.",
    author : "Albert Einstein",},
    {text : "Be yourself; everyone else is already taken.",
    author : "Oscar Wilde",},
    {text : "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth",
    author : "William W. Purkey",},
    {text : "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author : "Dr. Seuss",},
    {text : "You only live once, but if you do it right, once is enough.",
    author : "Mae West",},
    {text : "Be the change that you wish to see in the world.",
    author : "Mahatma Gandhi",},
    {}

]

const quote = document.querySelector("#quote div");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*10)];
quote.innerText = todaysQuote.text;
author.innerText = todaysQuote.author;