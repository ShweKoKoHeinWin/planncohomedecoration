// START JQUERY
$(document).ready(function(){
	// #back to top arrow
	$(".btn-backtotops").hide();
	$(window).scroll(function(){
		let getScrollTop = $(this).scrollTop();
		if(getScrollTop >= 370){
			$(".btn-backtotops").fadeIn();
		}else{
			$(".btn-backtotops").hide();
		}
	})

/*&& Nav BUtton &&*/
	$(".navbuttons").click(function(){
		$(".navbuttons").toggleClass("crossxs")
	})
	
/*&& Scroll nav &&*/
	$(window).scroll(function(){
		let getScrollTop = $(this).scrollTop();
		if(getScrollTop >= 200){
			$(".navbar").addClass("navmenus")
		}else{
				$(".navbar").removeClass("navmenus")
		}
	})

/*&& propertylist switch &&*/
	$(".propertylists").click(function(){
		$(this).addClass("activeitems");
		$(this).siblings().removeClass("activeitems");

		let getattrvalue = $(this).attr("data-filter");

		if(getattrvalue === "all"){
		$(".filters").show("slide",2000);
		}else{
			$(".filters").hide();
			$(".filters").not("."+getattrvalue).hide();
			$(".filters").filter("."+getattrvalue).show("slide",2000);
		}
	})

/*&& Advertise &&*/
	$(window).scroll(function(){
		let getScroll = $(this).scrollTop();
		if(getScroll >= 1400){
			$(".advimgs").addClass("fromlefts");
			$(".advtexts").addClass("fromrights");
		}
		else{
			$(".advimgs").removeClass("fromlefts");
			$(".advtexts").removeClass("fromrights");
		}
	})

// && copyright year &&
	$("#year").text(new Date().getUTCFullYear());

})
// END JQUERY
/*^ Light box 2 ^*/
lightbox.option({
	showImageNumberLabel: false
	});