$(function(){
	
	$('.showleft').on("click",function(){
		var menuLeft = document.getElementById( 'cbp-spmenu-s1' );
		classie.toggle( this, 'active' );
		classie.toggle( menuLeft, 'cbp-spmenu-open');
	});

	$('.showright').on("click",function(){
		var menuRight = document.getElementById( 'cbp-spmenu-s2' );
		classie.toggle( this, 'active' );
		classie.toggle( menuRight, 'cbp-spmenu-open' );
	});	

	$('.showbottom').on("click",function(){
		var menuBottom = document.getElementById( 'cbp-spmenu-s4' );
		classie.toggle( this, 'active' );
		classie.toggle( menuBottom, 'cbp-spmenu-open' );
	});	
});
