var counter = 0;
var slowMode = true;
var slowTweetRate = 500;
var slowFadeSpeed = 5000;
var fastTweetRate = 10;
var fastFadeSpeed = 1000;
var tweetRate = slowTweetRate;
var fadeSpeed = slowFadeSpeed;

function streamDisplay(data) {
	counter += 1
	if (counter % tweetRate === 0 && stopped === false) {
		var text = data.text;
		var username = data.username;
		$('<li>' + '<b>@' + username + ':</b> ' + text + '</li>').prependTo('#tweetStreamDisplay ul').fadeOut(fadeSpeed, function() {
			$(this).remove();
		});
	}
}

function toggleMode() {
	slowMode = !slowMode;
}

function setSpeed() {
	fadeSpeed = slowMode === true ? slowFadeSpeed : fastFadeSpeed
	tweetRate = slowMode === true ? slowTweetRate : fastTweetRate
}

$('#tweetStreamDisplay').on('click', function() {
	toggleMode();
	setSpeed();
});

$('#yohort').on('click', function() {
	artModeVar = true;
	stopped = true;
	$('#overlay-text').css('opacity', '1.0');
    $('#overlay-text').html('<br><br><p>Art mode enabled!<br>  Scroll, zoom and enjoy!  <br>Press stop to reset.</p>')
})

function streamDisplayReset() {
  $('#tweetStreamDisplay ul').empty();
}