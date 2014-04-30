$(function(){
	$(".menu_iw > li").click(function(e){
		switch(e.target.id){
			case "categoria":
				//change status & style menu
				$("#categoria").addClass("active");
				$("#mas").removeClass("active");
				//display selected division, hide others
				$("div.categoria").fadeIn();
				$("div.mas").css("display", "none");
			break;
			case "mas":
				//change status & style menu
				$("#categoria").removeClass("active");
				$("#mas").addClass("active");
				//display selected division, hide others
				$("div.mas").fadeIn();
				$("div.categoria").css("display", "none");
			break;
		}
		//alert(e.target.id);
		return false;
	});
});