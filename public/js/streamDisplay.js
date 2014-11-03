var counter = 0;
var readableModeOn = true;
var readableTweetRate = 500;
var readableFadeSpeed = 5000;
var fastTweetRate = 10;
var fastFadeSpeed = 1000;
var tweetRate = readableTweetRate;
var fadeSpeed = readableFadeSpeed;

function streamDisplay(data) {
	counter += 1
	if (counter % tweetRate === 0 && stopped === false) {
		var text = data.text;
		var username = data.username;
		$('<li>' + '<b>@' + username + ':</b> ' + text + '</li>').prependTo('#tweet-stream-display ul').fadeOut(fadeSpeed, function() {
			$(this).remove();
		});
	}
}

function toggleReadableMode() {
	readableModeOn = !readableModeOn;
}

function setStreamDisplaySpeed() {
	fadeSpeed = readableModeOn === true ? readableFadeSpeed : fastFadeSpeed
	tweetRate = readableModeOn === true ? readableTweetRate : fastTweetRate
}

$('#tweet-stream-display').on('click', function() {
	toggleReadableMode();
	setStreamDisplaySpeed();
});

function streamDisplayReset() {
  $('#tweet-stream-display ul').empty();
}