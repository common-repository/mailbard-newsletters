// legacy code:
function version_compare(t,i){if(t===i)return 0;for(var a=t.split("."),n=i.split("."),l=Math.min(a.length,n.length),e=0;l>e;e++){if(parseInt(a[e])>parseInt(n[e]))return 1;if(parseInt(a[e])<parseInt(n[e]))return-1}return a.length>n.length?1:a.length<n.length?-1:0}jQuery(function(t){void 0===t.fn.on&&(t.fn.on=function(i,a,n,l){return"function"==typeof a?t(this.context).live(i,a):t(a).live(i,n,l),this}),t(document).on("click",".showerrors",function(){return t(".xdetailed-errors").toggle(),!1}),t(document).on("click",".shownotices",function(){return t(".xdetailed-updated").toggle(),!1}),t("form.widget_wysija").on("focus","input[placeholder]",function(){t(this).val()===t(this).attr("placeholder")&&t(this).val("")}),t("form.widget_wysija").on("blur","input[placeholder]",function(){""===t(this).val()&&t(this).val(t(this).attr("placeholder"))}),t("form.widget_wysija").on("focus","input.defaultlabels",function(){t(this).val()===t(this).attr("title")&&t(this).val("")}),t("form.widget_wysija").on("blur","input.defaultlabels",function(){""===t(this).val()&&t(this).val(t(this).attr("title"))}),t(document).on("submit","form.widget_wysija",function(i){if(i.preventDefault(),void 0!==wysijaAJAX.noajax)return t(this).validationEngine("validate");if(t(this).validationEngine("validate")===!0){var a=t(this).find('input[name="action"]').val(),n=t(this).find('input[name="controller"]').val(),l=t(this).attr("id"),e=t(this).serializeArray();wysijaAJAX.task=a,wysijaAJAX.controller=n,wysijaAJAX.formid=l,t.each(e,function(t,i){wysijaAJAX["data["+t+"][name]"]=i.name,wysijaAJAX["data["+t+"][value]"]=i.value}),t("#msg-"+l).html('<div class="allmsgs"><blink>'+wysijaAJAX.loadingTrans+"</blink></div>"),t("#"+l).fadeOut(),t.ajax({type:"post",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(i){t("#msg-"+l).html('<div class="allmsgs"></div>'),i.result||t("#"+l).fadeIn(),t.each(i.msgs,function(i,a){t("#msg-"+l+" .allmsgs ."+i+" ul").length||t("#msg-"+l+" .allmsgs").append('<div class="'+i+'"><ul></ul></div>'),t.each(a,function(a,n){t("#msg-"+l+" .allmsgs ."+i+" ul").append("<li>"+n+"</li>")})})},error:function(i,a,n){t("#msg-"+l).html('<div class="allmsgs"></div>'),t("#msg-"+l+" .allmsgs").html('<div class="error"><ul><li>Oops! There is a problem with this form:</li><li>textStatus:'+a+"</li><li>errorThrown:"+n+"</li><li>responseText:"+i.responseText+"</li></ul></div>")},dataType:"jsonp"})}return!1}),t(function(){var i="centerRight";wysijaAJAX.is_rtl&&(i="centerLeft"),t("form.widget_wysija").validationEngine("attach",{promptPosition:i,scroll:!1}),t("form.widget_wysija").bind("jqv.form.validating",function(){t(this).find("input[placeholder]").each(function(){t(this).val()===t(this).attr("placeholder")&&t(this).val("")})}),t("form.widget_wysija").find("input[placeholder]").each(function(){""===t(this).val()&&t(this).val(t(this).attr("placeholder"))}),t("form.widget_wysija").bind("jqv.form.validating",function(){t(this).find("input.defaultlabels").each(function(){t(this).val()===t(this).attr("title")&&t(this).val("")})}),t("form.widget_wysija").find("input.defaultlabels").each(function(){""===t(this).val()&&t(this).val(t(this).attr("title"))})})});

// new code:
(function( $ ) {
	'use strict';
	
	$(function(){

		$('.widget_wysija').on('submit',function(event){
			event.preventDefault();
			
			var form = $(this);
			var nonceField = $(form).find('input[name="mailbard_nonce"]');
			if ( ! $(nonceField).val() > '' ) {
				$.ajax({
					url: wysijaAJAX.ajaxurl,
					data: {
						'action': 'mailbard-get-nonce',
					},
					dataType: 'json',
					success:function(data) {
						$(nonceField).val(data.nonce);
						$(form).submit();
					},
					error: function(errorThrown){
					}
				});
				return false;
			} else {
				return true;
			}
			
		});

    });
	
})( jQuery );
