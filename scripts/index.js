let Articles = document.getElementById("Articles")
let Total = document.getElementById("Total")



let btnSupprimer1 = document.getElementById("btnSupprimer1")
let btnAugmenter1 = document.getElementById("btnAugmenter1")
let btnDiminuer1 = document.getElementById("btnDiminuer1")
let Quantite1 = document.getElementById("Quantite1")
let Article1 = document.getElementById("Article1")
let Prix1 = document.getElementById("Prix1")
let hr1 = document.getElementById("hr1")

count1 = 1

btnSupprimer1.onclick = function () {
    if (confirm(" do you really want to delete this item ? ")) {
        Articles.removeChild(Article1)
        Articles.removeChild(hr1)
        count1 = 0
        Total.innerHTML = (count1 * 110 + count2 * 120 + count3 * 150).toLocaleString('en-US') + ' $'
    }
}

btnAugmenter1.onclick = function() {
    count1 += 1;
    Quantite1.innerHTML = count1;
    Prix1.innerHTML = (count1 * 110).toLocaleString('en-US') + ' $'
    Total.innerHTML = (count1 * 110 + count2 * 120 + count3 * 150).toLocaleString('en-US') + ' $'
};

btnDiminuer1.onclick = function() {
    if (count1 > 0) {
        count1 -= 1;
    Quantite1.innerHTML = count1;
    Prix1.innerHTML = (count1 * 110).toLocaleString('en-US') + ' $'
    Total.innerHTML = (count1 * 110 + count2 * 120 + count3 * 150).toLocaleString('en-US') + ' $'
       }
};



let btnSupprimer2 = document.getElementById("btnSupprimer2")
let btnAugmenter2 = document.getElementById("btnAugmenter2")
let btnDiminuer2 = document.getElementById("btnDiminuer2")
let Quantite2 = document.getElementById("Quantite2")
let Article2 = document.getElementById("Article2")
let Prix2 = document.getElementById("Prix2")
let hr2 = document.getElementById("hr2")

count2 = 1

btnSupprimer2.onclick = function () {
    if (confirm("do you really want to delete this item ?")) {
        Articles.removeChild(Article2)
        Articles.removeChild(hr2)
        count2 = 0
        Total.innerHTML = (count1 * 110 + count2 * 120 + count3 * 150).toLocaleString('en-US') + ' $'
    }
}

btnAugmenter2.onclick = function() {
    count2 += 1;
    Quantite2.innerHTML = count2;
    Prix2.innerHTML = (count2 * 120).toLocaleString('en-US') + ' $'
    Total.innerHTML = (count1 * 110 + count2 * 120 + count3 * 150).toLocaleString('en-US') + ' $'
};

btnDiminuer2.onclick = function() {
    if (count2 > 0) {
        count2 -= 1;
    Quantite2.innerHTML = count2;
    Prix2.innerHTML = (count2 * 120).toLocaleString('en-US') + ' $'
    Total.innerHTML = (count1 * 110 + count2 * 120 + count3 * 150).toLocaleString('en-US') + ' $'
       }
};



let btnSupprimer3 = document.getElementById("btnSupprimer3")
let btnAugmenter3 = document.getElementById("btnAugmenter3")
let btnDiminuer3 = document.getElementById("btnDiminuer3")
let Quantite3 = document.getElementById("Quantite3")
let Article3 = document.getElementById("Article3")
let Prix3 = document.getElementById("Prix3")

count3 = 1

btnSupprimer3.onclick = function () {
    if (confirm("do you really want to delete this item ?")) {
        Articles.removeChild(Article3)
        count3 = 0
        Total.innerHTML = (count1 * 110 + count2 * 120 + count3 * 150).toLocaleString('en-US') + ' $'
    }
}

btnAugmenter3.onclick = function() {
    count3 += 1;
    Quantite3.innerHTML = count3;
    Prix3.innerHTML = (count3 * 150).toLocaleString('en-US') + ' $'
    Total.innerHTML = (count1 * 110 + count2 * 120 + count3 * 150).toLocaleString('en-US') + ' $'
};

btnDiminuer3.onclick = function() {
    if (count3 > 0) {
        count3 -= 1;
    Quantite3.innerHTML = count3;
    Prix3.innerHTML = (count3 * 150).toLocaleString('en-US') + ' $'
    Total.innerHTML = (count1 * 110 + count2 * 120 + count3 * 150).toLocaleString('en-US') + ' $'
       }
};



let icon1 = document.getElementById("icon1");
icon1.onclick = function(){
    icon1.classList.toggle('active');
}

let icon2 = document.getElementById("icon2");
icon2.onclick = function(){
    icon2.classList.toggle('active');
}

let icon3 = document.getElementById("icon3");
icon3.onclick = function(){
    icon3.classList.toggle('active');
}