const list = $('.jokes');

list.find('dd').hide();

list.find('dt').on('click', function(event) {
	$(this).next().slideToggle()
	.siblings('dd').slideUp();

	event.preventDefault();
})
