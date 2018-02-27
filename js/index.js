var index={
	init:function(){
		this.focus();
		this.swiperFocus();
		this.lazyLoad();
		this.stairs();
	},

	//获取路径
	myGetPath:function(){
		var pathName = document.location.pathname;    //    /mbaobao/index.html
		var index = pathName.lastIndexOf("/");  //  pathName.substr(1) => mbaobao/index.html
		var str=pathName.substr(0,index);
		return str;
	},

	//ajax banner图
	focus:function(){
		
		var bannerApi=this.myGetPath()+'/json/banner.json';

		//banner图，ajax获取
		$.get(bannerApi,function(data){
			// console.log(data);
			var $lis=$('.flexslider .slides li');
			for(var i=0;i<data.length;i++){
				$lis.eq(i).css('background','url('+data[i].img+') 50% 0 no-repeat');
			}
		},'json')
		$('.flexslider').flexslider({
			directionNav: true,
			pauseOnAction: false
		});
		$('.flex-direction-nav li a').hover(function(){
			$(this).css('opacity',0.5);
		},function(){
			$(this).css('opacity',0.3);        
		})
	},

	//swiper 轮播图
	swiperFocus:function(){
		var swiper = new Swiper('.swiper-container1', {
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},  
			pagination: {
				el:'.swiper-pagination1',
				clickable:true,
				type:'custom',
	
				renderCustom:function(swiper,current, total){
					// console.log(swiper, current, total)
					var img=$('.swiper-container1 .swiper-slide img');
					var imgA=$('.swiper-container1 .swiper-slide img').attr('alt');
					var arr=[];	
					var html='';			
					img.each(function(index){
						if(index<total){
							arr.push($(this).attr('alt'))
						}
					})
					arr.push(arr.shift());
					for(var i=0;i<arr.length;i++){
						if(i==(current-1)){
							html+="<a href='javascript:void(0)' class='active'>"+arr[i]+"</a>";
							
						}else{
							html+="<a href='javascript:void(0)'>"+arr[i]+"</a>";
	
						}
					}
					return html;
					// console.log(imgA)
				}
			},
			loop:true,		
		});
		var swiper2 = new Swiper('.swiper-container2', {
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},  
			pagination: {
				el:'.swiper-pagination2',
				clickable:true,
				type:'custom',
	
				renderCustom:function(swiper,current, total){
					// console.log(swiper, current, total)
					var img=$('.swiper-container2 .swiper-slide img');
					var imgA=$('.swiper-container2 .swiper-slide img').attr('alt');
					var arr=[];	
					var html='';			
					// return "<span></span>"
					img.each(function(index){
						// console.log($(this).attr('alt'))
						if(index<total){
							arr.push($(this).attr('alt'))
						}
						// console.log(arr,total)
					})
					arr.push(arr.shift());
					for(var i=0;i<arr.length;i++){
						if(i==(current-1)){
							html+="<a href='javascript:void(0)' class='active'>"+arr[i]+"</a>";
							
						}else{
							html+="<a href='javascript:void(0)'>"+arr[i]+"</a>";
	
						}
					}
					
					return html;
					// console.log(imgA)
				}
			},
			loop:true,		
		});
		var swiper3 = new Swiper('.swiper-container3', {
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},  
			pagination: {
				el:'.swiper-pagination3',
				clickable:true,
				type:'custom',
	
				renderCustom:function(swiper,current, total){
					// console.log(swiper, current, total)
					var img=$('.swiper-container3 .swiper-slide img');
					var imgA=$('.swiper-container3 .swiper-slide img').attr('alt');
					var arr=[];	
					var html='';			
					// return "<span></span>"
					img.each(function(index){
						// console.log($(this).attr('alt'))
						if(index<total){
							arr.push($(this).attr('alt'))
						}
						// console.log(arr,total)
					})
					arr.push(arr.shift());
					for(var i=0;i<arr.length;i++){
						if(i==(current-1)){
							html+="<a href='javascript:void(0)' class='active'>"+arr[i]+"</a>";
							
						}else{
							html+="<a href='javascript:void(0)'>"+arr[i]+"</a>";
	
						}
					}
					
					return html;
					// console.log(imgA)
				}
			},
			loop:true,		
		});
		var swiper4 = new Swiper('.swiper-container4', {
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},  
			pagination: {
				el:'.swiper-pagination4',
				clickable:true,
				type:'custom',
	
				renderCustom:function(swiper,current, total){
					// console.log(swiper, current, total)
					var img=$('.swiper-container4 .swiper-slide img');
					var imgA=$('.swiper-container4 .swiper-slide img').attr('alt');
					var arr=[];	
					var html='';			
					// return "<span></span>"
					img.each(function(index){
						// console.log($(this).attr('alt'))
						if(index<total){
							arr.push($(this).attr('alt'))
						}
						// console.log(arr,total)
					})
					arr.push(arr.shift());
					for(var i=0;i<arr.length;i++){
						if(i==(current-1)){
							html+="<a href='javascript:void(0)' class='active'>"+arr[i]+"</a>";
							
						}else{
							html+="<a href='javascript:void(0)'>"+arr[i]+"</a>";
	
						}
					}
					
					return html;
					// console.log(imgA)
				}
			},
			loop:true,		
		});
		var swiper5 = new Swiper('.swiper-container5', {
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},  
			pagination: {
				el:'.swiper-pagination5',
				clickable:true,
				type:'custom',
	
				renderCustom:function(swiper, current, total){
					// console.log(swiper, current, total)
					var img=$('.swiper-container5 .swiper-slide img');
					var imgA=$('.swiper-container5 .swiper-slide img').attr('alt');
					var arr=[];	
					var html='';			
					// return "<span></span>"
					img.each(function(index){
						// console.log($(this).attr('alt'))
						if(index<total){
							arr.push($(this).attr('alt'))
						}
						// console.log(arr,total)
					})
					arr.push(arr.shift());
					for(var i=0;i<arr.length;i++){
						if(i==(current-1)){
							html+="<a href='javascript:void(0)' class='active'>"+arr[i]+"</a>";
							
						}else{
							html+="<a href='javascript:void(0)'>"+arr[i]+"</a>";
	
						}
					}
					
					return html;
					// console.log(imgA)
				}
			},
			loop:true,		
		});
		//点击分页器切换
		$('.swiper-pagination1').on('click','a',function(){  //需要使用事件委托绑定，因为a是每滑动一次就会重新生成
			console.log($(this).index());
			swiper.slideTo($(this).index()+1,500,false);
			
		});
		$('.swiper-pagination2').on('click','a',function(){  //需要使用事件委托绑定，因为a是每滑动一次就会重新生成
			console.log($(this).index());
			swiper2.slideTo($(this).index()+1,500,false);
			
		});
		$('.swiper-pagination3').on('click','a',function(){  //需要使用事件委托绑定，因为a是每滑动一次就会重新生成
			console.log($(this).index());
			swiper3.slideTo($(this).index()+1,500,false);
			
		});
		$('.swiper-pagination4').on('click','a',function(){  //需要使用事件委托绑定，因为a是每滑动一次就会重新生成
			console.log($(this).index());
			swiper4.slideTo($(this).index()+1,500,false);
			
		});
		$('.swiper-pagination5').on('click','a',function(){  //需要使用事件委托绑定，因为a是每滑动一次就会重新生成
			console.log($(this).index());
			swiper5.slideTo($(this).index()+1,500,false);
			
		})
	
		$('.swiper-pagination').width($('.swiper-pagination1 a').outerWidth(true)*$('.swiper-pagination1 a').length);
		$('.swiper-pagination5').width($('.swiper-pagination5 a').outerWidth(true)*$('.swiper-pagination5 a').length);	
		$('.swiper-pagination').css('right',0).removeClass('swiper-pagination-custom');
	},

	//懒加载
	lazyLoad:function(){
		var that=this;
		$('.f_pro_list ul li img').lazyload({
			placeholder : that.myGetPath()+"/images/index/page_loading.gif",
			effect: "fadeIn", 
			threshold: 50,
		});
	},

	//楼梯效果
	stairs:function(){
		$(window).scroll(function(){
			var scrollTop=$(this).scrollTop();
			var wrapLis=$('#menu_wrap li');
			if(scrollTop>=($('.floor1').offset().top)){
				$('#menu_wrap').show();
			}else{
				$('#menu_wrap').hide();
			}
			$('.pro_floor').each(function(index,value){
				var minHeight=$(this).offset().top-$(this).height()/2;
				var maxHeight=$(this).offset().top+$(this).height()/2;
						// console.log($(this).offset().top)
						// var that=$(this);
				if(scrollTop>minHeight&&scrollTop<maxHeight){
					// wrapLis.each(function(index){
						wrapLis.find('a').css('backgroundPositionX',0);
						wrapLis.eq($(this).index()-1).find('a').css('backgroundPositionX','-79px');
					// })
				}
			})
			$('#menu_wrap li').click(function(){
				$(document).scrollTop($('.pro_floor').eq($(this).index()).offset().top);
				return false;
			});
			
		})
	}
	
}

