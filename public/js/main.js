const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const getData = async (e) => {
  e.preventDefault();
  const cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerHTML = `Please Enter City Name`;
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&celcious&appid=ab34ba8d82b642d3b8138a892fe26fca`;
      const info = await fetch(url);
      const data = await info.json();
      const ArrData = [data];
      temp.innerHTML = ArrData[0].main.temp;

      city_name.innerHTML = ` ${ArrData[0].name}, ${ArrData[0].sys.country}`;
      const tempMod = ArrData[0].weather[0].main;
      if (tempMod == "Clear") {
        temp_status.innerHTML =
          "<i class='bi bi-brightness-alt-low' style='color:yellow'></i>";
      } else if (tempMod == "Clouds") {
        temp_status.innerHTML = "<i class='bi bi-cloud'></i>";
      } else if (tempMod == "Rainy") {
        temp_status.innerHTML = "<i class='bi bi-cloud-hail-fill'></i>";
      } else {
        temp_status.innerHTML = "<i class='bi bi-cloud'></i>";
      }
    } catch (error) {
      city_name.innerHTML = `Please Enter Valid City Name`;
    }
  }
};

searchBtn.addEventListener("click", getData);
