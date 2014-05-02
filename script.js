$(function() {
	var h = $("h2");
	var p = $("p");
	p.not(":first").hide();
	h.on("click",function(){
	var it = $(this);
	if(it.next().is(":visible")){
		return;
	}
	p.hide();
	it.next().show();
	});
});
