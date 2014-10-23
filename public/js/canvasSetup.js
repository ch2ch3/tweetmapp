var canvas, x, y, width, height, ratio, radius, x_min, y_min;
var viewportWidth;
var viewportHeight;

window.onload = window.onresize = function() {

  viewportWidth = window.innerWidth;
  viewportHeight = window.innerHeight;
  width = viewportWidth;
  height = viewportWidth / 2;
  ratio = viewportWidth / 360;
  radius = viewportWidth / 1000;

  $('#overlay-text').css('height', (0.65*height) + 'px');

  x = d3.scale.linear()
    .domain([0, width])
    .range([0, width]);

  y = d3.scale.linear()
    .domain([0, height])
    .range([height, 0]);

  canvas = d3.select("#map")
    .attr("width", width)
    .attr("height", height)
    .call(d3.behavior.zoom().x(x).y(y).scaleExtent([1, 400]).on("zoom", zoom))
    .node().getContext("2d");

    
  zoom();

};

function canvasReset() {
  canvas.clearRect(0, 0, width, height);
}

function zoom() {
 canvasReset();
  draw();
}
