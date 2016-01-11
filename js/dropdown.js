

var marginTopValue= $("#menuDropContainer").css("margin-left");
var clickcount=1 ;
var animateTime=400;

$("#menuButton").click(function(){



  clickcount++;

if(clickcount%2==0) {

$("#menuDropContainer").animate(
    {marginTop:"0px"} 
,animateTime);

$("#menuDrop").animate(
    {marginTop:"0px"} 
,animateTime);

$("#blankSheet").animate(
    {marginTop:"0px"} 
,600);

$("#menuIframe").animate(
    {marginTop:"0px"} 
,600);


  }



  


else {

  $("#menuDropContainer").animate(
    {marginTop:"-500px"} 
,animateTime);

$("#menuDrop").animate(
    {marginTop:"-500px"} 
,animateTime);


$("#blankSheet").animate(
    {marginTop:"1000px"} 
,animateTime);


$("#menuIframe").animate(
    {marginTop:"1000px"} 
,animateTime);

}




   });


/*$(".toggle").click(function() {  

           $(this).toggleClass("selected");

         });*/
