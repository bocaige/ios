var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth/750;
var userAgent = navigator.userAgent;   
var index = userAgent.indexOf("Android");
if(index >= 0){  
var androidVersion = parseFloat(userAgent.slice(index+8));
	if(androidVersion>2.3){
		$("head").eq(0).html("<meta name='viewport' content='width=750, initial-scale = "+phoneScale+", minimum-scale = "+phoneScale+", maximum-scale = "+phoneScale+",user-scalable=no, target-densitydpi=device-dpi'>");
	}else{
		$("head").eq(0).html("<meta name='viewport' content='width=750, target-densitydpi=device-dpi'>");
	}

}else{
	$("head").eq(0).html("<meta name='viewport' content='width=750, initial-scale = "+phoneScale+", minimum-scale = "+phoneScale+", maximum-scale = "+phoneScale+",user-scalable=no, target-densitydpi=device-dpi'>");
}
(function(){
    try{
      if(window.console && window.console.log){
        console.log('菠菜哥，狂拽酷炫吊炸天');
        console.log('Hi~ 欢迎加入 宅不住. \n\n \t\t\t %c 世界这么大，我想去看看!','color:#4FA6E7');
      }
    }catch(e){}
})();