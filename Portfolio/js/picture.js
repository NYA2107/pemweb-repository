class Picture{
	constructor(selector, url){
		this.selector = selector;
		this.url = url;
	}
	change(){
		let pic = document.querySelector(this.selector);
		pic.setAttribute('src',this.url);
		console.log("change");
	}

}