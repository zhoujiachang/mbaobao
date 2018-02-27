var register={
    init:function(){
        this.slideDown();
        this.regInfo();

    },
    //导航全部商品下拉    
    slideDown:function(){
        $('.nav_menu>a').hover(function(){
            $('.catalog_list').show();
        },function(){
            $('.catalog_list').hide();
        });
        $('.catalog_list').hover(function(){
            $(this).show();
        },function(){
            $(this).hide();
        });
    },

    regInfo:function(){
        function regFocus(ele,str){
            if(ele){
                
                ele.focus(function(){
                    $(this).siblings('.error').removeClass().addClass('error').html(str).css('display','inline-block');
                })
            }
        }
        function regBlur(ele){
            if(ele){
                ele.blur(function(){
                    if(!$(this).val()){
                        $(this).siblings('.error').hide();
                    }
                })
            }
        }
        $('.get_code').click(function(){
            $(this).siblings('#idcode').show();
            $(this).siblings('#butn').show();
            $(this).siblings('.error').width(150);
            $(this).hide();
        });
        
        var error=['请填写正确的11位手机号码并进行验证','请填写6-20位密码，可以使用字母和数字组合','请填写6-20位密码，可以使用字母和数字组合','请填写短信验证码'];
        var error2=['手机号码格式错误，请重新填写','格式错误，请使用字母加数字的组合，请使用6-20个字符','两次密码输入不一致，请重新输入','验证码不正确'];
        var reg1=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
        var reg2=/^[0-9A-Za-z]{6,20}$/;
        var reg=[reg1,reg2,0,0];
        var regInput=$('.re_box input');
        var userName=$('.user_name');
        var pw=$('.pw');
        var api='http://127.0.0.1/mbaobao/register.php'; 
    
        for(var i=0;i<regInput.length;i++){
            if(regInput.eq(i).attr('type')=='text' || regInput.eq(i).attr('type')=='password'){
                regFocus(regInput.eq(i),error[i]);
                regBlur(regInput.eq(i));
                checkReg(regInput.eq(i),reg[i],error2[i]);
            }
            // console.log($('.re_box input').eq(i).attr('type'))
        }
    
        function checkReg(ele,reg,str){
            var IsBy='';
            $.idcode.setCode(); 
            $("#butn").click(function(){
                IsBy = $.idcode.validateCode();  //调用返回值，返回值结果为true或者false
                if(!IsBy){
                    $(this).siblings('.error').html(str).addClass('error_tip').removeClass('correct_tip');
                }else{
                    $(this).siblings('.error').html('').removeClass('error_tip').addClass('correct_tip');
                    
                }
                // console.log(IsBy);
            })
    
            if(reg){
                ele.blur(function(){
                    if(ele.val()){
                        if(!reg.test(ele.val())){
                            $(this).siblings('.error').html(str).addClass('error_tip');
                        }else{
                            if($(this).attr('class')=='user_name'){
                                $.ajax({
                                    url:api,
                                    type:'post',
                                    dataType:'json',
                                    data:{
                                        user:userName.val()
                                        
                                    },
                                    success:function(data){
                                           if(data.msg){
                                               $('.user_name').siblings('.error').html('').removeClass('error_tip').addClass('correct_tip');
    //                                         console.log(data)
                                           }else{
                                               $('.user_name').siblings('.error').html(data.message).addClass('error_tip');
                                           }
    //                                  console.log(data);
                                    },
                                    error:function(data){
                                        console.log(data);
                                        
                                    }
                                })
    
                            }else{
                                $(this).siblings('.error').html('').removeClass('error_tip').addClass('correct_tip');
                            }
                        }
                    }
                    
                });
            }else{
                ele.blur(function(){
                    if(!($('.pw').val()==$('.cpw').val())){
                        $(this).siblings('.error').html(str).addClass('error_tip');
                    }else{
                        $(this).siblings('.error').html('').removeClass('error_tip').addClass('correct_tip');
                    }
                    if(ele.attr('id')=='Txtidcode'){
                        IsBy = $.idcode.validateCode();  //调用返回值，返回值结果为true或者false
                        if(!IsBy){
                            $(this).siblings('.error').html(str).addClass('error_tip').removeClass('correct_tip');
                            $(this).siblings('.error').width(150);
                        }else{
                            $(this).siblings('.error').html('').removeClass('error_tip').addClass('correct_tip');
                        }
                    }
                    
                })
            }
           
            
        }
        function myGetPath(){
            var path=document.location.pathname;
            var index=path.lastIndexOf('/');
            var str=path.substr(0,index);
            return str;
        }
        $('.sub').click(function(){
            if($('.correct_tip').length==4){
                $.ajax({
                    url:api,
                    type:'post',
                    dataType:'json',
                    data:{
                        user:userName.val(),
                        password:pw.val()
                    },
                    success:function(data){
                        if(data.msg){
                            alert(data.message);
                            window.location.href=myGetPath()+'/index.html';
                            $.cookie('userid',userName.val(), { expires: 7,path:'/' });
    //                  console.log(data);
                            
                        }
    //  console.log(data);
                    }
                    
                })
            }else{
                return false;
            }
    
        })
    }
}

