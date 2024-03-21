import {useContext} from "react";
import {Flex} from "src/components/Layout/Flex";
import {Switcher} from "src/components/Switcher/Switcher";
import {TemperatureCopy} from "src/components/Temperature/Temperature.styles";
import {AppContext} from "src/context/AppContext";
import {getCelsius, getFahrenheit} from "src/utils/temperature";

export const Temperature = () => {
  const {weatherData, loading, tempMeasurements, setTempMeasurements} = useContext(AppContext);

  if (!weatherData) {
    return null
  }

  const temp = tempMeasurements === 'C' ? getCelsius(weatherData.main.temp) : getFahrenheit(weatherData.main.temp);

  return <div>
    <Flex direction="column" align="center" justify="center">
      <TemperatureCopy>{Math.floor(temp)} °{tempMeasurements}</TemperatureCopy>
      <Switcher />
    </Flex>
  </div>
}