/* $(function(){
	//获取路径
	function myGetPath(){
		var pathName = document.location.pathname;    //    /mbaobao/index.html
	 	var index = pathName.lastIndexOf("/");  //  pathName.substr(1) => mbaobao/index.html
	  	var str=pathName.substr(0,index);
	  	return str;
	}
	var bannerApi=myGetPath()+'/json/banner.json';

	//banner图，ajax获取
	$.get(bannerApi,function(data){
        // console.log(data);
        var $lis=$('.flexslider .slides li');
        for(var i=0;i<data.length;i++){
            $lis.eq(i).css('background','url('+data[i].img+') 50% 0 no-repeat');
        }
    },'json')
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false
    });
    $('.flex-direction-nav li a').hover(function(){
        $(this).css('opacity',0.5);
    },function(){
        $(this).css('opacity',0.3);        
	})
	

	//产品区轮播图
	      //http://www.jb51.net/article/131712.htm
	var swiper = new Swiper('.swiper-container1', {
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},  
		pagination: {
			el:'.swiper-pagination1',
			clickable:true,
			type:'custom',

			renderCustom:function(swiper,current, total){
				// console.log(swiper, current, total)
				var img=$('.swiper-container1 .swiper-slide img');
				var imgA=$('.swiper-container1 .swiper-slide img').attr('alt');
				var arr=[];	
				var html='';			
				img.each(function(index){
					if(index<total){
						arr.push($(this).attr('alt'))
					}
				})
				arr.push(arr.shift());
				for(var i=0;i<arr.length;i++){
					if(i==(current-1)){
						html+="<a href='javascript:void(0)' class='active'>"+arr[i]+"</a>";
						
					}else{
						html+="<a href='javascript:void(0)'>"+arr[i]+"</a>";

					}
				}
				return html;
				// console.log(imgA)
			}
		},
		loop:true,		
	});
	var swiper2 = new Swiper('.swiper-container2', {
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},  
		pagination: {
			el:'.swiper-pagination2',
			clickable:true,
			type:'custom',

			renderCustom:function(swiper,current, total){
				// console.log(swiper, current, total)
				var img=$('.swiper-container2 .swiper-slide img');
				var imgA=$('.swiper-container2 .swiper-slide img').attr('alt');
				var arr=[];	
				var html='';			
				// return "<span></span>"
				img.each(function(index){
					// console.log($(this).attr('alt'))
					if(index<total){
						arr.push($(this).attr('alt'))
					}
					// console.log(arr,total)
				})
				arr.push(arr.shift());
				for(var i=0;i<arr.length;i++){
					if(i==(current-1)){
						html+="<a href='javascript:void(0)' class='active'>"+arr[i]+"</a>";
						
					}else{
						html+="<a href='javascript:void(0)'>"+arr[i]+"</a>";

					}
				}
				
				return html;
				// console.log(imgA)
			}
		},
		loop:true,		
	});
	var swiper3 = new Swiper('.swiper-container3', {
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},  
		pagination: {
			el:'.swiper-pagination3',
			clickable:true,
			type:'custom',

			renderCustom:function(swiper,current, total){
				// console.log(swiper, current, total)
				var img=$('.swiper-container3 .swiper-slide img');
				var imgA=$('.swiper-container3 .swiper-slide img').attr('alt');
				var arr=[];	
				var html='';			
				// return "<span></span>"
				img.each(function(index){
					// console.log($(this).attr('alt'))
					if(index<total){
						arr.push($(this).attr('alt'))
					}
					// console.log(arr,total)
				})
				arr.push(arr.shift());
				for(var i=0;i<arr.length;i++){
					if(i==(current-1)){
						html+="<a href='javascript:void(0)' class='active'>"+arr[i]+"</a>";
						
					}else{
						html+="<a href='javascript:void(0)'>"+arr[i]+"</a>";

					}
				}
				
				return html;
				// console.log(imgA)
			}
		},
		loop:true,		
	});
	var swiper4 = new Swiper('.swiper-container4', {
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},  
		pagination: {
			el:'.swiper-pagination4',
			clickable:true,
			type:'custom',

			renderCustom:function(swiper,current, total){
				// console.log(swiper, current, total)
				var img=$('.swiper-container4 .swiper-slide img');
				var imgA=$('.swiper-container4 .swiper-slide img').attr('alt');
				var arr=[];	
				var html='';			
				// return "<span></span>"
				img.each(function(index){
					// console.log($(this).attr('alt'))
					if(index<total){
						arr.push($(this).attr('alt'))
					}
					// console.log(arr,total)
				})
				arr.push(arr.shift());
				for(var i=0;i<arr.length;i++){
					if(i==(current-1)){
						html+="<a href='javascript:void(0)' class='active'>"+arr[i]+"</a>";
						
					}else{
						html+="<a href='javascript:void(0)'>"+arr[i]+"</a>";

					}
				}
				
				return html;
				// console.log(imgA)
			}
		},
		loop:true,		
	});
	var swiper5 = new Swiper('.swiper-container5', {
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},  
		pagination: {
			el:'.swiper-pagination5',
			clickable:true,
			type:'custom',

			renderCustom:function(swiper, current, total){
				// console.log(swiper, current, total)
				var img=$('.swiper-container5 .swiper-slide img');
				var imgA=$('.swiper-container5 .swiper-slide img').attr('alt');
				var arr=[];	
				var html='';			
				// return "<span></span>"
				img.each(function(index){
					// console.log($(this).attr('alt'))
					if(index<total){
						arr.push($(this).attr('alt'))
					}
					// console.log(arr,total)
				})
				arr.push(arr.shift());
				for(var i=0;i<arr.length;i++){
					if(i==(current-1)){
						html+="<a href='javascript:void(0)' class='active'>"+arr[i]+"</a>";
						
					}else{
						html+="<a href='javascript:void(0)'>"+arr[i]+"</a>";

					}
				}
				
				return html;
				// console.log(imgA)
			}
		},
		loop:true,		
	});
	//点击分页器切换
	$('.swiper-pagination1').on('click','a',function(){  //需要使用事件委托绑定，因为a是每滑动一次就会重新生成
		console.log($(this).index());
		swiper.slideTo($(this).index()+1,500,false);
		
	});
	$('.swiper-pagination2').on('click','a',function(){  //需要使用事件委托绑定，因为a是每滑动一次就会重新生成
		console.log($(this).index());
		swiper2.slideTo($(this).index()+1,500,false);
		
	});
	$('.swiper-pagination3').on('click','a',function(){  //需要使用事件委托绑定，因为a是每滑动一次就会重新生成
		console.log($(this).index());
		swiper3.slideTo($(this).index()+1,500,false);
		
	});
	$('.swiper-pagination4').on('click','a',function(){  //需要使用事件委托绑定，因为a是每滑动一次就会重新生成
		console.log($(this).index());
		swiper4.slideTo($(this).index()+1,500,false);
		
	});
	$('.swiper-pagination5').on('click','a',function(){  //需要使用事件委托绑定，因为a是每滑动一次就会重新生成
		console.log($(this).index());
		swiper5.slideTo($(this).index()+1,500,false);
		
	})

	$('.swiper-pagination').width($('.swiper-pagination1 a').outerWidth(true)*$('.swiper-pagination1 a').length);
	$('.swiper-pagination5').width($('.swiper-pagination5 a').outerWidth(true)*$('.swiper-pagination5 a').length);	
	$('.swiper-pagination').css('right',0).removeClass('swiper-pagination-custom');


	//产品懒加载
	$('.f_pro_list ul li img').lazyload({
		placeholder : myGetPath()+"/images/index/page_loading.gif",
		effect: "fadeIn", 
		threshold: 50,
	});

	//楼梯效果
	$(window).scroll(function(){
		var scrollTop=$(this).scrollTop();
		var wrapLis=$('#menu_wrap li');
		if(scrollTop>=($('.floor1').offset().top)){
			$('#menu_wrap').show();
		}else{
			$('#menu_wrap').hide();
		}
		$('.pro_floor').each(function(index,value){
			var minHeight=$(this).offset().top-$(this).height()/2;
			var maxHeight=$(this).offset().top+$(this).height()/2;
					// console.log($(this).offset().top)
					// var that=$(this);
			if(scrollTop>minHeight&&scrollTop<maxHeight){
				// wrapLis.each(function(index){
					wrapLis.find('a').css('backgroundPositionX',0);
					wrapLis.eq($(this).index()-1).find('a').css('backgroundPositionX','-79px');
				// })
			}
		})
		$('#menu_wrap li').click(function(){
			$(document).scrollTop($('.pro_floor').eq($(this).index()).offset().top);
			return false;
		});
		
    })
	
})
 */