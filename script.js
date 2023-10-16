// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
// JavaScript for handling navigation arrows and bullets
let images = ["assets/code1.png", "assets/code2.png", "assets/code3.png", "assets/code4.png", "assets/code5.png"]
let des = ["Hello world application in world language (English)", "Application Hello World dans la langue du monde (français)", "Dünya dilinde Merhaba Dünya uygulaması (Türkçe)", "世界言語 (トルコ語) の Hello world アプリケーション", "تطبيق أهلاً بالعالم بلغة العالم (العربية)"]
var idx = -1
document.getElementById("code").src = images[0]
document.getElementById("des").innerHTML = des[0]


function next() {
    // Get the element by its ID
    if (idx < images.length-1){
        idx = idx + 1
        document.getElementById("code").src = images[idx];
        document.getElementById("des").innerHTML = des[idx]
    }
    else{
        idx = -1
    }
}
function prev() {
    // Get the element by its ID
    if (idx > 0){
        idx = idx - 1
        document.getElementById("code").src = images[idx];
        document.getElementById("des").innerHTML = des[idx]
    }
    else{
        idx = images.length -1
    }
}
const intervalId = setInterval(next, 4000);


