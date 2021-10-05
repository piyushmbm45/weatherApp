const express = require("express");
const https = require("http");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set("view engine", "ejs");
// fetch the data from the site(Body)
// body-parser

app.get("/", (req, res) => {
  res.render("home")
});

app.post("/", (req, res) => {
  let city = req.body.cityName; // to use this we need to fetch body data
  console.log(city);

  const query = city;
  const apiKey = process.env.API_KEY;
  const unit = "metric";
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit +
    "";
  https.get(url, (response) => {
    // console.log(response);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      // const temp = weatherData.main.temp;
      // const feelLike = weatherData.main.feels_like;
      // const description = weatherData.weather[0].description;
      let icon = weatherData.weather[0].icon;
      // const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      const dataSend = {
        temp : weatherData.main.temp,
        feelLike : weatherData.main.feels_like,
        description : weatherData.weather[0].description,
        // icon : weatherData.weather[0].icon,
        imageUrl : `http://openweathermap.org/img/wn/${icon}@2x.png`,
        min_temp : weatherData.main.temp_min,
        max_temp : weatherData.main.temp_max,
        visibility : weatherData.visibility,
        sunrise : new Date(weatherData.sys.sunrise),
        sunset :  new Date(weatherData.sys.sunset)
      }
      res.render('weather',{weatherData : dataSend})
    });
  });
});

app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
