// For Dice 1 
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6

var randomImageSource = "images/dice" + randomNumber1 + ".png";  //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//For Dice 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; 

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


//Win Situation
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins";
}

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩 ";
}

else {
    document.querySelector("h1").innerHTML="Draw! 🙂";
}
