
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//https://api.openweathermap.org/data/2.5/weather?q=sacramento&appid=fa62741cbe1bbb117e7949e530a3f6d3


//API key from Weathermap.org
var apiKey = "fa62741cbe1bbb117e7949e530a3f6d3";
//console.log(apiKey)
var searchKey = "";
$(document).ready(function(){
    $("#submit").click(function(){
        var location = $("#location").val();
        // check if zip code or city
        if (!isNaN(location)) {
            searchKey = "zip";
        } else {
            searchKey = "q";
        }
        // Check if text area had data
        if (location != ""){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?" + 
                    searchKey + "=" + location + "&units=imperial&appid=" + apiKey,
                dataType: "Jsonp",
                method: "GET",
                success: function(data){
                    var result = outputData(data);
                    $("#outputData").html(result);
                    $("#outputData").val("");
                //console.log(data)
                }
            }) 
        }

        })
    })

    function outputData(data){
        // Return the html string of all data
        return "<div><h2>Weather in " + data.name + "</h2>" +
        "<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png' width=100px>" + 
        "<h4> Weather: " + data.weather[0].main + "<br>" +
        "Description: " + data.weather[0].description + "<br>" +
        "Temperature: " + data.main.temp + " F <br>" +
        "High Temp: " + data.main.temp_max + " F <br>" +
        "Low Temp: " + data.main.temp_min + " F <br>" +
        "Pressure: " + data.main.pressure + " hPa <br>" +
        "Humidity: " + data.main.humidity + " % <br>" +
        "Visibility: " + data.visibility + " Meters <br>" + 
        "Wind Speed: " + data.wind.speed + " m/sec <br>" +
        "Wind Direction: " + data.wind.deg + " Degrees </h4></div>";
    }

    


//ar search = document.querySelector("#input")
//console.log(apikey);

//var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + "sacramento" + "&appid=" + apikey;
//console.log(queryURL);

//$.ajax({
    //url: queryURL,
    //method: "GET"
//}).then(function(response){
//console.log(response)

//})

//var cardTitle = document.getElementById("content");

//var submit = document.getElementById("sweatherSearch");