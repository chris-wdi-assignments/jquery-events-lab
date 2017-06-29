console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('.add').on('change', function (e) {
    let summand1 = Number($('#left').val());
    let summand2 = Number($('#right').val());
    $('#total').val(summand1 + summand2);
  });
})
