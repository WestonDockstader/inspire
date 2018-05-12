function WeatherController(){
	var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		var fahr = Math.floor(weather.main.temp*(9/5)-459.67)
		var city = weather.name.toUpperCase()
		var img = "http://openweathermap.org/img/w/"+weather.weather[0].icon+".png"
		//console.log(weather.weather[0])
		var temp = `
		<img src="${img}" alt="${weather.weather[0]} icon">
		<div class="float-right">
		<h3>${fahr}\xB0</h3>
		<p>${city}</p>
		</div>
		`
		document.getElementById('weather').innerHTML=temp
		//What can you do with this weather object?
	})

}
