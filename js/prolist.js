var prolist={
    init:function(){
        this.slideDown();
        this.classifyDown();
        this.loadPro();
        this.pagePro();
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

    //左侧分类下拉
    classifyDown:function(){
        $('.l_c_clfy>li>div').click(function(){
            // console.log($(this).find('span').attr('class'))
            if($(this).find('span').attr('class')){
                $(this).find('span').removeClass('l_arrow_r');
            }else{
                $(this).find('span').addClass('l_arrow_r');
            }
            if($(this).siblings('ul').css('display')=='block'){
                $(this).siblings('ul').hide();
            }else{
                $(this).siblings('ul').show();
            }
        });
    },

    myGetPath:function(){
        var path=document.location.pathname;
        var index=path.lastIndexOf('/');
        var str=path.substr(0,index);
        return str;
    },

    getPage:function(api){
        var that=this;
        $.get(api,function(data){
            for(var i=0;i<data.length;i++){
            
                var oLi=$("<li></li>");
                var oA=$("<a href='prod_view.html?prodid="+data[i].id+"'><img data-original='"+data[i].img+"' /></a>");
                var smallBox=$("<div class='small_box'><a href='prod_view.html?prodid="+data[i].id+"'><img data-original='"+data[i].img+"' /></a></div>");
                var proInfo=$("<div class='pro_info'><a href='prod_view.html?prodid="+data[i].id+"' class='pro_name'>"+data[i].name+"</a><span class='price'>"+data[i].price+"<i class='price1'>"+data[i].price1+"</i></span></div>");
                oA.appendTo(oLi);smallBox.appendTo(oLi);proInfo.appendTo(oLi);
                oLi.appendTo($('.list_data'));
            }
            $('.list_data li a').attr('target','_blank');
            
            //获取数据另外方式
            // $.each(data,function(index,value){
            //     // console.log(value);
            //     html+="<li>"+value['img']+"</li>";
            // })
            //console.log(html);
            
            //懒加载
            $('.list_data li img').lazyload({
                placeholder : that.myGetPath()+"/images/index/page_loading.gif",
                effect: "fadeIn", 
                threshold: 50,
            
            });
        },'json');
    },

    //ajax加载商品
    loadPro:function(){
        //ajax商品加载  http://www.zhangxinxu.com/jq/pagination_zh/demo_ajax.html  http://blog.csdn.net/sxs161028/article/details/74463732  http://www.jq22.com/jquery-info5697  
        var page=1;
        var proListApi=this.myGetPath()+'/json/prolist'+page+'.json';
        var html='';
        this.getPage(proListApi);
        
    },

    //商品翻页
    pagePro:function(){
        var that=this;
        $(".pagination").pagination({
            pageCount:2,
            // jump: true,
            totalData:70,
            coping: false ,
            current:1,
            showData:60,
            prevContent: '上一页',
            nextContent: '下一页',
            // callback:getPage
    
            callback: function (index) {
                proListApi=that.myGetPath()+'/json/prolist'+index.getCurrent()+'.json';
                $('.list_data li').remove();
                that.getPage(proListApi);
            }
        });
    }
}

/* $(function(){
    //全部商品下拉
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

    //左侧分类下拉
    $('.l_c_clfy>li>div').click(function(){
        // console.log($(this).find('span').attr('class'))
        if($(this).find('span').attr('class')){
            $(this).find('span').removeClass('l_arrow_r');
        }else{
            $(this).find('span').addClass('l_arrow_r');
        }
        if($(this).siblings('ul').css('display')=='block'){
            $(this).siblings('ul').hide();
        }else{
            $(this).siblings('ul').show();
        }
    })


    //ajax商品加载  http://www.zhangxinxu.com/jq/pagination_zh/demo_ajax.html  http://blog.csdn.net/sxs161028/article/details/74463732  http://www.jq22.com/jquery-info5697  
    function myGetPath(){
        var path=document.location.pathname;
        var index=path.lastIndexOf('/');
        var str=path.substr(0,index);
        return str;
    }
    var page=1;
    var proListApi=myGetPath()+'/json/prolist'+page+'.json';
    var html='';

    function getPage(api){
        $.get(api,function(data){
            for(var i=0;i<data.length;i++){
            
                var oLi=$("<li></li>");
                var oA=$("<a href='prod_view.html?prodid="+data[i].id+"'><img data-original='"+data[i].img+"' /></a>");
                var smallBox=$("<div class='small_box'><a href='prod_view.html?prodid="+data[i].id+"'><img data-original='"+data[i].img+"' /></a></div>");
                var proInfo=$("<div class='pro_info'><a href='prod_view.html?prodid="+data[i].id+"' class='pro_name'>"+data[i].name+"</a><span class='price'>"+data[i].price+"<i class='price1'>"+data[i].price1+"</i></span></div>");
                oA.appendTo(oLi);smallBox.appendTo(oLi);proInfo.appendTo(oLi);
                oLi.appendTo($('.list_data'));
            }
            $('.list_data li a').attr('target','_blank');
            //获取数据另外方式
            // $.each(data,function(index,value){
            //     // console.log(value);
            //     html+="<li>"+value['img']+"</li>";
            // })
            //console.log(html);
            
            //懒加载
            $('.list_data li img').lazyload({
                placeholder : myGetPath()+"/images/index/page_loading.gif",
                effect: "fadeIn", 
                threshold: 50,
               
            });
        },'json');
    }
    getPage(proListApi);


    // function pageLoad(){
    $(".pagination").pagination({
        pageCount:2,
        // jump: true,
        totalData:70,
        coping: false ,
        current:1,
        showData:60,
        prevContent: '上一页',
        nextContent: '下一页',
        // callback:getPage

        callback: function (index) {
            proListApi=myGetPath()+'/json/prolist'+index.getCurrent()+'.json';
            $('.list_data li').remove();
            getPage(proListApi);
        }
    });
   
    


}) */

