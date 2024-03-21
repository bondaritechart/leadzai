import {useContext} from "react";
import {Flex} from "src/components/Layout/Flex";
import {Text} from "src/components/Layout/Text";
import {AppContext} from "src/context/AppContext";
import {getTime} from "src/utils/time";

export const Sunrise = () => {
  const {weatherData} = useContext(AppContext);
  if (!weatherData) {
    return null
  }

  return (
    <Flex direction="column" gap={1.6} align="center">
      <Text color="var(--text)" fontSize={2.4}>Sunrise: {getTime(weatherData.sys.sunrise + weatherData.timezone)}</Text>
      <Text color="var(--text)" fontSize={2.4}>Sunset: {getTime(weatherData.sys.sunset + weatherData.timezone)}</Text>
    </Flex>
  )
}