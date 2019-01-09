$('.resizable').each(function (k, div) {
	var avg = 0;
	$(div).find('a img').each(function (k, img) {
		avg += $(img).width() * $(img).height()
	})
	avg = avg / $(div).find('a img').length

	console.log(avg)
	console.log(avg)

	$(div).find('a').each(function (k, a) {
		var f = Math.sqrt(avg / ($(a).find('img').width() * $(a).find('img').height()));
		var wp = $(a).outerWidth() / $(a).parent().width()
		$(a).outerWidth(wp * f * 100 + '%')
	})
})