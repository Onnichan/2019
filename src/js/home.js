
	$('.resizable').each(function(k,div) {
		var avg = 0;
		$(div).find('a img').each(function(k, img) {
			avg += $(img).width() * $(img).height()
		})
		avg = avg / $(div).find('a img').length

		console.log(avg)
		console.log(avg)

		$(div).find('a').each(function(k, a) {
			var f = Math.sqrt(avg / ($(a).find('img').width() * $(a).find('img').height()));
			var wp = $(a).outerWidth() / $(a).parent().width()
			$(a).outerWidth( wp * f * 100 + '%')
		})
	})

	var mapStyles = [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}];

	function initMap() {
  		var mapProp = {
    		center: new google.maps.LatLng(-18.025159, -70.250537),
    		zoom: 17,
    		scrollwheel: false,
		    navigationControl: false,
		    mapTypeControl: false,
		    scaleControl: false,
		    disableDefaultUI: true,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
  		};
  		var map = new google.maps.Map(document.getElementById('map'),mapProp);

  		map.set('styles', mapStyles)

  		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(-18.025159, -70.250537),
			draggable: false,
			map: map
		});
	}

	google.maps.event.addDomListener(window, 'load', initMap);

