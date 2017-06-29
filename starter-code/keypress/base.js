console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  let startTime = 0;
  let endTime = 0;
  let running = false;
  $(window).on('keydown', function (e) {
    if (e.which === 32) {
      if (running) {
        console.log('stopped!');
        endTime = e.timeStamp;
        let lapsedTime = Math.round((endTime - startTime) / 100 )/10;
        $('#total-time').text(`${lapsedTime} seconds`);
        running = false;
      } else {
        startTime = e.timeStamp;
        $('#total-time').text('');
        running = true;
        //window.setTimeout(function () {}, 100)
      }
    }
  });
})
