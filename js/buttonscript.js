

var NineH= -900  

 

 $("#photoOne").click(function(){
 $(".slides").animate(
    {marginLeft:NineH+"px"
  }
  ,500);
  currentBackSlide=1,currentSlide=1
});

 $("#photoTwo").click(function(){
 $(".slides").animate(
    {marginLeft:NineH*2+"px" 
  }
  ,500);
 currentBackSlide=0,currentSlide=2
});

 $("#photoThree").click(function(){
 $(".slides").animate(
    {marginLeft:NineH*3+"px" 
  }
  ,500);
 currentBackSlide=-1,currentSlide=3
});

 $("#photoFour").click(function(){
 $(".slides").animate(
    {marginLeft:NineH*4+"px" 
  }
  ,500);
 currentBackSlide=-2,currentSlide=4
});


 $("#photoFive").click(function(){
 $(".slides").animate(
    {marginLeft:NineH*5+"px" 
  }
  ,500);
 currentBackSlide=-3,currentSlide=5
});

 $("#photoSix").click(function(){
 $(".slides").animate(
    {marginLeft:NineH*6+"px" 
  }
  ,500);
 currentBackSlide=-4,currentSlide=6
});

$("#photoSeven").click(function(){
 $(".slides").animate(
    {marginLeft:NineH*7+"px" 
  }
  ,500);
  currentBackSlide=-5,currentSlide=7
});

