const apID = '961f5627e72b4eab86386277445e7f3c';
if (apiID == '') document.getElementById().innerHTML = ('Remember to add your api key!');
var url = 'https://newsapi.org/v2/top-headlines?' + 'country=ca'
    + '&apiKey='+ apiID;
var req = new Request(url);
function newsApp(){
    fetch(req).then(function(response){
        return response.json()})
        .then(function(data){
            sendNewsData(data);
        })
        .catch(function(){

        });
}

function sendNewsData(nData){
    //Retrives Data from JSON
    var author = nData.articles[0].author;
    var title = nData.articles[0].title;
    var description = nData.articles[0].description;


}

