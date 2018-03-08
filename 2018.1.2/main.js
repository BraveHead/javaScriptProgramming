
    //window上定义的属性和定义的全局变量的区别
    /*window.color = "red";
    var age = 10;
    console.log(window.color, color);   //red  10
    delete window.color;
    delete window.age;    //全局变量不能通过window对象来删除，全局属性可以删除
    console.log(window.color);  //undefind
    console.log(color);    //报错
    console.log(age);    //10*/

    //窗口位置  （浏览器窗口相对于屏幕的位置）
        //跨浏览器获取窗口位置
 /*   let leftPos = (typeof window.screenLeft ==='number')?window.screenLeft:window.screenX;
    let topPos = (typeof window.screenTop === 'number')?window.screenTop:window.screenY;
    console.log(leftPos,topPos);
*/
    //窗口大小   (无法取得浏览器窗口的精确大小，每个浏览器对应的定义不同，但是可以取得浏览器视口的大小)
  /*  let pageWidth = window.innerWidth,
        pageHeight = window.innerHeight;
    if(typeof pageWidth !=='number'){
        if(document.compatMode ==='CSS1Compat'){
            pageWidth = document.documentElement.clientWidth;
            pageHeight = document.documentElement.clientHeight;
        }else{
            pageWidth = document.body.clientWidth;
            pageHeight = document.body.clientHeight;
        }
    }
    console.log(pageWidth,pageHeight);*/
 /* document.querySelector('button').addEventListener('click', function (ev) {
      setTimeout(function () {
          let page;
          try{
              page = window.open('https://test.qtz360.com/index.html','_blank','height:200,width=400,top=100,left=200,resizeable=no');  //浏览器阻止了弹框，会返回null
              if(page === null){
                  page = true;
              }
          }catch (ex){
              page = true;
          }
          if(page){
              alert('弹框被浏览器阻止了，请在浏览器上允许弹框弹出！');     //弹出
          }
      },2000);
  },false);*/

  //alert, confirm, prompt()
    if(confirm('您好！')){
        alert('确认了！');
    }else{
        alert('请确认！');
    }
    let result = prompt('What your name?','');
    if(result != null){
        alert('Hello,'+ result);
    }else{
        alert('请输入姓名！');
    }


