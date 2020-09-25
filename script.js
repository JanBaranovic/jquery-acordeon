//Akordeon efekt

const list = $('.jokes');
const copy = $('.copy');

list.find('dd').hide();

list.find('dt').on('click', function(event) {

	const dt = $(this),
		dd = dt.next();

	dd.slideToggle()
	.siblings('dd').slideUp();

	const newContent = dd.text() + dd.html();

	copy.append( newContent + '<hr>' )

	event.preventDefault();
})

//Loading ikonka

const element = $('.element');
const loader = $('.loader');
const body_width = $('body').width();

element.on('click', function() {
	loader.fadeIn();
	$(this).animate({left: body_width - 250}, 2000, function() {
		loader.fadeOut();
	});
});

//Set timeout funkcia

element.on('contextmenu', function(event) {
	loader.fadeIn();
	$(this).animate({left: body_width - 250}, 2000);

	setTimeout(function() {
		loader.fadeOut();
	}, 4000);

	event.preventDefault();
});



