var $block = '.header__iphone-frame';
var $frame_headline = $($block +'-headline');
var $frame_ball = $($block + '-discoBall')
var $frame_afroman = $($block + '-afroman')

function frame_visibible () {
	$frame_headline.fadeOut('fast', function() {});
	setTimeout(function() {
		$frame_ball.animate({top:"+=200"}, 1500);
		$frame_afroman.animate({bottom:"+=400"}, 1500);
		$frame_headline.fadeIn(6000, function() {});
	}, 2000);
}

jQuery(document).ready(function($) {
	frame_visibible();
});