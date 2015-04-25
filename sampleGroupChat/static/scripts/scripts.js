var winWidth;
var winHeight;
var popupWidth;
var popupHeight;

function setVariables(openerId) {
	winWidth = $(window).width();
	winHeight = $(window).height();
	popupWidth = $('#'+'soft_popup_'+openerId).outerWidth();
	popupHeight = $('#'+'soft_popup_'+openerId).outerHeight();
}

function closeModal(){
    $(".screen-blocker").fadeOut("slow");
    $('.modal-box').fadeOut("slow");
    $(".form-layout span").html('');
    $(".form-layout input[type=text]").val('');
    $(".form-layout input[type=password]").val('');
    $(".form-layout input[type=textarea]").val('');
    if($("#rule")){
        $("#rule").val($("#rule option:first").val());
        $("#rule").change();
    }
}
$(document).ready(function(){
	/* Script for sticking footer at bottom when content changes*/
	$(function(){
		$('.body-area').resize(function(){
			var windowHeight = $(window).height();
			var middleWrapperHeight = $(".middle-container").outerHeight();
            
			var headerHeight = $("header").outerHeight();
			var footerHeight = $("footer").outerHeight();
            if($(".pagination").html()){
                var paginationHeight = $(".pagination").outerHeight();
                var contentHeight = windowHeight-headerHeight-paginationHeight-footerHeight-20;
                $(".main-container").outerHeight(middleWrapperHeight+headerHeight+footerHeight+paginationHeight+35);
            }
            else{
                var contentHeight = windowHeight-headerHeight-footerHeight-20;	
                $(".main-container").outerHeight(middleWrapperHeight+headerHeight+footerHeight+35);
            }

		});
		$('.body-area').resize();
	});
	
	
	$(".tab-container .tab:eq(0)").addClass("selected");
	$(".tab-container .tab-content:eq(0)").show();
	
	$(".tab-container .tab").click(function(){
		var getTabId = $(this).attr("id");
		
		$(".tab-container .tab").removeClass("selected");
		$(this).addClass("selected");
		$(".tab-container .tab-content").hide();
		$("."+getTabId+"-content").show();
	});
	
	$(".accordion-list .expand-collapse").live("click",function(){
		$(this).toggleClass("expanded");
		$(this).siblings("ul").toggle();
	});
	
	$(".results-grid.accordion-list .expand-collapse").live("click", function(){
		$(this).toggleClass("expanded");
		$(this).parents(".row").next().toggle();
	});
	
	
	$('.open_modal').live("click", function () {	
		var openerId = $(this).attr('id');
		setVariables(openerId);

		$('#'+'soft_popup_'+openerId).css("top",(winHeight-popupHeight)/2);
		$('#'+'soft_popup_'+openerId).css("left",(winWidth-popupWidth)/2);

		$('#'+'soft_popup_'+openerId).fadeIn("slow");
		
		$(".screen-blocker").css("width",winWidth);
		$(".screen-blocker").css("height",winHeight);
		$(".screen-blocker").css("opacity",0.5);
		$(".screen-blocker").show();
        var url = $(this).data("addurl");
        if(url){
            $('#'+'soft_popup_'+openerId + " form").attr("action", url);
            $(".hide").css("display","block"); 
            $(".passdiv").css("display","none"); 
        }
	});
	
	
	$('.close-btn').live("click", function(){
		closeModal();
	});
	
	$('.cancel').live("click", function(){
		closeModal();
	});
});
