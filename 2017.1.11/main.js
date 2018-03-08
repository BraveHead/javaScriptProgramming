(function () {
    let color = document.getElementsByName('color');
    let app = document.getElementById('app');
    app.setAttribute('color','black');
    console.log(app.color);
    //遍历元素的特性
    function outputAttributes(element) {
        let pairs = [],
            attrName,
            attrValue,
            i,
            len;
        for(i=0, len=element.attributes.length;i<len;i++){
            attrName = element.attributes[i].nodeName;
            attrValue = element.attributes[i].nodeValue;
            if(element.attributes[i].specified){
                pairs.push(attrName + '=' + attrValue);
            }
        }
        return pairs.join(" ");
    }
    console.log(outputAttributes(app));
})();