
//------QUOTE GENERATOR--------
const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"},
    { text: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", author: "Martin Luther King Jr."},
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle"},
    { text: "Do not go where the path may lead; go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson"},
    { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln"},
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein"},
    { text: "A calamity that makes you turn to Allah is better for you then a blessing which makes you forget the remembrance of Allah.", author: "Ibn Taymiyyah"}
];

var qtext = document.getElementById("qtext");
var qauthor = document.getElementById("qauthor");
const qbtn = document.getElementById("qbtn");

qbtn.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    qtext.textContent = quotes[randomIndex].text;
    qauthor.textContent = `- ${quotes[randomIndex].author}`;

});

