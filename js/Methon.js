var Methon=Methon||(function () {
    return {
        setStyle:function (elem,styleObj) {
           for( var str in styleObj){
               elem.style[str]=styleObj[str];
           }
        },
        createElem:function (type,parent,stylyObj) {
            var elem=document.createElement(type);
            if(parent){
                parent.appendChild(elem);
            }
            if(stylyObj){
                Methon.setStyle(elem,stylyObj);
            }
            return elem;
        }
    }
})();