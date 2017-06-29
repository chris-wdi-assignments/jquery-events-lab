console.log("Sanity Check: JS is working!");

let startTime = 0;
let endTime = 0;
let running = false;

let updateClock = function (lapsedTime) {
  let seconds = Math.round(lapsedTime/100)/10;
  $('#total-time').text(`${seconds} seconds`);
}

let timer = function () {
  if(running) {
    updateClock(Date.now() - startTime);
  }
}

$(document).ready(function(){
  $(window).on('keydown', function (e) {
    if (e.which === 32) {
      if (running) {
        console.log('stopped!');
        endTime = Date.now();
        updateClock(endTime - startTime);
        running = false;
      } else {
        startTime = Date.now();
        updateClock(0);
        running = true;
        window.setInterval(timer, 100)
      }
    }
  });
})
