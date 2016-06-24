

var key = 'fd98db9dd0dd5197';
var lat,lng;
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(getLocation,error);

}
else {
alert('Geolocation is not supported');
}

function error() {
alert("Couldn't find you!");
}

$(".button").on("click",function(){
      if($(this).hasClass("Farenheit")) {
        $(this).addClass("Celcius");
        $(this).removeClass("Farenheit");
        $(this).text("Celcius");
      }
      else{
         $(this).removeClass("Celcius");
         $(this).addClass("Farenheit");
         $(this).text("Farenheit");
      }


});

function getLocation(position) {
lat = position.coords.latitude;
lng = position.coords.longitude;
var Weather = "http://api.wunderground.com/api/"+ key +"/forecast/geolookup/conditions/q/" + lat + "," + lng + ".json";
$.ajax({
        url : Weather,
        dataType : "jsonp",
        success : function(data) {
            var location =data['location']['city'];
            var temp = data['current_observation']['temp_f'];
            var img = data['current_observation']['icon_url'];
            var desc = data['current_observation']['weather'];
            var wind = data['current_observation']['wind_string'];
            $('#location').html(location);
            $('#temp').html(temp);
            $('#desc').html(desc);
            $('#wind').html(wind);
            $('#img').attr('src', img);
        }
});

}

