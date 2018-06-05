function lihat(selector){
		var dom = select(selector);
		dom.show();
}
function sembunyi(selector){
		var dom = select(selector);
		dom.hide();
}

function showAbout(){
	lihat('#about');
	sembunyi('#portofolio');
	sembunyi('#services');
	sembunyi('#career');
	sembunyi('#blog');
	sembunyi('#contact');
}
function showPortofolio(){
	sembunyi('#about');
	lihat('#portofolio');
	sembunyi('#services');
	sembunyi('#career');
	sembunyi('#blog');
	sembunyi('#contact');
}
function showServices(){
	sembunyi('#about');
	sembunyi('#portofolio');
	lihat('#services');
	sembunyi('#career');
	sembunyi('#blog');
	sembunyi('#contact');
}
function showCareer(){
	sembunyi('#about');
	sembunyi('#portofolio');
	sembunyi('#services');
	lihat('#career');
	sembunyi('#blog');
	sembunyi('#contact');
}
function showBlog(){
	sembunyi('#about');
	sembunyi('#portofolio');
	sembunyi('#services');
	sembunyi('#career');
	lihat('#blog');
	sembunyi('#contact');
}
function showContact(){
	sembunyi('#about');
	sembunyi('#portofolio');
	sembunyi('#services');
	sembunyi('#career');
	sembunyi('#blog');
	lihat('#contact');
}