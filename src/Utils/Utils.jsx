function getState(temp) {
    switch (true) {
        case temp < 300:
          return "storm";
        case temp >= 300 && temp < 500:
          return "drizzle";
        case temp >= 500 && temp < 600:
          return "rain";
        case temp >= 600 && temp < 700:
          return "snow";
        case temp >= 700 && temp < 800:
          return "fog";
        case temp === 800:
          return "clear";
        case temp === 801:
          return "partlycloudy";
        case temp > 801 && temp <= 805:
          return "mostlycloudy";
        default:
          return "unknown";
      }
}

export function getData(nowdata){ 
  let humidity= nowdata?.main?.humidity;
  let pressure= nowdata?.main?.pressure;
  let min_temp = Math.round(nowdata?.main?.temp_min);
  let max_temp = Math.round(nowdata?.main?.temp_max);

  let {id} = nowdata?.weather?.find((item) => {
    return item.id;
  });

  let stateImage = getState(id);
  let image = `./img/weather-icons/${stateImage}.svg`;
  
  return { min_temp, max_temp, humidity, pressure, stateImage, image };
}
export function getImage(id){
    let stateImage = getState(id);
    return `./img/weather-icons/${stateImage}.svg`;
  }