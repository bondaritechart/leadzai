import {useContext} from "react";
import {Flex} from "src/components/Layout/Flex";
import {Text} from "src/components/Layout/Text";
import {getIcon} from "src/components/Weather/Weather.utils";
import { AppContext } from "src/context/AppContext";


export const Weather = () => {

  const {weatherData} = useContext(AppContext);

  if (!weatherData) {
    return <Text align="center">Search for a city</Text>
  }

  const weather = weatherData.weather[0];
  return (
    <Flex direction="column" align="center">
      <img src={getIcon(weather.icon)} alt={weather.description}/>
      <Text fontSize={2.4}>{weather.main}</Text>
      <Text>{weather.description}</Text>
    </Flex>
  )
}