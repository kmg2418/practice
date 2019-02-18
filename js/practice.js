var links = {
  setColor:function(color){
    $('a').css('color', color);
   }
}
var body = {
  setBackgroundColor:function(color){
    $('body').css('backgroundColor', color);
  }
}
var grid = {
  setColor:function(color){
    $('#grid').css('color', color);
  }
}
var ol = {
  setBorderColor:function(color){
    $('ol').css('borderColor', color);
  }
}
var span = {
  setBorderColor:function(color){
    $('span').css('borderColor', color);
  }
}
  function nightAndDay(obj) {
    if(obj.value=='night'){
      body.setBackgroundColor('black');
      grid.setColor('white');
      ol.setBorderColor('white');
      span.setBorderColor('white');
      links.setColor('white');
      $("[id='NAD']").val('day')
    }else if(obj.value=='day'){
      body.setBackgroundColor('white');
      grid.setColor('black');
      ol.setBorderColor('black');
      span.setBorderColor('black');
      links.setColor('black');
      $("[id='NAD']").val('night')
    }
  }
