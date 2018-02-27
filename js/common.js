
var common={
    init:function(){
        //底部
        $('.sub_btm ul').width($('.sub_btm ul li').length*$('.sub_btm ul li').outerWidth(true));
        this.scrollTop();
        this.topNavShow();
        this.topCart();
        this.searchBox();
        this.userInfo();
        this.cartInfo();
        this.goCart();
    },

    //回到顶部
    scrollTop:function(){
        $(window).scroll(function(){
            var scrollTop=$(this).scrollTop();
            if(scrollTop>$(window).height()){
                // console.log($(window).height());
                $('.to_top').css('opacity',1);
            }else{
                $('.to_top').css('opacity',0);
            }
            $('.to_top').click(function(){
                $(window).scrollTop(0);
            })
        })
    },

    //导航菜单显示 
    topNavShow:function(){

        $('.catalog_list .sub_classify').each(function() {
            $(this).find('li:odd').css('marginRight',0);
            $(this).find('li:last').css('borderBottom',0);
        });

        $('.catalog_list div').hover(function(){
            $(this).addClass('over_group').find('dl').css('background','#fff');
            $(this).find('.sub_list').show();
            if($(this).index()!=3){
                $(this).find('dd').css('borderBottom','1px solid #fff');
            }
            
        },function(){
            $(this).removeClass('over_group').find('dl').css('background','none');
            $(this).find('.sub_list').hide();
            if($(this).index()!=3){
                $(this).find('dd').css('borderBottom','1px solid #e5e5e5');
            }
            
        })
    },

    //头部购物车
    topCart:function(){
        $('.mycart').hover(function(){
            $('.cart_list').show();
        },function(){
            $('.cart_list').hide();
            
        })
    },

    //搜索框
    searchBox:function(){
        $('#text').focus(function(){
            $(this).val('');
        });
        $('#text').blur(function(){
            $(this).val('搜索"双肩包"试试~ ');
        })
    },

    //用户cookie信息
    userInfo:function(){
        var userid=$.cookie('userid');
        if(userid){
            $('#theUser').html(userid);
            // $('.top_login,.top_reg').hide();
            $('.login_message').html('').html('<a href="javascript:;" class="login_out">退出</a>');
        }
        
        $('.login_out').click(function(){
            $.cookie('userid','',{expires:-1,path:'/'});
            $('#theUser').html('');
            $('.login_message').html('<a href="login.html" class="top_login">登录</a> |<a href="register.html" class="top_reg">注册</a>');
            window.location.reload();
            // window.location.href=myGetPath()+'/login.html';
            
        });
    
    },

    //购物车数据
    cartInfo:function(){
        var cartInfo=$.cookie('cart_info');
        if(cartInfo && $('#theUser').html()){
            $('.cart_list>p').hide();
            cartInfo=JSON.parse(cartInfo);
            var cartItems=$('<div id="cart_items"></div>');
            for(var i=0;i<cartInfo.length;i++){
                var price='￥'+parseInt(cartInfo[i].prodPrice)*cartInfo[i].count;            
                $('<ul><li class="clearfix"><a href="#" class="item_img"><img src="'+cartInfo[i].prodImg+'"/></a><div class="item_right"><a href="#" class="pro_name">'+cartInfo[i].prodName+'</a><span class="num_pos">'+cartInfo[i].count+'</span><span class="price_pos">'+price+'</span></div></li></ul>').appendTo(cartItems);
            }
            
            $('<div class="cart_total"><div class="total_num"><span class="red_num">0</span>件总计:<span class="price">￥<b>0</b></span></div><a href="checkout.html" class="checkout">去购物车结算</a></div>').appendTo(cartItems);
            $(cartItems).appendTo('.cart_list');
            // console.log(num)
        }
        var num=totalNum($('.num_pos'));
        var totalPrice=totPrice($('.price_pos'));
        $('.buy_num').text(num);
        $('.red_num').text(num);
        $('.price b').text(totalPrice);
        // console.log(totalPrice);
        
        function totalNum(ele){
            var val=0;
            for(var i=0;i<ele.length;i++){
                val+=parseInt(ele[i].innerHTML);
            }
            return val;
        }

        function totPrice(ele){
            var price=0;
            for(var i=0;i<ele.length;i++){
                price+=parseFloat(ele[i].innerHTML.split('￥')[1]);
            }
            return price+'.00';
            
        }
    },

    //点击购物车
    goCart:function(){
        $('.cart_info a').click(function(){
            if($('#theUser').html()){
                $('.cart_info a').attr('href','checkout.html');
            }else{
                $('.cart_info a').attr('href','login.html').attr('target','_blank');
            }
        });
        var that=this;
        $('.search form').submit(function(){
            window.location.href=that.myGetPath()+'/prolist.html';
            return false;
        })
        
    },

    myGetPath:function(){
        var path=document.location.pathname;
        var index=path.lastIndexOf('/');
        var str=path.substr(0,index);
        return str;
    }

}