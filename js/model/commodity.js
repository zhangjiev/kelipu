define( function() {

    class Commodity{
        constructor(options){
            // this.url = options.url;
            this.li = options.li;
            // this.IBox = options.IBox;
            // this.RBox = options.RBox;
            this.load();
        }
        load(){
            let that = this;
            for(let i = 0 ; i < this.li.length ; i++){
                this.li[i].click(function(){
                    that.id = this.id;
                    console.log(that.id)
                })
            }
        }
        display(){

        }
    }
    return Commodity;
});
// new Commodity({
//     url:"http://localhost/kelipu/data/goods.json",
//     li:$(".list").children("ul").children(li),
//     Ibox:$(".imgB"),
//     RBox:$(".resBox")

// })
console.log(1);