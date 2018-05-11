//

var lat;
var long;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        url = "https://api.darksky.net/forecast/32c06fc54de2a21dd26fe3901ec68059/" + lat + "," + long;
        $.getJSON(url, function() {

        });

    })