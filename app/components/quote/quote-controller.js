function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		//console.log(quote.quote)
		var temp = `
		<h3>${quote.quote}</h3>
		<h4>Author: ${quote.author}</h4>
		`
		document.getElementById('quote').innerHTML=temp
	})
}
