
var prodView={

    init:function(){
        this.slideDown();
        this.prodMagnifier();
        this.prodTab();
        this.search();
        this.addClick();
        this.cartFly();
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

    //放大镜
    prodMagnifier:function(){

        $('#magnifier').magnifier();
        $('.wrapper').width(
            $('.wrapper li').outerWidth(true)*$('.wrapper li').length
        )
        var num=5;
        $('.btn-prev').click(function(){
            num++;
            if(num>$('.wrapper li').length){
                num=$('.wrapper li').length;
            }
            $('.wrapper').css('left',-$('.wrapper li').outerWidth(true)*(num-5));
        })
        $('.btn-next').click(function(){
            num--;
            if(num<5){
                num=5;
            }
            $('.wrapper').css('left',-$('.wrapper li').outerWidth(true)*(num-5));
        })
    },

    //商品详情tab切换及scroll一屏固定到顶部
    prodTab:function(){
        $('.item_tab li').click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.content_item').eq($(this).index()).addClass('active').siblings().removeClass('active');
        });
        var minHeight=$('.content_hd').offset().top;
        $(window).scroll(function(){
            var scrollTop=$(this).scrollTop();
            if(scrollTop>minHeight){
                $('.content_hd').addClass('hd_fixed');
            }else{
                $('.content_hd').removeClass('hd_fixed');                
            }
        })
    },

    //通过url地址ajax获取相应图片和商品名称
    search:function(){
        var url=window.location.search;
        var str=url.substr(url.indexOf('?')+1);
        var id=str.split('=')[1];
        var api=this.myGetPath()+'/json/prolist1.json';
        var that=this;
        $.get(api,function(data){
            $.each(data,function(index,val){
                // console.log(val)
                if(val.id==id){
                    $('#magnifier .small-box img').attr('src',val.img);
                    $('#magnifier .big-box img').attr('src',val.img);  
                    $('.choose_now img').attr('src',val.img);
                    $('.goods_detail h1').html(val.name);
                    $('.location span').html(val.name);
                    $('title').html(val.name);           
                    $('.goods_price strong').html(that.priceZero(val.price.split('￥')[1]));
                    $('.content_buy em').html(that.priceZero(val.price.split('￥')[1]));
                    return false;
                }
            })
        },'json');
        if($.cookie('userid')){
        	$('.goods_login').css('visibility','hidden');
        }
    },

    //获取路径
    myGetPath:function(){
        var path=document.location.pathname;
        var index=path.lastIndexOf('/');
        var str=path.substr(0,index);
        return str;
    },

    //给价格加两位小数点
    priceZero:function(price){
        var zero=price.toString().split('.')[1];
        if(zero!='00'){
            return price+'.00';
        }
    },

    //购物车小球飞入
    cartFly:function(){
        var offset = $(".side_cart").offset();
        if($('#theUser').html()){
            $('.collect').click(function(event){
                var img=$('.small-box').find('img').attr('src');
                var flyer=$('<img src='+img+' class="u-flyer">');
                flyer.fly({
                    //开始位置
                    start: {
                        left: event.clientX,
                        top: event.clientY
                    },
                    //结束位置
                    end: {
                        left: offset.left,
                        top: offset.top,
                        width: 0,
                        height: 0
                    },
                    //结束后
                    onEnd: function(){
                        // console.log(offset.left,offset.top);
                        // $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
                        flyer.remove();
                    }
                });
            });   
        }
         
    },

    //加入购物车
    addCart:function(){
        //加入购物车
        var prodName=$('.goods_detail h1').text();
        var prodImg=$('.small-box').find('img').attr('src');
        var prodPrice=$('.goods_price strong').text();
        var prodList=[{
            prodName:prodName,
            prodImg:prodImg,
            prodPrice:prodPrice,
            count:1
        }];
        // $.cookie('cart_info',JSON.stringify(prodList),{ expires: 7,path:'/'});
        var cartInfo=$.cookie('cart_info');
        if(cartInfo){
            cartInfo=JSON.parse(cartInfo);
            // console.log(cartInfo.prodName);
            var index=hasProduct(prodList,cartInfo);
            if(index==-1){
                cartInfo=cartInfo.concat(prodList);
                $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});
                console.log(index);
                
            }else{
                cartInfo[index].count+=1;
                $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});
                console.log(index);
            }
        }else{
            $.cookie('cart_info',JSON.stringify(prodList),{ expires: 7,path:'/'});
        }
        
        // console.log(cartInfo);

        function hasProduct(product,cartInfo){
					
            if(cartInfo){
                
                for(var i=0;i<cartInfo.length;i++){
                    if(product[0].prodName==cartInfo[i].prodName){   /*购物车有当前数据*/
                                                        
                        return i;   /*有返回索引值*/
                    } 
                    
                }
            }
            return -1;   /*没有*/
        }
    },

    addClick:function(){
        var that=this;
        if($('#theUser').html()){
            $('.collect').click(function(){
                that.addCart();
            });
            $('.buy_now').click(function(){
                that.addCart();
            });
        }else{
            $('.collect').click(function(){
                alert('请登录购买');
                return false;
            });
            $('.buy_now').click(function(){
                alert('请登录购买');
                return false;
            });
        }
        
    }

    // checkCart:function(){
    //     if($('#theUser').html()){

    //     }
    // }
    
    
}
// $(function(){
//     var offset = $(".side_cart").offset(); 
//     $('.collect').click(function(event){
        
