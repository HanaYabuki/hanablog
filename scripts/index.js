function AddFavorite(url,title){
    alert("按下 Ctrl+D 添加！\n 点关注不迷路哟！"); 
 }

 //根据每天的日期改变整体主题颜色！
 //核心算法 ：利用HSV调色 
 //H值=((月份-1)*30+日期+年份)%360 
 //S值=1
 //V值=0.9(背景板) 0.7(深色背景) 0.1(标题色)
 /*
 window.onload = function(){
     this.alert("WelCome to HanaBlog");
 }
 */