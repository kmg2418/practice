var links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    for(var i = 0; i < alist.length; i++){
      alist[i].style.color = color;
    }
  }
}
var body = {
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
var grid = {
  setColor:function(color){
    document.querySelector('#grid').style.color=color;
  }
}
var ol = {
  setBorderColor:function(color){
    document.querySelector('ol').style.borderColor=color;
  }
}
var span = {
  setBorderColor:function(color){
    for(var i = 0; i < document.querySelectorAll('span').length; i++){
      document.querySelectorAll('span')[i].style.borderColor=color;
    }
  }
}
  function nightAndDay(obj) {
    if(obj.value=='night'){
      body.setBackgroundColor('black');
      grid.setColor('white');
      ol.setBorderColor('white');
      span.setBorderColor('white');
      links.setColor('white');
      for(var i = 0; i < document.querySelectorAll('#NAD').length; i++){
        document.querySelectorAll('#NAD')[i].value='day'
      }
    }else if(obj.value=='day'){
      body.setBackgroundColor('white');
      grid.setColor('black');
      ol.setBorderColor('black');
      span.setBorderColor('black');
      links.setColor('black');
      for(var i = 0; i < document.querySelectorAll('#NAD').length; i++){
        document.querySelectorAll('#NAD')[i].value='night'
      }
    }
  }
