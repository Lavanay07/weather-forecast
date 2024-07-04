const button = document.getElementById('bttn');

const cname = document.getElementById("cityname");
const ctemp = document.getElementById("citytemp");
const time = document.getElementById("citytime");

async function getData(latitude,longitude){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=c8d3d2c3661c4afb8e5133704240407&q=${latitude},${longitude}&aqi=no`);
    return await promise.json();
}
async function gotlocation(position){
    const result = await getData(position.coords.latitude,position.coords.longitude);
    console.log(result);
    cname.innerText = `${result.location.name}, ${result.location.region}, -${result.location.country}`;
    time.innerText = result.location.localtime;
    ctemp.innerText = result.current.temp_c;
}
function failedtoget(){
    console.log("there was some issue");
}
button.addEventListener('click', async () =>{
    const result = navigator.geolocation.getCurrentPosition(gotlocation,failedtoget)
})