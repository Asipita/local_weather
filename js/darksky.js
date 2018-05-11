var data = { "latitude": 8.4765785, "longitude": 4.568420400000036, "timezone": "Africa/Lagos", "offset": 1, "currently": { "time": 1497614726, "summary": "Mostly Cloudy", "icon": "partly-cloudy-day", "precipIntensity": 0, "precipProbability": 0, "temperature": 88.68, "apparentTemperature": 90.46, "dewPoint": 72, "humidity": 0.58, "windSpeed": 10.06, "windGust": 4.19, "windBearing": 225, "cloudCover": 0.71, "pressure": 1010.94, "ozone": 279.13, "uvIndex": 8 } }

$(".descrip").html("The day is " + data.currently.summary.toLowerCase());
// document.getElementsByClassName("timezone").html = (data.timezone);
$(".timezone").html(data.timezone);
$(".temperature").html(data.currently.temperature + "<span class='wi wi-fahrenheit'></span>");
$(".celcius").html(toCelcius(data.currently.temperature).toFixed(2) + "<span class='wi wi-celsius'></span>");
// $(".temperature").append("<span class='wi wi-fahrenheit'></span>");
$(".knots").html(data.currently.windSpeed + "Knots");

function toCelcius(far) {
    return val = ((far - 32) / 1.8);
    $(this).html(val)
}
$(".celcius").hide();
$(".celc").on("click", function() {
    $(".temperature").toggle("none");
    $(".celcius").toggle("none");
})