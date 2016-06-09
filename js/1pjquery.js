/*
@title - JQUERY
@author - Vincent
@date - 08/06/2016
*/

//variable
//console.log("hello world !");

//function

// body
//$("#contenu").fadeOut("slow").fadeIn(5000);
$(function(){

//$("#menu1","#menu3").css("background-color","blue");
//$("li:last").append("<li id='menu5'>menu5</li>");

	$("testButton").click(function(){
		$("#contenu").toggle("1000");
	});

});