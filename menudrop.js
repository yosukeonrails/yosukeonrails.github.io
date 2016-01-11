
    var clickcount=1;

       $("#menudrop").click(function(){

        clickcount++;


        if(clickcount%2==0) {


$("#containerTwo").animate({top:0},1000);

$(".containerOne").animate({top:0},1000);

$(".blankSheet").show(1000);



 $("#dropdownmenu").animate({marginTop:0}, 1000);
 

} 


else {


 $("#dropdownmenu").animate({marginTop:-700}, 1000);



  $("#containerTwo").animate({top:-800},1000);

   $(".containerOne").animate({top:-850},1000);
 
}

 

});
