/*
@title - Dom
@author - Vincent
@date - 07/06/2016
*/

//variable
//console.log("hello world !");
var testVariable =10; // camelCase
//var testVariable2 = 20;
//var testVariable3 =testVariable*testVariable2;

//function
function changeBG() {
//document.body.style.backgroundColor="blue";
this.style.backgroundColor="blue";
};

//script body
//console.log(testVariable);
//var test = document.getElementById("ma_dv");
//test.innerHTML="lol";

var ma_cl = document.getElementsByClassName("ma_classe");
ma_cl[0].style.backgroundColor = "yellow";
ma_cl[0].style.fontWeight = "bold";

var event = document.getElementById("event");
event.addEventListener("click",changeBG);

var tableau = document.getElementsByClassName("menu");
for (var i=0; i< tableau.length;i++){
	tableau[i].addEventListener("mouseover",changeBG);
}