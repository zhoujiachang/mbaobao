var checkout={
    init:function(){
        this.cartInfo();
        this.userInfo();
        this.deletePro();
    },

    //cookie获取购物车信息
    cartInfo:function(){
        var cartInfo=$.cookie('cart_info');
        if(cartInfo){
            var total=$('.total_num');
            var totalPrice=$('.total_price');
            var freight=$('.freight');
            var amount=$('.amount strong');
            freight.html("￥10.00");
            //获取cookie购物车数据，输出到页面上
            $('.cart_pick').hide();
            cartInfo=JSON.parse(cartInfo);
            
            for(var i=0;i<cartInfo.length;i++){
                var price='￥'+parseInt(cartInfo[i].prodPrice)*cartInfo[i].count+'.00';
                $('<tbody><tr><td><input type="checkbox" class="select" checked></td><td><a href="#" class="good_img"><img src='+cartInfo[i].prodImg+'></a></td><td><p><a href="#" class="prod_name">'+cartInfo[i].prodName+'</a></p><p>9132689502</p></td><td class="unitprice">'+cartInfo[i].prodPrice+'</td><td><div class="quantity"><a class="reduce btn" href="javascript:;">-</a><input class="good_num" type="text" value="'+cartInfo[i].count+'"><a class="add btn" href="javascript:;">+</a></div><div class="quantity_tip">一次最多购买五件</div></td><td><div class="price">'+price+'</div></td><td><a href="javascript:;" class="delete">删除</a></td></tr></tbody>').appendTo('.good_list');
            }
            
            //增减商品数量
            $('.reduce').click(function(){
                var value=$(this).siblings('.good_num').val();
                var price=parseInt($(this).parents('tbody').find('.unitprice').text());
                var prodName=$(this).parents('tbody').find('.prod_name').text();
                value--;
                if(!$(this).parents('tbody').find('.select').is(':checked')){
                    $(this).parents('tbody').find('.select').prop('checked',true);
                    
                }
                if(value<=1){
                    value=1;
                    $(this).siblings('.good_num').val(value);
                    $(this).parents('tbody').find('.price').text(countPrice(value,price));
                    total.text(totalNum($('.good_num')));     
                    totalPrice.text(totPrice($('.price')));
                    var amountVal=parseFloat(totalPrice.text().split('￥')[1])+parseFloat(freight.text().split('￥')[1]);
                    amount.text('￥'+amountVal+'.00');
                    for(var i=0;i<cartInfo.length;i++){
                        if(prodName==cartInfo[i].prodName){
                            cartInfo[i].count=value;
                        }
                    }
                    $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});
                    return false;
                }
                if(value<5){
                    $(this).parent().siblings('.quantity_tip').hide();                
                }
                $(this).siblings('.good_num').val(value);
                $(this).parents('tbody').find('.price').text(countPrice(value,price));
                total.text(totalNum($('.good_num')));     
                totalPrice.text(totPrice($('.price')));
                var amountVal=parseFloat(totalPrice.text().split('￥')[1])+parseFloat(freight.text().split('￥')[1]);
                amount.text('￥'+amountVal+'.00'); 
                for(var i=0;i<cartInfo.length;i++){
                    if(prodName==cartInfo[i].prodName){
                        cartInfo[i].count=value;
                    }
                }
                $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});                  
            });

            $('.add').click(function(){
                var value=$(this).siblings('.good_num').val();
                var price=parseInt($(this).parents('tbody').find('.unitprice').text());
                var prodName=$(this).parents('tbody').find('.prod_name').text();
                value++;       
                if(!$(this).parents('tbody').find('.select').is(':checked')){
                    $(this).parents('tbody').find('.select').prop('checked',true);
                    
                }
                if(value>=5){
                    value=5;
                    $(this).parent().siblings('.quantity_tip').show();
                    $(this).siblings('.good_num').val(value);
                    $(this).parents('tbody').find('.price').text(countPrice(value,price));
                    total.text(totalNum($('.good_num')));     
                    totalPrice.text(totPrice($('.price')));
                    var amountVal=parseFloat(totalPrice.text().split('￥')[1])+parseFloat(freight.text().split('￥')[1]);
                    amount.text('￥'+amountVal+'.00');
                    for(var i=0;i<cartInfo.length;i++){
                        if(prodName==cartInfo[i].prodName){
                            cartInfo[i].count=value;
                        }
                    }
                    $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});
                    return false;
                }
                $(this).siblings('.good_num').val(value);
                $(this).parents('tbody').find('.price').text(countPrice(value,price));

                total.text(totalNum($('.good_num')));     
                totalPrice.text(totPrice($('.price')));
                var amountVal=parseFloat(totalPrice.text().split('￥')[1])+parseFloat(freight.text().split('￥')[1]);
                amount.text('￥'+amountVal+'.00');   

                for(var i=0;i<cartInfo.length;i++){
                    if(prodName==cartInfo[i].prodName){
                        cartInfo[i].count=value;
                    }
                }
                $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});
                
            });


            total.text(totalNum($('.good_num')));
            totalPrice.text(totPrice($('.price')));
            var amountVal=parseFloat(totalPrice.text().split('￥')[1])+parseFloat(freight.text().split('￥')[1]);
            amount.text('￥'+amountVal+'.00');
            
        }
        
        function countPrice(value,price){
            return '￥'+value*price+'.00';
        }

        function totalNum(ele){
            var val=0;
            for(var i=0;i<ele.length;i++){
                val+=parseInt(ele[i].value);
            }
            return val;
        }

        function totPrice(ele){
            var price=0;
            for(var i=0;i<ele.length;i++){
                price+=parseFloat(ele[i].innerHTML.split('￥')[1]);
            }
            return '￥'+price+'.00';
            
        }
        
    },

    //用户cookie信息
    userInfo:function(){
        var userid=$.cookie('userid');
        if(userid){
            $('#theUser').html(userid);
            // $('.top_login,.top_reg').hide();
            $('.login_message').html('').html('<a href="javasript:;" class="login_out">退出</a>');
        }
        
        $('.login_out').click(function(){
            $.cookie('userid','',{expires:-1,path:'/'});
            $('#theUser').html('');
            $('.login_message').html('<a href="login.html" class="top_login">登录</a> |<a href="register.html" class="top_reg">注册</a>');
            window.location.href=myGetPath()+'/index.html';
        });

        function myGetPath(){
            var path=document.location.pathname;
            var index=path.lastIndexOf('/');
            var str=path.substr(0,index);
            return str;
        }
    },

    //删除商品
    deletePro:function(){
        var cartInfo=$.cookie('cart_info');
        if(cartInfo){
            cartInfo=JSON.parse(cartInfo);
            var total=$('.total_num');
            var totalPrice=$('.total_price');
            var freight=$('.freight');
            var amount=$('.amount strong');
            $('.delete').click(function(){
                var prodName=$(this).parents('tbody').find('.prod_name').text();                
                $(this).parents('tbody').remove();
                for(var i=0;i<cartInfo.length;i++){
                    if(prodName==cartInfo[i].prodName){
                        cartInfo.splice(i,1);
                    }
                }
                
                $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});
                total.text(totalNum($('.good_num')));
                totalPrice.text(totPrice($('.price')));
                var amountVal=parseFloat(totalPrice.text().split('￥')[1])+parseFloat(freight.text().split('￥')[1]);
                amount.text('￥'+amountVal+'.00');
                if(cartInfo==false){
                    $.cookie('cart_info','',{ expires: -1,path:'/'});
                    freight.text('￥0.00');
                    $('.cart_pick').show();
                    
                }
            });
            function totalNum(ele){
                var val=0;
                for(var i=0;i<ele.length;i++){
                    val+=parseInt(ele[i].value);
                }
                return val;
            }
    
            function totPrice(ele){
                var price=0;
                for(var i=0;i<ele.length;i++){
                    price+=parseFloat(ele[i].innerHTML.split('￥')[1]);
                }
                return '￥'+price+'.00';
                
            }
            $('.select').click(function(){
                var allLength=$('.select').length;
                var checkLength=$('.select:checked').length;
                // console.log(allLength,checkLength)
                if(checkLength==0){
                    freight.text('￥0.00');
                }else{
                    freight.text('￥10.00');                    
                }
                if($(this).is(":checked")){
                    
                    $(this).parents('tbody').removeClass('selected');
                    total.text(totalNum($('tbody:not(.selected)').find('.good_num')));
                    totalPrice.text(totPrice($('tbody:not(.selected)').find('.price')));
                    var amountVal=parseFloat(totalPrice.text().split('￥')[1])+parseFloat(freight.text().split('￥')[1]);
                    amount.text('￥'+amountVal+'.00');   
                    $('.checkbox').prop('checked',allLength==checkLength);                                   
                }else{
                    $(this).parents('tbody').addClass('selected');
                    total.text(totalNum($('tbody:not(.selected)').find('.good_num')));
                    totalPrice.text(totPrice($('tbody:not(.selected)').find('.price')));
                    var amountVal=parseFloat(totalPrice.text().split('￥')[1])+parseFloat(freight.text().split('￥')[1]);
                    amount.text('￥'+amountVal+'.00'); 
                    $('.checkbox').prop('checked',allLength==checkLength);                    
                                                    
                }
            });
            //全选
            $('.checkbox').click(function(){
                $('.select').prop('checked',$(this).prop('checked'));
                if($(this).prop('checked')){
                    total.text(totalNum($('.good_num')));
                    totalPrice.text(totPrice($('.price')));
                    var amountVal=parseFloat(totalPrice.text().split('￥')[1])+parseFloat(freight.text().split('￥')[1]);
                    amount.text('￥'+amountVal+'.00');
                    freight.text('￥10.00');                    
                    $('tbody').removeClass('selected');
                }else{
                    total.text('0');
                    totalPrice.text('￥0.00');
                    freight.text('￥0.00');
                    amount.text('￥0.00'); 
                }
            })
        }
        
    }
}
