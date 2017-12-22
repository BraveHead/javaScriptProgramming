(function () {
    let arr = [12,3,123,76,9,10,9,345];
    //1,冒泡算法
    function maoPaoSort(num) {
        for(let i=0;i< num.length;i++){
            for(let j =0;j < num.length-1;j++){
                let temp = 0;
                if(num[j] > num[j+1]){
                    temp = num[j+1];
                    num[j+1] = num[j];
                    num[j] = temp;
                }
            }
        }
        return num;
    }
    console.log(maoPaoSort(arr));

    //统计字符串中次数最多的字母
    let testString = 'hqehfqjwkdluqwldlasclkjaskhduihqwfqwaaaaaaa';
    function checkMaxTimes(str) {
       let obj = {};
       for(let i=0;i< str.length;i++){
           if(!obj[str.charAt(i)]){
               obj[str.charAt(i)] = 1;
           }else{
               obj[str.charAt(i)] += 1;
           }
       }

       let maxTime = 1,
           maxKeyName = '';
       for(let key in obj){
           if(obj[key] > maxTime){
               maxTime = obj[key];
               maxKeyName = key;
           }
       }
       return maxKeyName+ ',' + maxTime;
    }
    //数组去重
    let sameArr = [ 12, 34, 12, 45, 29, 12, 99, 3, 2,2,3];
    function arrRemoveSameNumber(a) {
        let arr = [],
            obj = {};
        for(let i=0;i< a.length;i++){
            if(!obj[a[i]]){
                obj[a[i]] = a[i];
                arr.push(a[i]);
            }
        }
        return arr;
    }
    //翻转字符串
    function resoveString(str) {
        let arr = str.split(''),
            i= 0,
            j = arr.length-1;
        while (i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        str = arr.toString();
        return str;
    }
    console.log(resoveString(testString));
})();