(function () {
    //switch的使用
    let number = 25;

    /*switch判断范围的时候可以用boole来判断*/
    switch (true){
        case number < 10:
            alert(10);
            break;
        case number > 20:
            alert(20);
            break;
        default:
            alert('no');
            break;
    }
    switch (number){
        case number < 10:
            alert(10);
            break;
        case number > 20:
            alert(20);
            break;
        default:
            alert('no');
            break;
    }

})();