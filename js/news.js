const apID = '961f5627e72b4eab86386277445e7f3c';
 if(apiID == '') document.getElementById().innerHTML = ('Remember to add your api key!');

 function newsApp(){
     fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey='+apiID+)
 }