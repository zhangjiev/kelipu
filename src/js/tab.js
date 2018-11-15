class Tab{
	constructor(){
		this.li = document.getElementById("choice_nav").children;
		this.div = document.getElementsByClassName("choice_content")
		this.index = 0;
		this.init();
	}
	init(){
		var that = this;
		for(let i = 0; i < this.li.length; i++){
			this.li[i].index = i;
			this.li[i].addEventListener("mouseenter",function(){
				that.changeIndex(this);
			})
		}
	}
	changeIndex(ele){
		this.index = ele.index;
		this.display()
	}
	display(){
		for(let i = 0; i < this.li.length; i++){
			this.li[i].className = "";
			$(this.div[i]).removeClass("active")
		}
		this.li[this.index].className = "active";
		$(this.div[this.index]).addClass("active")
	}
}
new Tab();
