export const getIcon = (icon: string) => {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`
}

const a = {
  "coord": {"lon": 11.3945, "lat": 47.2627},
  "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10n"}],
  "base": "stations",
  "main": {
    "temp": 281.9,
    "feels_like": 279.56,
    "temp_min": 279.97,
    "temp_max": 283.23,
    "pressure": 1024,
    "humidity": 93
  },
  "visibility": 8000,
  "wind": {"speed": 4.12, "deg": 60},
  "rain": {"1h": 0.39},
  "clouds": {"all": 75},
  "dt": 1711049811,
  "sys": {"type": 1, "id": 6872, "country": "AT", "sunrise": 1710998092, "sunset": 1711042085},
  "timezone": 3600,
  "id": 2775220,
  "name": "Innsbruck",
  "cod": 200
}