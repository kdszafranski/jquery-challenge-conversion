// Track clicks in one handy object
var clickCounts = {
  red: 0,
  yellow: 0,
  green: 0,
  blue: 0
};

$(document).ready(function() {
  // Event listener for button clicks
  $(".color-button").on("click", colorClick);
});

// Functions
function colorClick() {
  // get the color of the clicked button
  var color = $(this).data("color");
  clickCounts[color]++;
  updateText(color);
  appendBlock(color);
}

function updateText(color) {
  $("#" + color).text("Total " + color + ": " + clickCounts[color]);
}

function appendBlock(color) {
  $("#container").append('<div class="color-cube ' + color + '"></div>');
}
