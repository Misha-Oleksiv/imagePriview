// Завдання 3:

// Необхідно реалізувати наступний функціонал як на відео AnimateGallery, а саме:
// — потрібно при кліку на елемент щоб він анімовано летів до центру екрану збільшуючи свій розмір
// — при ще одному кліку він повертався на свою позицію
// — використовуйте jQuery easing для плавності анімації


$(function () {
	let positio;
	$('.box').on('click', function () {
		position = $(this).position();
		$('.modal-container').css({
			backgroundColor: '#000000c7',
			zIndex: 3,
		});

		$('.modal').css({
			backgroundColor: $(this).css('background-color'),
			top: position.top,
			left: position.left,
			zIndex: 99,
			opacity: 1,
		});

		$(this).css('opacity', '0');
		$('.modal').animate({
			height: `400px`,
			width: `400px`,
			top: `50px`,
			left: `200px`,
		}, 2000, 'linear');

	});

	$('.modal').on('click', function () {

		$(this).animate({
			height: `150px`,
			width: `150px`,
			top: position.top,
			left: position.left,
		}, 2000, 'linear', function () {
			$('.modal-container').css({
				backgroundColor: '#fff',
				zIndex: -1
			});
			$('.box').css('opacity', '1');
		});
	});

})