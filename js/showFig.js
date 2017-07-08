$( "#draw" ).click(function displayVals() {

    var colorValue = $( "#color" ).val();
    var fig_type = $( "#type" ).val();
    if( colorValue == 'red' ){
      if(fig_type=='rectangle'){
        $('#rectangle').css('background-color','red');
      $('#rectangle').css('display','block');
      }
      else {
        $('#circle').css('background-color','red');
      $('#circle').css('display','block');
      }
    }
    else if( colorValue == 'green' ) {
      if(fig_type=='rectangle'){
        $('#rectangle').css('background-color','green');
      $('#rectangle').css('display','block');
      }
      else {
        $('#circle').css('background-color','green');
      $('#circle').css('display','block');
      }
    }
    else {
      if(fig_type=='rectangle'){
        $('#rectangle').css('background-color','blue');
      $('#rectangle').css('display','block');
      }
      else {
        $('#circle').css('background-color','blue');
      $('#circle').css('display','block');
      }
    }
  }
  
);


$("#reset").click(function(){
  $("#rectangle").hide();
  $("#circle").hide();
});
