import {Map} from './Map';
import { GMap } from './GMap';
import {BinLayerService} from './BinLayerService';
import * as L from 'leaflet';

class LeafletApplication {
    initialize() {
        let map = new Map();
        map.create('my-map',{
            center: [51.505, -0.09],
            zoom: 13
        });
        let binLayerService = new BinLayerService()       
        let ref = binLayerService.add([[51.505, -0.09], [51.515, -0.09]],{visual: {radius: 200}, property : {latitudeIndex: 0, longitudeIndex: 1}});
        map.addLayer(ref);
        map.addLayer({ref:L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")});
    }
}

class GoogleMapApplication {
    initialize() {
        let map = new GMap();
        map.create('my-map2',{
            center: { lat: 51.505, lng: -0.09},
            zoom: 13
        })
    }
}

const app = new LeafletApplication();
app.initialize();
const app2 = new GoogleMapApplication();
app2.initialize();