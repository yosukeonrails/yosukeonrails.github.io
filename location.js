




 var locationclickcount=1;

     $("#locationButton").click(function(){

        locationclickcount++;


        if(locationclickcount%2==0) {

$("#containerTwo").animate({top:-1500},1000);

 $("#dropdownmenu").animate({marginTop:-700}, 1000);

  $(".containerOne").animate({top:-850},1000);


}



else {

$("#containerTwo").animate({top:-800},1000);
  $(".containerOne").animate({top:-850},1000);
   $("#locationButton").css("background-color","black");


}



});