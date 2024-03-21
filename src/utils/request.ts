import {Weather} from "src/context/AppContext";

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=cd64557329c8fe4a02f1ade8b1c94200';

export const getWeather = async (city: string): Promise<Weather> => {
  const response = await fetch(`${API_URL}&q=${city}`);
  return response.json();
}