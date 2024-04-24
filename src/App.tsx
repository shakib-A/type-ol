import { useState } from "react"
import MyMap from "./components/MyMap"
// import { set } from "ol/transform"
import { DatePicker } from "antd"

const App = () => {

  type LayerState = "OSM" | "XYZ" | "StadiaMaps"

 const [layerState, setLayerState] = useState<LayerState>("OSM")

const toggleLayerState = () => {
  if(layerState === "OSM") {
    setLayerState("StadiaMaps")
  } else {
    setLayerState("OSM")
  }
}

const handleClick = (e:{}) => {
  console.log(e)
}

  return (
    <div>
       <MyMap selectLayers="OSM" handleClickOnMap={handleClick} />
       <button onClick={toggleLayerState}>toggle layer</button>
       <DatePicker />
    </div>
  )
}

export default App