x=16*16;x++;
totals=29.25;
n=100;
$(document).ready(function(){
	for(var i=1;i<257;i++){
		$('.container').append('<div class="gr"></div>');	
	}
	hov();
});

function num(){
	 reg();
	 hov();
}
function reg(){
	 x=prompt("Enter new number for squares!");
	 totals=(500/x)-2;
	 x=x*x;
	 x=x+1;

	 $('.container').find('.gr').remove();

	 	for(i=1;i<x;i++){
			$('.container').append('<div class="gr"></div>');
		}

	 $(".gr").css("height",totals+"px");
	 $(".gr").css("width",totals+"px");
}

function hov(){
	$(".gr").hover(
		function(){
    	$(this).css("background-color", "yellow");
    	},
    	 function(){
    	$(this).css("background-color", "pink");
    });
}

function cla(){
	$('.gr').css('background-color','#ffcc22');
}
function ran(){
	 $('.container').find('.gr').remove();

	 for(i=1;i<x;i++){
		$('.container').append('<div class="gr"></div>');
	 }

	 $(".gr").css("height",totals+"px");
	 $(".gr").css("width",totals+"px");

	 hovrand();
}

function hovrand(){
	loop=setInterval(function(){
	 r=Math.floor((Math.random() * 256) + 1); 
	 g=Math.floor((Math.random() * 256) + 1); 
	 b=Math.floor((Math.random() * 256) + 1); 
	 r2=Math.floor((Math.random() * 256) + 1); 
	 g2=Math.floor((Math.random() * 256) + 1); 
	 b2=Math.floor((Math.random() * 256) + 1); 
	 },10);
	 n-=10;
	 	$(".gr").hover(
			function(){
    		$(this).css("background-color", "rgb("+r+","+g+","+b+")");
    		},
    	 	function(){
    		$(this).css("background-color", "rgb("+r2+","+b2+","+g2+")");
    		a=$(this).css('opacity');
    		a=a-0.08;
    		$(this).css('opacity',a);
    	});
} 
