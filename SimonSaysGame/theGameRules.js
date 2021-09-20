$(function() {
	var colors = $('#colors li')
	var start = $('#start')
	var gameState = 'waiting'
	var gameSequence = []
	var level = 1
	var flashNo
	var clickedNo
	var setupLightSequence = function() {
		gameSequence[level-1] = Math.floor(Math.random() * 4)
		showLightSequence()
	}
	var lightOn = function(no) { colors.eq(gameSequence[no]).addClass('on')
	}
	var lightOff = function() { colors.removeClass('on') }
	var showLightSequence = function() {
		lightOff()

		if (flashNo < level) {
			var on = setTimeout(function() {
				var off = setTimeout(function() {
					showLightSequence()
					flashNo++
				}, 500)
				lightOn(flashNo)
			}, 500)
		}
		else {
			gameState = 'playing'
			$('body').addClass('playing')
			start.text('Your turn...')
			clearTimeout(on)
		}
	}

	colors.click(function() {
		if (gameState === 'playing') {
			var selectedSquare = $(this).index()
			colors.eq(selectedSquare).fadeOut()
			if (gameSequence[clickedNo] == selectedSquare) {
				if (clickedNo == level-1) {
					gameState = 'waiting'
					$('body').removeClass('playing')
					start.text('Well done.  Go to the next level >')
					level++
					$("div").animate({
						borderSpacing: -360
					}, {
						step: function(now, fx) {
							$(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
							$(this).css('-moz-transform', 'rotate(' + now + 'deg)');
							$(this).css('transform', 'rotate(' + now + 'deg)');
						},
						duration: 'slow'
					}, 'linear')
				}

				lightOn(clickedNo)
				var off = setTimeout(function() {
					lightOff()
					clickedNo++
				}, 200)
			}
			else {
				gameState = 'waiting'
				$('body').removeClass('playing')
				start.text('Game Over.  Try again?')
				$('body').removeClass('playing').addClass('game-over')
				gameSequence = []
				level = 1
			}
			colors.eq(selectedSquare).fadeIn()
		}
	})

	var init = function() {
		$('#level').text(`Level ${level}`)
		flashNo = 0
		clickedNo = 0
		$(this).text('Simon says...')
		$('body').removeClass('game-over')
		setupLightSequence()
	}
	start.click(init)
})