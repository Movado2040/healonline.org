(function(){
	
	//alert("We have lift off");

	var nav = $("div.jumbo_nav a");
	var imgs = $("div.jumbotron div.img_cont img");
	var time = setTimeout(function() {

		console.log("Hello World");

	}, 3000);

	console.log(imgs.length);

	$(window).on("resize",function(){
		$("div.img_cont img").not(".front").css({top:$("div.img_cont img").not(".front").css("margin-bottom")});
		$("div.img_cont img.front").css({top:"0px"});
		$("div.img_cont img:eq(0)").css({top:"0px"});
		if($("div.img_cont img:last").hasClass("front")){
			$("div.img_cont img:last").prevAll().css({top:"0px"});
		}
	});

	console.log($("div.img_cont img").not(".front").css("margin-bottom"));



	$(nav).on("click",function(event){
		event.preventDefault();

		$("div.img_cont img").stop().animate({opacity:"0.0"},300);

		console.log($(this).index());
		$(imgs).removeClass("front");

		$(imgs[$(this).index()]).toggleClass("front");

		$(".front").stop().animate({opacity:"1.0"},500);

		console.log($(".focus",imgs));

		{
			$("div.img_cont img").not(".front").css({top:$("div.img_cont img").not(".front").css("margin-bottom")});
			$("div.img_cont img.front").css({top:"0px"});
			$("div.img_cont img:eq(0)").css({top:"0px"});
			if($("div.img_cont img:last").hasClass("front")){
				$("div.img_cont img:last").prevAll().css({top:"0px"});
			}
		};

	});

	//$(nav[0]).trigger("click");

}())