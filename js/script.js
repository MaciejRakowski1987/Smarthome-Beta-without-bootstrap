function highlightButtonOnDropdownActive() {
	var activeClass = 'header__nav-item--active';
	var dropdownButtonSelector = '.header__nav-item--dropdownButton'

	$(dropdownButtonSelector).on('mouseenter', function(){
		$(this).addClass(activeClass);
	});

	$('.header__nav-item:not(' + dropdownButtonSelector + ')').on('mouseenter', function(){
		$(dropdownButtonSelector).removeClass(activeClass);
	});

	$('.dropdown').on('mouseleave', function() {
		$(dropdownButtonSelector).removeClass(activeClass);
	});
}

$(document).ready(function(){
	highlightButtonOnDropdownActive();
});



$(document).ready(function() {
    // $(".main").delay(1000).animate({ opacity: 1 }, 1500);
    $('.main').addClass('fadeIn');
});

$(document).ready(function() {
	$("#lightgallery").lightGallery();
});

$(document).ready(function(){
     $('.btn-main').mouseover(function(){
         $('.main__heading').addClass('main__heading--highlighted');
    });

	$('.btn-main').mouseleave(function(){
		$('.main__heading').removeClass('main__heading--highlighted');
	});

});


	function initializeMap() {
    	var Location = new google.maps.LatLng(53.4387859, 14.562607299999968);
        var Options = {
            center: Location,
            zoom: 16
        };
        var marker = new google.maps.Marker({
            position: Location,
            title: "Property Location"
        });
        var map = new google.maps.Map(document.getElementById("map1"),
            Options);
            marker.setMap(map);
        }
$(document).ready(function(){
	initializeMap();
	});

// $(document).ready(function() {
//     $(".main").delay(2000).fadeIn(500);
// });
