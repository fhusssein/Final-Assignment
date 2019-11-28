//Geo Location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPositionSucc, getPositionErr);
} else {
    alert('geolocation not supported on this device');
}

//getPositionSucc function

function getPositionSucc(position) {
    var geoLat = position.coords.latitude.toFixed(5);
    var geoLong = positon.coords.longitude.toFixed(5);
    var geoAcc = position.coords.accuracy.toFixed(1);

    
// Creates an iframe and use the current location data
var iSource = "https://forecast.io/embed/#lat=" + geoLat + "&lon=" +  geoLong + "&name=Woot&color=#00aaff";
$('<iframe>') //Creates the element
    .attr('src', iSource) //Sets the attribute spry:region="myDs"
    .attr('height', 245) // Set the height
    .attr('width', "100%") //Set the width
    .appendTo('#id-weather') //Append to an existing element ID

}

function getPositionErr(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        default:
            alert("An unknown error occurred.");

    }
}

/*API Param
    https://api.darksky.net/forecast/1ae1bc597c328dd37b102aaf47ccff7b/43.465041,-80.523566



var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.darksky.net/forecast/1ae1bc597c328dd37b102aaf47ccff7b/43.465041,-80.523566?exclude=minutely,hourly,daily,alerts,flags&units=auto', true)

request.onload = function() {
    //Begin accessing JSON Data here
}

// Send request

request.send()
*/