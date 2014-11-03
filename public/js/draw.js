var dataStore = [];
var canvas, d, cx, cy, stopped, tweetCount = 0;
var artModeOn = false;

function draw() {
  var i = -1, n = dataStore.length, d, cx, cy;
  while (++i < n) {
    canvas.beginPath();
    d = dataStore[i];
    cx = x(d[0]*mapScale);
    cy = y(d[1]*mapScale);
    canvas.fillStyle = artModeOn === true ? artMode() : d[2]; 
    canvas.moveTo(cx, cy);
    canvas.arc(cx, cy, selectRadius(5), 0, 2 * Math.PI);
    canvas.fill();
    canvas.closePath();
  }
}

function selectRadius(number) {
 return artModeOn === true ? Math.random()*number : radius;
}

function addData(data) {
  dataStore[dataStore.length] = [(data.coords[0]), (data.coords[1]), data.colour];
} 

function streamDraw(data) {
  if(stopped === false) {
    addData(data);
    tweetCount += 1;
    $('#tweet-count').text(tweetCount + ' ');
    canvas.beginPath();
    var cx = x((data.coords[0]*mapScale));
    var cy = y((data.coords[1])*mapScale);
    canvas.arc(cx, cy, selectRadius(5), 0, 2 * Math.PI, false);
    canvas.fillStyle = artModeOn === true ? artMode() : data.colour;
    canvas.fill();
    canvas.closePath();
  }
}