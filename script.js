
var playPause = anime({
	targets: 'div.square',
	  translateY: [
	  	{ value: 200, duration: 500 },
	  	{ value: 0, duration: 500 }
	  ],
	  rotate: '2turn',
	  easing: 'easeInOutSine',
	delay: function(el, i, l) { return i * 1000 },
	autoplay: false,
	loop: true
});

document.querySelector('#squares .play').onclick = playPause.play;
document.querySelector('#squares .pause').onclick = playPause.pause;








// old code below before refactoring


/*
anime({
	targets: 'div.square.red',
	  translateY: [
	  	{ value: 200, duration: 500 },
	  	{ value: 0, duration: 500 }
	  ],
	  rotate: '2turn',
	  easing: 'easeInOutSine'
});

anime({
	targets: 'div.square.blue',
	  translateY: [
	  	{ value: 200, duration: 500, delay: 1300 },
	  	{ value: 0, duration: 800 }
	  ],
	  rotate: '2turn',
	  easing: 'easeInOutSine',
	  delay: 1300
});

anime({
	targets: 'div.square.green',
	  translateY: [
	  	{ value: 200, duration: 500, delay: 2200 },
	  	{ value: 0, duration: 800 }
	  ],
	  rotate: '2turn',
	  easing: 'easeInOutSine',
	  delay: 2200
});

anime({
	targets: 'div.square.yellow',
	  translateY: [
	  	{ value: 200, duration: 500, delay: 3000 },
	  	{ value: 0, duration: 800 }
	  ],
	  rotate: '2turn',
	  easing: 'easeInOutSine',
	  delay: 3000
});
*/




