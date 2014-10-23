var counter = 0;
var tweetRate = 150;
var fadeSpeed = 4000;
var ready = true;
var onOff = 0;

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


$('#tweetStreamDisplay').on('click', function() {
	onOff += 1
	if (onOff % 2 === 0) {
		fadeSpeed = 4000;
		tweetRate = 150; }
	else {
		fadeSpeed = 1000;
		tweetRate = 10; }
});

function streamDisplayReset() {
  $('#tweetStreamDisplay ul').empty();
}