function Goods(options) {
    this.url=options.url;
    this.cont=options.cont;
    this.load();
}
Goods.prototype.load=function () {
    let that=this;
    $.ajax({url:this.url,
        success:function (res) {
            that.res=res;
            that.display()
        }
    })
};
Goods.prototype.display=function () {
    let str="";
    for (let i=0;i < 4;i++){
        str +=`<li data-id="${this.res[i].goodsId}"> 
                    <a href="#">
                       <img src="${this.res[i].src}"/>
                    </a>                 
                    <p>                        
                        <a href="#">
                            ${this.res[i].name}
                        </a>
                    </p>
                    <p>
                        <i>￥</i>
                        <b>${this.res[i].price}</b>
                        <em>/盒</em>
                    </p>
                </li>`;
    }
    this.cont.html(str)
};

new Goods({
    url:"http://localhost/kelipu/data/goods.json",
    cont:$(".choice_list")
});