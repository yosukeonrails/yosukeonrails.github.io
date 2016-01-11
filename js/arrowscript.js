

var currentSlide=1;
var currentBackSlide=1;

       $("#arrowright").click(function(){
 $(".slides").animate(
    {marginLeft: '-=' + -NineH
  }
  ,450, function(){
  currentSlide++;
currentBackSlide--;
   
}
     );
 
 if(currentSlide==7){currentSlide=0, currentBackSlide=2 ,  $(".slides").animate(
    {marginLeft:"-900px"
  }
  ,0)}

});



  $("#arrowleft").click(function(){
 $(".slides").animate(
    {marginLeft: '-=' + NineH
  }
  ,450 , function(){
    currentBackSlide++;
    currentSlide--;
    
  }
  );

if(currentBackSlide==1){currentBackSlide=-6, currentSlide=8, $(".slides").animate(
    {marginLeft:NineH*7+"px" 
  }
  ,0)}

  
});

