var quotes = [
    'Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?',
    'We Generate Fears While We Sit. We Overcome Them By Action. – Dr. Henry Link',
    'Whether You Think You Can Or Think You Can\’t, You’re Right – Quote By Henry Ford',
    'Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing. – Life Quote By Helen Keller',
    'The Man Who Has Confidence In Himself Gains The Confidence Of Others. – Hasidic Proverb',
    'The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today. – Motivational Quote By Franklin D. Roosevelt',
    'Creativity Is Intelligence Having Fun. – Albert Einstein'
]

function newQuote(){
    var number= Math.floor(Math.random() * (quotes.length));
    document.getElementById ('displayQuotes').innerHTML=quotes[number];
}

