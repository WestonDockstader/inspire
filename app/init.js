// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
var app = {
  controllers: {
    weatherController: new WeatherController(),
    quoteController: new QuoteController(),
    imageController: new ImageController(),
    todoController: new TodoController()

  }
}
function timeStyle(unit) {
  if (unit < 10) {
    unit = '0' + unit;
    return unit;
  }
  else {
    return unit
  }
}
function runTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  minutes = timeStyle(minutes);
  var clock = hours + ":" + minutes
  document.getElementById('time').innerHTML = clock
  var t=setTimeout(runTime, 1000) // runs this function again to update time
}
runTime()