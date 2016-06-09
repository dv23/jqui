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

	$("testButton").click(function(){
		$("#contenu").toggle("1000");
	});

});