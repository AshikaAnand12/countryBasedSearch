import * as React from "react";
import { useState } from "react";
import type { CountryContext, Data } from "react-svg-worldmap";
import WorldMap from "react-svg-worldmap";
import "./App.css";


// const getStyle = ({
//   countryValue,
//   countryCode,
//   minValue,
//   maxValue,
//   color,
// }: CountryContext) => ({
//   fill: countryCode === "US" ? "blue" : color,
//   fillOpacity: countryValue
//     ? 0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue)
//     : 0,
//   stroke: "green",
//   strokeWidth: 1,
//   strokeOpacity: 0.2,
//   cursor: "pointer",
// })

function App() {
  const [state, setState] = useState({
    cName: "Select Country",
    iso: "",
  });

  const clickAction = React.useCallback(
    ({ countryName, countryCode }: CountryContext) => {
      setState({
        cName: countryName,
        iso: countryCode
      });
      console.log(countryName, countryCode);
      
    },
    [],
  );


  const data = [
    // { country: "cn", value: 1389618778 }, // china
    // { country: "in", value: 1311559204 }, // india
    // { country: "us", value: 331883986 }, // united states
    // { country: "id", value: 264935824 }, // indonesia
    // { country: "pk", value: 210797836 }, // pakistan
    // { country: "br", value: 210301591 }, // brazil
    // { country: "ng", value: 208679114 }, // nigeria
    // { country: "bd", value: 161062905 }, // bangladesh
    // { country: "ru", value: 141944641 }, // russia
    // { country: "mx", value: 127318112 }, // mexico
  ];

  return (
    <div className="App">
      <WorldMap
        color="red"
        title="World Map"
        tooltipBgColor="black"
        value-suffix="people"
        size="responsive"
        data={data}
        // styleFunction={getStyle}
        onClickFunction={clickAction}
      />
      <ul>
        <li>Country: {state.cName}</li>
        <li>ISO Code: {state.iso}</li>
      </ul>
    </div>
  );
}

export default App;
