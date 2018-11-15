define( function() {
    class GoodsList{
        constructor(options){
           this.url = options.url;
           this.cont = options.cont;
           this.pageCont = options.pageCont;
           this.num = options.num;
           this.index = 0;
           this.init();
        }
        init(){
            var that = this;
            $.ajax({               
                    url:this.url,              
                    success:function(res){
                        that.res = res;
                        that.display();
                        that.createPage();
                    }
            })
        }
        display(){
            let str = "";
            for( let i = this.index*this.num;i < this.index*this.num+this.num ; i++){
                if(i < this.res.length){
                    str += `
                    <li data-id="${this.res[i].goodsId}">
                        <dl>
                            <dt>
                                <a href="#">
                                    <img src="${this.res[i].src}">
                                </a>
                            </dt>
                            <dd>
                                <p class="list-price">
                                    <span>
                                        <i>￥</i>
                                        <b>${this.res[i].price}</b>/箱                                       
                                    </span>
                                </p>
                                <p class="list-tit">
                                    <a href="#">${this.res[i].name}</a></p>
                                <p class="car">
                                    <span>
                                        <input type="text" value="1"/>
                                        <em>
                                            <i class="add"></i>
                                            <i class="sub"></i>
                                        </em>
                                    </span>
                                    <a href="#" class="btn">
                                        <i></i>
                                        加入购物车
                                    </a>
                                </p>
                            </dd>
                        </dl>
                    </li>`
                }
            }
            this.cont.html(str)
        }
        createPage(){
            var that = this;
            this.pageCont.pagination(this.res.length,{
                items_per_page:this.num,
                current_page:this.index,
                next_text:"下一页",
                prev_text:"上一页",
                callback:function(index){
                    that.index = index;
                    that.display()
                }
            })
        }
    
    }
    return GoodsList;
});

