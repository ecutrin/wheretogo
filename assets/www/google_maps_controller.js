function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

var geoLocationSuccess = function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    alert("lat: " + lat + " long: " + long);
    var myLatlng = new google.maps.LatLng(lat, long);

    var myOptions = {
        center: myLatlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    gmaps = document.getElementById("google_maps");
    map = new google.maps.Map(gmaps, myOptions);
};

var geoLocationError = function(error) {
    alert('Can\'t retrieve position.\nError: ' + error);
};

function onDeviceReady() {
    alert("starting onDeviceReady");
    navigator.geolocation.getCurrentPosition(geoLocationSuccess, geoLocationError);
}
