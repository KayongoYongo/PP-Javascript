//  Vaariables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// An array of objects
const quotes = [
    {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill"},
    {quote: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius"},
    {quote: "The only way to do great work is to love what you do.", person: "Steve Jobs"},
    {quote: "The best revenge is massive success.", person: "Frank Sinatra"},
    {quote: "Believe you can and you're halfway there.", person: "Theodore Roosevelt"},
    {quote: "You miss 100% of the shots you don’t take.", person: "Wayne Gretzky"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt"},
    {quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt"},
    {quote: "It's not whether you get knocked down, it's whether you get up.", person: "Vince Lombardi"},
    {quote: "If you want to lift yourself up, lift up someone else.", person: "Booker T. Washington"},
    {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", person: "Ralph Waldo Emerson"},
    {quote: "The only true wisdom is in knowing you know nothing.", person: "Socrates"},
    {quote: "Strive not to be a success, but rather to be of value.", person: "Albert Einstein"},
    {quote: "Life is what happens when you're busy making other plans.", person: "John Lennon"},
    {quote: "In the end, it's not the years in your life that count. It's the life in your years.", person: "Abraham Lincoln"}
];

// Add an event listener to the button
btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person;
})