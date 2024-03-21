import {useContext} from "react";
import {StyledSwitcher} from "src/components/Switcher/Switcher.styles";
import {AppContext} from "src/context/AppContext";

export const Switcher = () => {
  const {setTempMeasurements} = useContext(AppContext)

  return (
    <StyledSwitcher>
       <input onChange={(e) => {
         setTempMeasurements(e.target.checked ? 'F' : 'C')
       }} type="checkbox" id="switcher" />
       <label htmlFor="switcher"></label>
    </StyledSwitcher>
  )
}