import React, {useEffect, useState} from "react";
import {useDebounce} from "src/components/hools/useDebounce";
import {getWeather} from "src/utils/request";
import {AppContext, ErrorResponse, TempMeasurements, Weather} from "./AppContext"

export const AppContextProvider = ({children}: { children: React.ReactNode }) => {
  const [search, setSearch] = useState('');
  const [weatherData, setWeatherData] = useState<null | Weather>(null);
  const [error, setError] = useState<null | ErrorResponse>(null);
  const [tempMeasurements, setTempMeasurements] = useState<TempMeasurements>('C');
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const debouncedSearch = useDebounce(search, 800);

  useEffect(() => {
    if (debouncedSearch) {
      setLoading(true)
      getWeather(debouncedSearch).then((weather) => {
        if (weather.cod === 200) {
          setRecentSearches((prev) => {
            if (prev.includes(debouncedSearch)) {
              return prev;
            }
            return [debouncedSearch, ...prev].slice(0, 3);
          })
          setWeatherData(weather);
          setError(null)
        } else {
          setError({cod: weather.cod.toString(), message: 'City is not found'})
        }
      }).catch(() => {
        setError({cod: '404', message: 'Something went wrong'})
      }).finally(() => {
        setLoading(false)
      })
    } else {
      setWeatherData(null)
    }
  }, [debouncedSearch]);

  return (
    <AppContext.Provider
      value={{
        search,
        error,
        setSearch,
        weatherData,
        setWeatherData,
        tempMeasurements,
        setTempMeasurements,
        loading,
        recentSearches,
      }}>
      {children}
    </AppContext.Provider>
  )
}