const apikey = "31831ec85c6644f5a2133535252406";
const apiurl = "https://api.weatherapi.com/v1/current.json?q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + "&aqi=no&key=" + apikey);
  const data = await response.json();

//   console.log(data);
  document.querySelector(".city").innerHTML = data.location.name;
  document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
  document.querySelector(".wind").innerHTML = data.current.wind_kph + "kmph";

  const condition = data.current.condition.text.trim().toLowerCase();
  
  if (condition.includes("rain")) {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/3351/3351979.png";
  } else if (condition.includes("cloud")) {
    weatherIcon.src =
      "https://cdn-icons-png.flaticon.com/128/12861/12861541.png";
  } else if (condition.includes("mist")) {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/4005/4005901.png";
  } else if (condition.includes("clear")) {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/2698/2698213.png";
  } else if (condition.includes("thunder")) {
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/9755/9755210.png";
  } else {
    // fallback icon if condition doesn't match any known keywords
    weatherIcon.src = "https://cdn-icons-png.flaticon.com/128/1163/1163624.png";
  }

  document.querySelector(".weather").style.display="block";
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
searchbox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchbox.value);
  }
});

checkWeather(city);
