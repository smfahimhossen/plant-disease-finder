const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
const WEATHER_API_KEY = "27f45f20ddf86db7ee986e5fdae8db72";

export async function fetchWeather(city: string) {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
    );
    if (!response.ok) {
      throw new Error("Weather data not available");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
