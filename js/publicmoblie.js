//放公共js使用

$(document).ready(function(){
	//弹层提示    分别参数为:文本,时间,图标(1为对勾),遮罩
	window.showError = function(msg, delay, oBocai,zhezhao) {
        var timer = null,errorHtml,obocaiStr;
        msg = msg || '请完善信息';
        oBocai = oBocai || 0;
        delay = delay || 1000;
        timer && clearTimeout(timer);
        if(oBocai == 0){
            obocaiStr='';
        }else{
            obocaiStr = '<i class="ob1"></i>';
        }
        if(zhezhao){
        	zhezhao = '<div class="m-opacity-layer"></div>';
        }
        errorHtml = '<div class="error-container"><div class="m-modal error-pop"></div><h3>' + obocaiStr + msg + '</h3>'+ zhezhao +'</div>';
        if ($('.error-container').length === 0) {
            $('body').append(errorHtml);
        }
        timer = setTimeout(function() {
            $('.error-container').remove();
        }, delay);
    }

    $('.join').click(function(){
        showError('参加成功',null,1,true);
    });

});

