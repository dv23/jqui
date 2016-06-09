/*
@title - JQUERY
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
$(function(){

bougesdroit = {
 let: +=70%;
};

bougenuage = {
	let: "+=500px"
};
//$("#menu1","#menu3").css("background-color","blue");
$("li").bind({
	mouseover : function(){
		$(this).addClass("newTruc");
		//alert();
	},
	mouseout:function(){
		$(this).removeClass("newTruc");
	}
});

$("carre").bind({
	click:function(){
		$(".carre").clone().appendTO("body");
					}
				});

$("testButton").bind({
		click:function(){
						$(".carre").animate(bougenuage,3000,terminerAnim);
						}
					});

$(".>").bind({
	click:function(){
		//$(".carrec").clone().appendTO("carrec");
		this.addClass("carrec")
		//.animate(bougenuage,10);
	}
});

});