//         var img=$('.small-box').find('img').attr('src');
//         var flyer=$('<img src='+img+' class="u-flyer">');
//         flyer.fly({
// 			//开始位置
// 			start: {
// 				left: event.clientX,
// 				top: event.clientY
// 			},
// 			//结束位置
// 			end: {
// 				left: offset.left,
// 				top: offset.top,
// 				width: 0,
// 				height: 0
// 			},
// 			//结束后
// 			onEnd: function(){
// 				// console.log(offset.left,offset.top);
// 				// $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
// 				flyer.remove();
// 			}
//         });

//         //加入购物车
//         var prodName=$('.goods_detail h1').text();
//         var prodImg=$('.small-box').find('img').attr('src');
//         var prodPrice=$('.goods_price strong').text();
//         var prodList=[{
//             prodName:prodName,
//             prodImg:prodImg,
//             prodPrice:prodPrice,
//             count:1
//         }];
//         // $.cookie('cart_info',JSON.stringify(prodList),{ expires: 7,path:'/'});
//         var cartInfo=$.cookie('cart_info');
//         if(cartInfo){
//             cartInfo=JSON.parse(cartInfo);
//             // console.log(cartInfo.prodName);
//             var index=hasProduct(prodList,cartInfo);
//             if(index==-1){
//                 cartInfo=cartInfo.concat(prodList);
//                 $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});
//                 console.log(index);
                
//             }else{
//                 cartInfo[index].count+=1;
//                 $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});
//                 console.log(index);
//             }
//         }else{
//             $.cookie('cart_info',JSON.stringify(prodList),{ expires: 7,path:'/'});
//         }
        
//         // console.log(cartInfo);

//         function hasProduct(product,cartInfo){
					
//             if(cartInfo){
                
//                 for(var i=0;i<cartInfo.length;i++){
//                     if(product[0].prodName==cartInfo[i].prodName){   /*购物车有当前数据*/
                                                        
//                         return i;   /*有返回索引值*/
//                     } 
                    
//                 }
//             }
//             return -1;   /*没有*/
//         }
//     });

//     $('.buy_now').click(function(){
//         //加入购物车
//         var prodName=$('.goods_detail h1').text();
//         var prodImg=$('.small-box').find('img').attr('src');
//         var prodPrice=$('.goods_price strong').text();
//         var prodList=[{
//             prodName:prodName,
//             prodImg:prodImg,
//             prodPrice:prodPrice,
//             count:1
//         }];
//         // $.cookie('cart_info',JSON.stringify(prodList),{ expires: 7,path:'/'});
//         var cartInfo=$.cookie('cart_info');
//         if(cartInfo){
//             cartInfo=JSON.parse(cartInfo);
//             // console.log(cartInfo.prodName);
//             var index=hasProduct(prodList,cartInfo);
//             if(index==-1){
//                 cartInfo=cartInfo.concat(prodList);
//                 $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});
//                 console.log(index);
                
//             }else{
//                 cartInfo[index].count+=1;
//                 $.cookie('cart_info',JSON.stringify(cartInfo),{ expires: 7,path:'/'});
//                 console.log(index);
//             }
//         }else{
//             $.cookie('cart_info',JSON.stringify(prodList),{ expires: 7,path:'/'});
//         }
        
//         // console.log(cartInfo);

//         function hasProduct(product,cartInfo){
					
//             if(cartInfo){
                
//                 for(var i=0;i<cartInfo.length;i++){
//                     if(product[0].prodName==cartInfo[i].prodName){   /*购物车有当前数据*/
                                                        
//                         return i;   /*有返回索引值*/
//                     } 
                    
//                 }
//             }
//             return -1;   /*没有*/
//         }
//     })
    
// })