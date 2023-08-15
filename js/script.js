// https://api.weatherapi.com/v1/current.json?key=7880163ff8354e4292b75213231508&q=LONDON
var locationList =[];
var currentList = [];
var conditiontList = [];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayName;
let month;
let day ;
var windDir ;
var forecast =[];
var findBtn = document.getElementById('find');
var findInput = document.getElementById('search');
console.log(findInput);
// var forecastCondition =[];
// ///////////////////////////////////////////////////////////////////////
function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, {weekday: 'long'});
  }
 
  /////////////////////////////////////////////////////////////////////
function getWeather(rejon){
    var http = new XMLHttpRequest();
    http.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=7880163ff8354e4292b75213231508&q=${rejon}&days=3`);
    http.send();
    http.addEventListener('readystatechange',function(){
        if(http.readyState === 4 && http.status === 200){
            locationList = JSON.parse(http.response).location;
            currentList = JSON.parse(http.response).current;
            conditiontList = JSON.parse(http.response).current.condition;
            forecast = JSON.parse(http.response).forecast.forecastday;
            // forecastCondition =JSON.parse(http.response).forecast.condition;
             console.log(forecast.length);

if(currentList.wind_dir=="N"){
    windDir="North";
}else if (currentList.wind_dir=="E") {
    windDir="East";
}else if (currentList.wind_dir=="S") {
    windDir="South";
}
 else {
    windDir="West"; 
};
///////////////////////date///////////////////////////////
dayName=(getDayName(new Date(locationList.localtime)));
const d = new Date(locationList.localtime);
month = months[d.getMonth()];
day = d.getDate();
///////////////////////////////////////////////////////
display()

        }
    })}
///////////////////////////////////display///////////////////////////////////////////
    function display(){
        var cols=``;
        
     cols=   `
     <div class="weather d-flex now ">
      <div class="today forecast w-100">
      <div class="forecast-header d-flex justify-content-between" id="today">
        <div class="day">${dayName}</div>
                <div class=" date">${day}${month}</div>
        
                </div>
                   <div class="forecast-content" id="current">
                   <div class="location">${locationList.name}</div>
                   <div class="degree d-flex justify-content-between">
                       <div class="num">${(currentList.temp_c)}<sup>o</sup>C</div>
                     
                       <div class="forecast-icon ">
                           <img src="https:${conditiontList.icon}" alt="" width="90">
                       </div>	
                   
                   </div>
                   <div class="custom text-primary mb-4">${conditiontList.text}</div>
                   <span><img src="./img/icon-umberella.png" alt="">${currentList.humidity}%</span>
                               <span><img src="./img/icon-wind.png" alt="">${currentList.wind_kph}km/h</span>
                               <span><img src="./img/icon-compass.png" alt="">${windDir}</span>
                               </div>



                               </div>
                               </div>
                             <!-- ------------------------------------------------------------------------------------ -->
                             
                            
                               `;
                   document.getElementById('cont').innerHTML=cols;
                  //  console.log(cols)
    for(var i=1;i<forecast.length;i++){
        // console.log(forecast[i].day.condition.icon);
cols+=`
<div class="weather ">
<div class="tom forecast w-100">
  <div class="forecast-header" id="tom${i}">
  <div class="day w-100 text-center">${(getDayName(new Date(forecast[i].date)))}</div>
  </div> 
  <div class="forecast-content h-100" id="next${i}">
    <div class="forecast-icon text-center my-3">
        <img src="https:${forecast[i].day.condition.icon}" alt="" width="50">
    </div>
    <div class="degree text-center">${forecast[i].day.maxtemp_c}<sup>o</sup>C</div>
    <small class="text-center">${forecast[i].day.mintemp_c}<sup>o</sup></small>
    <div class="custom text-primary text-center mt-5 mb-4">${forecast[i].day.condition.text}</div>
</div>
</div>

</div>
`
    }
    document.getElementById('cont').innerHTML=cols;
    }



getWeather('CAIRO');
findBtn.onclick= function(){
  if(findInput.value != ''){
  getWeather(findInput.value);
  }
}

findInput.addEventListener('keypress',function(e){
  if(findInput.value!=''){
    if(e.key == "Enter")
    getWeather(findInput.value);
  }
})