const API_KEY = `666a9c0eec2c719f937083ca9dde8a7c`;

export const getWeather = async (lat, lon) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=${API_KEY}`;

  try {
    let res = await fetch(apiUrl);
    res = await res.json();
    return res;
  } catch (error) {
    return null;
  }
};
