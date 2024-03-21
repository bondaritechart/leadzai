import {useContext} from "react";
import {Input} from "src/components/Input/Input";
import {ContentWrapper} from "src/components/Layout/ContentWrapper";
import {PageWrapper} from "src/components/Layout/PageWrapper";
import {Text} from "src/components/Layout/Text";
import {Sunrise} from "src/components/Sunrise/Sunrise";
import {Temperature} from "src/components/Temperature/Temperature";
import {Weather} from "src/components/Weather/Weather";
import {AppContext} from "src/context/AppContext";


function App() {
  const {error, weatherData} = useContext(AppContext);

  return (
    <PageWrapper>
      <Input/>
      {error && <Text>Error: {error.message}</Text>}
      {weatherData && !error &&<ContentWrapper>
        <Temperature/>
        <Weather/>
        <Sunrise/>
      </ContentWrapper>}
    </PageWrapper>
  );
}

export default App;
