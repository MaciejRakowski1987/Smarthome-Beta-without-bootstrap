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
  var location = new google.maps.LatLng(53.4387859, 14.562607299999968);
  var options = {
    center: location,
    zoom: 16
  };
  var marker = new google.maps.Marker({
      position: location,
      title: "Property Location"
  });
  var map = new google.maps.Map(document.getElementById("map"), options);
  marker.setMap(map);
}

$(document).ready(function(){
  if (window.location.pathname === '/contact.html') {
    initializeMap();
  }
});

$(document).ready(function(){
    $(".mobileNav").click(function(){
        $(".mobileNav__nav").slideToggle();
    });
});