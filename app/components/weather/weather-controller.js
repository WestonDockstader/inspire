function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather,city){
		var temp = `
		<h3>${Math.floor(weather)}\xB0
		<h5>${city}</h5></h3>
		`
		document.getElementById('weather').innerHTML=temp
		//What can you do with this weather object?
	})

}
