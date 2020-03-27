function AddFavorite(url,title){
    alert("按下 Ctrl+D 添加！\n 点关注不迷路哟！"); 
 }

 //根据每天的日期改变整体主题颜色！
 //核心算法 ：利用HSV调色 
 //H值=((月份-1)*30+日期+年份)%360 
 //S值=10(背景板) 40(深色背景) 80(标题色)
 //V值=

//1.HSV转RGB！
function HSVtoRGB(arr) {
    var h = arr[0], s = arr[1], v = arr[2];
    s = s / 100;
    v = v / 100;
    var r = 0, g = 0, b = 0;
    var i = parseInt((h / 60) % 6);
    var f = h / 60 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    switch (i) {
        case 0:
            r = v; g = t; b = p;
            break;
        case 1:
            r = q; g = v; b = p;
            break;
        case 2:
            r = p; g = v; b = t;
            break;
        case 3:
            r = p; g = q; b = v;
            break;
        case 4:
            r = t; g = p; b = v;
            break;
        case 5:
            r = v; g = p; b = q;
            break;
        default:
            break;
    }
    r = parseInt(r * 255.0)
    g = parseInt(g * 255.0)
    b = parseInt(b * 255.0)
    str = "rgb("+r+','+g+','+b+')'
    return str;
}
//2.寻找div来魔改颜色！
function ChangeColor(id,h,s,v){
    tmp = document.getElementById(id);
    try {
        tmp.style.backgroundColor = HSVtoRGB([h,s,v]);
    } catch (error) {
        
    }
    
}
//3.开始魔改！
function scrIndex(){
    var d = new Date();
    h = (d.getMonth()*30+d.getDate()+d.getFullYear())%360;
    ChangeColor("Header",h,80,90);
    ChangeColor("Side",h,40,95);
    ChangeColor("Main",h,10,95);
}
function scrAll(){
    var d = new Date();
    h = (d.getMonth()*30+d.getDate()+d.getFullYear())%360;
    ChangeColor("Header",h,80,90);
    ChangeColor("Main",h,10,95);
}