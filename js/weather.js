
            function weatherApp (city){
                var apiID = '137538aff620b92e7ea81528baac2d56';
                fetch ('https://api.openweathermap.org/data/2.5/weather?q=' + city+ '&appid=' + apiID)
                .then(function(resp){return resp.json()}) //Converts data fetched to json
                .then(function(data) {
                    sendWeatherData(data); //calls sendWeatherData function
                  })
                  .catch(function() {
                    // catch any errors
                  });
            }
            function sendWeatherData (wData){
                var celcius = Math.round(parseFloat(wData.main.temp)-273.15);
                
                //Asigns weather description to description div
                document.getElementById('description').innerHTML = wData[0].description
                //Assigns temperature to temp div
                document.getElementById('temp').innerHTML = celcius + '&deg;';
                //
                document.getElementById('location').innerHTML = wData.name;
            }
            
            window.onload = function(){
                weatherApp('Waterloo,ca');
            }