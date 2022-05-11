let weather = {
  apiKey: "3c320c0db6f3cb8ce61b336a41b39f6c",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((res) => res.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(data);
    document.querySelector(".city").textContent = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").textContent = description;
    document.querySelector(".temp").textContent = temp + "°C";
    document.querySelector(".humidity").textContent =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").textContent =
      "Wind Speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search").addEventListener("click", function () {
  weather.search();
});
