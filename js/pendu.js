/*
@title - Calculator
@author - Vincent
@date - 06/06/2016
*/
//variable
console.log("hello world !");


// function
var mot = {"couleur":'blanc'};

var reponse = function(lettre){
if lettre == mot("couleur"){
	return 0;
	}
	else 
	{
		return 1;
	}
}
//script body
//console.log(prompt("entrer une lette !");

for (cpt=0;cpt=10;cptp++ ){
	coul = prompt( "quelle couleur du cheval d'henri 4 !")
	if reponse(coul) == 1{
		//var bonnereponse +=1;
		//if mot(0).indexof = bonnereponse
		alert("gagne bravo");
			//exit;
			break;
			}
	else
		{
		var pendu +=1;
		if cpt == 10{
					alert("pendu");	
					}
					else{
						alert (" encore "+10 - cpt+"essai");
						}
		}
}