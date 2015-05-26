$(document).ready(function() {

	var isRyuReady = false;

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		console.log('mousedown');
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({'left': '1020px'}, 500,
			function() {
				$(this).hide();
				$(this).css('left', '520px');
		}
		);
	})
	.mouseup(function() {
		console.log('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

	$(document).keydown(function(e) {
		if (e.which === 88 && isRyuReady === false ) {
			console.log('X key pressed');
			// show ryu-cool.gif
			playDust();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
			isRyuReady = true;
		}
	});
	$(document).keyup(function(e) {
		if (e.which === 88 && isRyuReady === true ) {
			console.log('X keyup');
			stopDust();
			$('.ryu-cool').hide();
			$('.ryu-throwing').hide()
			$('.ryu-still').show();
			console.log('Reached the end of keyup');
			isRyuReady = false;
		}
	});

	$('.instructions-1').delay(500).fadeIn('slow').delay(3000).fadeOut('slow');
	$('.instructions-2').delay(4000).fadeIn('slow').delay(3000).fadeOut('slow');

});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
 	$('#hadouken-sound')[0].play();
}

function playDust() {
	$('#another-one')[0].volume = 0.5;
	$('#another-one')[0].load();
	$('#another-one')[0].play();
}

function stopDust() {
	$('#another-one')[0].pause();
	$('#another-one')[0].currentTime = 0;
}

