$(document).ready(function(){

  var socket = io.connect('/');

  var dataStore = [];
  var canvas, x, y, tweetCounter = 0;

  window.onload = window.onresize = function() {

    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    width = viewportWidth;
    height = viewportWidth / 2;
    ratio = viewportWidth / 360;
    radius = viewportWidth / 1000;

    x = d3.scale.linear()
      .domain([0, width])
      .range([0, width]);

    y = d3.scale.linear()
      .domain([0, height])
      .range([height, 0]);

    canvas = d3.select("#map")
      .attr("width", width)
      .attr("height", height)
      .call(d3.behavior.zoom().x(x).y(y).scaleExtent([1, 8]).on("zoom", zoom))
      .node().getContext("2d");

    var map = document.getElementById("map")

    map.setAttribute("width", width);
    map.setAttribute("height", height);

    $('#tweetCount').css('top', height + "px")

    zoom()
  }

  function zoom() {
    canvas.clearRect(0, 0, width, height);
    draw();
  }

  function draw() {
    var i = -1, n = dataStore.length, d, cx, cy;
    while (++i < n) {
      canvas.beginPath();
      d = dataStore[i];
      cx = x(d[0]*ratio);
      cy = y(d[1]*ratio);
      canvas.fillStyle = d[2] 
      canvas.moveTo(cx, cy)
      canvas.arc(cx, cy, radius, 0, 2 * Math.PI);
      canvas.fill()
      canvas.closePath();
    }
  }

  function addData(data) {
    dataStore[dataStore.length] = [(data.coords[1]), (data.coords[0]), data.colour] 
  } ;

  socket.on('object', function(data){
    addData(data);
    tweetCounter += 1;
    $('#tweetCount').text(tweetCounter);
    canvas.beginPath();
    cx = x((data.coords[1]*ratio));
    cy = y((data.coords[0])*ratio);
    canvas.arc(cx, cy, radius, 0, 2 * Math.PI, false);
    canvas.fillStyle = data.colour;
    canvas.fill();
    canvas.closePath();
  })
  
})