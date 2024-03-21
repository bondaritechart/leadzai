export const getCelsius = (kelvin: number) => {
  return kelvin - 273.15;
}

export const getFahrenheit = (kelvin: number) => {
  return kelvin * 9/5 - 459.67;
}