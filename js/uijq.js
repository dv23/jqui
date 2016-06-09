/*
@title - JQUERYUI
@author - Vincent
@date - 08/06/2016
*/

//variable
//console.log("hello world !");

//function
// function animation
terminerAnim = function(){
	alert("c'est fini");
};


// body
//$("#contenu").fadeOut("slow").fadeIn(5000);
//$(document).ready(function(){

bougenuage = {
	//let: "+=500px"
	let: "-=50px"
};

$(function(){
	//$(document).ready( function());
 //$( "#dialog" ).dialog("alert")};
     $( "#tabs" ).tabs();
 //$("#tabs").tabs();
});

$("testButton").bind({
		click:function(){
						//$(".tabs-3").animate(bougenuage,3000,terminerAnim);
						$(this).animate({'top': '-100px'});

						}
					});

$( document ).click(function() {
  $( "#toggle" ).toggle( "bounce", { times: 3 }, "slow" );

});