function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService=new ImageService();

	imageService.getImage(image=>{
		var temp=image.url
		//console.log(image.url)
		document.getElementById('body').style.backgroundImage="url('"+image.url+"')";
	})

	// function draw(){
	// 	var template=`<button class="btn btn-light" onclick="app.controllers.imageController.getImage()">Change Image</button>`
	// 	document.getElementById('img-btn').innerHTML=template;
	// }

	// this.newImage = function newImage(){
	// 	imageService.getImage()
	// }
	// draw()
}


