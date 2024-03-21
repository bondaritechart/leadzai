import {createContext} from 'react';

export interface Weather {
  main: {
    temp: number;
  }
  weather: [{ id: number, main: string, description: string, icon: string }],
  sys: {type: number, id: number, country: string, sunrise: number, sunset: number},
  timezone: number,
  cod: number;
}

export interface ErrorResponse {
  cod: string;
  message: string;
}

export type TempMeasurements = 'C' | 'F';

export interface AppContext {
  search: string;
  loading: boolean;
  recentSearches: string[];
  setSearch: (search: string) => void;
  weatherData: null | Weather;
  error: null | ErrorResponse;
  setWeatherData: (weatherData: null | Weather) => void;
  tempMeasurements: TempMeasurements;
  setTempMeasurements: (tempMeasurements: TempMeasurements) => void;
}

export const DEFAULT_APP_CONTEXT: AppContext = {
  loading: false,
  search: 'London',
  error: null,
  recentSearches: [],
  setSearch: () => {},
  weatherData: null,
  setWeatherData: () => {},
  tempMeasurements: 'C',
  setTempMeasurements: () => {}
}

export const AppContext = createContext<AppContext>(DEFAULT_APP_CONTEXT);