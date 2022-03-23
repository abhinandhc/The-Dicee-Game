var randNum1 = (Math.floor(Math.random() * 6)) + 1; //Gives a random number between 1 and 6
var randNum2 = (Math.floor(Math.random() * 6)) + 1;  

var ranImg1 = "images/dice"+randNum1+".png" ;//Gives the respective image
var imag=document.querySelectorAll("img")[0];//seleting the player1 image
imag.setAttribute("src",ranImg1);//changing the image

var ranImg2 = "images/dice"+randNum2+".png" ;//Gives the respective image
var images=document.querySelectorAll("img")[1];//seleting the player2 image
images.setAttribute("src",ranImg2);//changing the image

//condition checking

if(randNum1 > randNum2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if(randNum1 < randNum2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!";
}
else{
    document.querySelector("h1").innerHTML="Its a Draw!";
}
