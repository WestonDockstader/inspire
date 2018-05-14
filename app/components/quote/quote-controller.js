function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		//console.log(quote.quote)
		var temp = `
		<div id="quote-body" class="d-inline-block flex-column formStyle">
		<p class="mb-0">${quote.quote}</p>
		<p id="quote-author" class="mb-0">Author - ${quote.author}</p>
		</div>
		`
		document.getElementById('quote').innerHTML=temp
	})
}
