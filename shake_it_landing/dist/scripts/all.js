var t = 1;
var radius = 50;
var squareSize = 6.5;
var prec = 19.55;
var fuzzy = 0.001;
var inc = (Math.PI-fuzzy)/prec;
var discoBall = document.getElementById("discoBall");

for(var t=fuzzy; t<Math.PI; t+=inc) {
  var z = radius * Math.cos(t);
  var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
  var circumference = Math.abs(2 * Math.PI * currentRadius);
  var squaresThatFit = Math.floor(circumference / squareSize);
  var angleInc = (Math.PI*2-fuzzy) / squaresThatFit;
  for(var i=angleInc/2+fuzzy; i<(Math.PI*2); i+=angleInc) {
    var square = document.createElement("div");
    var squareTile = document.createElement("div");
    squareTile.style.width = squareSize + "px";
    squareTile.style.height = squareSize + "px";
    squareTile.style.transformOrigin = "0 0 0";
    squareTile.style.webkitTransformOrigin = "0 0 0";
    squareTile.style.webkitTransform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    if((t>1.3 && t<1.9) || (t<-1.3 && t>-1.9)) {
      squareTile.style.backgroundColor = randomColor("bright");
    } else {
      squareTile.style.backgroundColor = randomColor("any");
    }
    square.appendChild(squareTile);
    square.className = "square";
    squareTile.style.webkitAnimation = "reflect 2s linear infinite";
    squareTile.style.webkitAnimationDelay = String(randomNumber(0,20)/10) + "s";
    squareTile.style.animation = "reflect 2s linear infinite";
    squareTile.style.animationDelay = String(randomNumber(0,20)/10) + "s";
    squareTile.style.backfaceVisibility = "hidden";
    var x = radius * Math.cos(i) * Math.sin(t);
    var y = radius * Math.sin(i) * Math.sin(t);
    square.style.webkitTransform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    discoBall.appendChild(square);
  }
}

function randomColor(type) {
  var c;
  if(type == "bright") {
    c = randomNumber(130, 255);
  } else {
    c = randomNumber(110, 190);
  }
  return "rgb(" + c + "," + c + "," + c + ")";
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
$(".suscribe__container .landing__email form").on("submit", function (event) {
    event.preventDefault();
    submitForm();
});


function submitForm(){
    // Initiate Variables With Form Content
    var email = $(".suscribe__container .landing__email form input").val();
    alert(email);
    $.ajax({
        type: "POST",
        url: "form-process.php",
        data: "&email=" + email ,
        success : function(text){
            if (text == "success"){
                alert('sent')
            } else {
                alert('error')
                // formError();
                // submitMSG(false,text);
            }
        }
    });
}

// function formSuccess(){
//     $("#contactForm")[0].reset();
//     submitMSG(true, "Message Submitted!")
// }

// function formError(){
//     $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
//         $(this).removeClass();
//     });
// }

// function submitMSG(valid, msg){
//     if(valid){
//         var msgClasses = "h3 text-center tada animated text-success";
//     } else {
//         var msgClasses = "h3 text-center text-danger";
//     }
//     $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
// }
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