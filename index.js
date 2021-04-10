
var randomNumber1 = Math.floor(Math.random()*6)+1 ;
var randomDiceImage = "dice" + randomNumber1 + ".png" ;
document.querySelectorAll("img")[0].setAttribute("src" , randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1 ;
var randomDiceImage2 = "dice" + randomNumber2 + ".png" ;
document.querySelectorAll("img")[1].setAttribute("src" , randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("#heading").textContent= "Player1 wins<3" ;
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("#heading").textContent = "Player2 wins<3" ;
}
else{
    document.querySelector("#heading").textContent = "Draw!" ;
    
}
