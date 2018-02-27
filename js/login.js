var login={
    init:function(){
        this.checkLogin();
    },

    checkLogin:function(){
        var user=$('.user');
        var psd=$('.psd');
        var api='http://127.0.0.1/mbaobao/login.php';
        checkUser(user);
        checkUser(psd);
        function myGetPath(){
            var path=document.location.pathname;
            var index=path.lastIndexOf('/');
            var str=path.substr(0,index);
            return str;
        }
        $('.sub').click(function(){ 
            var flag='';
            
            $.post(api,{user:user.val(),password:psd.val()},function(data){
                if(data.msg && psd.val()){
                    $('.data_error').hide().html('').addClass('success');
                    $.cookie('userid',user.val(), { expires: 7,path:'/' });
                    window.location.href=myGetPath()+'/index.html';
                }else{
                    if(!psd.val()){
                        $('.data_error').hide();
                    }else{
                        $('.data_error').show().html(data.message);
                    }
                    
                }
                // isCheck(data);
                // console.log(data.msg);
                flag=data.msg;
            },'json');
            
            if($('.success').length>0){
                flag=true;
            }else{
                flag=false;
            }
            
            return false;
        })
        function isCheck(data){
            if(data){
                return true;
            }else{
                return false;
            }
        }
        
        function checkUser(ele){
            ele.blur(function(){
                if(!user.val()){
                    $('.error_user').show();
                    return false;
                }else{
                    $('.error_user').hide().html('');
                    $.post(api,{user:user.val()},function(data){
                        if(data.msg){
                            $('.data_error').hide().html('');
                        }else{
                            $('.data_error').show().html(data.message);
                        }
                        // console.log(data);
                        // return data.msg;
                    },'json');
                }
            });
        }
    }
}
/* 
$(function(){
    var user=$('.user');
    var psd=$('.psd');
    var api='http://127.0.0.1/mbaobao/login.php';
    checkUser(user);
    checkUser(psd);
    function myGetPath(){
        var path=document.location.pathname;
        var index=path.lastIndexOf('/');
        var str=path.substr(0,index);
        return str;
    }
    $('.sub').click(function(){ 
        var flag='';
        
        $.post(api,{user:user.val(),password:psd.val()},function(data){
            if(data.msg && psd.val()){
                $('.data_error').hide().html('').addClass('success');
                $.cookie('userid',user.val(), { expires: 7,path:'/' });
                window.location.href=myGetPath()+'/index.html';
            }else{
                if(!psd.val()){
                    $('.data_error').hide();
                }else{
                    $('.data_error').show().html(data.message);
                }
                
            }
            // isCheck(data);
            // console.log(data.msg);
            flag=data.msg;
        },'json');
        
        if($('.success').length>0){
            flag=true;
        }else{
            flag=false;
        }
        // if(flag){
        //     $.cookie('userid',user.val(), { expires: 7,path:'/' });
        // }
        // console.log(flag);
        
        return false;
        
        
    })
    function isCheck(data){
        if(data){
            return true;
        }else{
            return false;
        }
    }
    // function clickCheckUser(){
    //     $.post(api,{user:user.val(),password:psd.val()},function(data){
    //         if(data.msg){
    //             $('.data_error').hide().html('');
    //             window.location.href=myGetPath()+'/index.html';
    //             // re
    //         }else{
    //             $('.data_error').show().html(data.message);
    //             return data.msg;
    //         }
    //     },'json');
    //     // return data.msg;
    // }
    function checkUser(ele){
        ele.blur(function(){
            if(!user.val()){
                $('.error_user').show();
                return false;
            }else{
                $('.error_user').hide().html('');
                $.post(api,{user:user.val()},function(data){
                    if(data.msg){
                        $('.data_error').hide().html('');
                    }else{
                        $('.data_error').show().html(data.message);
                    }
                    // console.log(data);
                    // return data.msg;
                },'json');
            }
        });
    }
}) */