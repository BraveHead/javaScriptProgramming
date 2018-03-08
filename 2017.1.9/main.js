(function () {

    //舔砖后浏览器不会在历史记录中记录
    // setTimeout(()=>{
    //     location.replace('https://wwww.baidu.com');
    // }, 1000)

    //navigator对象

    let appCodeName = navigator.appCodeName,
        appName = navigator.appName,
        appVersion = navigator.appVersion,
        platform = navigator.platform;
    console.log(appCodeName, appName, appVersion,'>>>',platform);

    //检测浏览器的插件 (非IE)
    function hasPlugin(name) {
        name = name.toLowerCase();   //小写
        for(let i=0;i< navigator.plugins.length;i++){
            if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
                return true;
            }
        }
        return false;
    }
    console.log('flash:'+ hasPlugin('flash'), 'QuickTime:'+ hasPlugin('QuickTime'));

    //IE浏览器的插件检测
    function hasIEPlugin(name) {
        try{
            new ActiveXObject(name);
            return true;
        }catch (ex){
            return false
            ;
        }
    }

    console.log('flash:'+ hasIEPlugin('ShockwaveFlash.ShockwaveFlash'), 'QuickTime:'+ hasIEPlugin('QuickTime.QuickTime'));

    //跨浏览器检测插件
    function hasFlash() {
        let result = hasPlugin('flash');
        if(!result){
            result = hasIEPlugin('ShockwaveFlash.ShockwaveFlash');
        }
        return result;
    }

    console.log(hasFlash());

})();