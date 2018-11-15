require.config({	
	baseUrl:"js",
	paths:{
		jQuery:"libs/jquery",
		Goods:"model/GoodsList",
		page:"libs/jquery.pagination",
		com:"model/commodity"
	}
	
})


require(["page","Goods","com"],function(_,Goods,com){
	new Goods({
        url:"http://localhost/kelipu/data/goods.json",
		cont:$(".list").children("ul"),
		pageCont:$("#Pagination"),
		num:20
	});
	setTimeout(function(){

		new com({
			li:$("#list").children("ul").children("li"),
		})
	},1000)
})