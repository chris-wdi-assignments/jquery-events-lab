console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  $('#imperatives').children().on('click', function (e) {
    let buttonText = $(this).text();
    let timeStamp = e.timeStamp;
    let $li = $('<li>').text(`"${buttonText}" at ${timeStamp}`);
    $('ul').append($li);
  })
})
