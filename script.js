var apikey = "fa62741cbe1bbb117e7949e530a3f6d3"
console.log(apikey)

var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + "sacramento" + "&appid=" + apikey;

console.log(queryURL)

$.ajax({
    url: queryURL,
    method: "GET"
}).then (function(response){

})