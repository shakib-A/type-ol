import { useEffect } from "react"
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
// import { XYZ } from "ol/source";
import StadiaMaps from 'ol/source/StadiaMaps.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
// import BaseLayer from "ol/layer/Base";
// import { ViewOptions } from "ol/View.js";

interface MymapProps {
    selectLayers: "OSM" | "XYZ" | "StadiaMaps" ,
    handleClickOnMap: Function
}


const MyMap= ({ selectLayers, handleClickOnMap } : MymapProps) => {

    useEffect(() => {

        const layers: any = selectLayers === 'OSM' ? new OSM() : new StadiaMaps({ layer: 'stamen_watercolor'})
        const initMap = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: layers
                })
            ],
            view: new View({
                center: [0,0],
                zoom: 2
            })
        })

        initMap.on('click', function(evt) {
            handleClickOnMap(evt)
        })

        return () => initMap.setTarget('')

    }, [selectLayers])

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}  ></div>
  )
}

export default MyMap