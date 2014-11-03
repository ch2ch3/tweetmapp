var stopped = true;

$(document).ready(function() {

  var socket = io.connect('/');

  socket.on('object', function(data){
    streamDraw(data);
    streamDisplay(data);
  })

  setTimeout(function(){
    $('#click-play').css('opacity', '1.0');
  }, 3500)

  $('#play').on('click', function(){
    stopped = false;
    $('#overlay-text').css('opacity', '0');
    $('#tweetStreamDisplay').css('opacity', '1.0');
    $('.legend-container').css('opacity', '1.0');
    $('#instructions').css('opacity', '1.0');
    $('#about').css('opacity', '1.0');
  })

  $('#pause').on('click', function(){
    stopped = true;
  })

  $('#stop').on('click', function(){
    artModeOn = false;
    stopped = true;
    tweetNumber = 0;
    _clearTweetNumber();
    streamDisplayReset();
    canvasReset();
    dataStore = [];
    $('#overlay-text').css('opacity', '1.0');
    $('#overlay-text').html('<br><br><p>Press play to start the map again.</p>')
  })

})

function _clearTweetNumber() {
  $('#tweetNumber').text(tweetNumber + ' ');
}