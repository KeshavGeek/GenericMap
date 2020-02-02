import { Map}  from './Map';
import { GMap } from './GMap';
import { MBMap } from './MBMap';
import { MTMap } from './MTMap';
import { OLMap } from './OLMap';
import { BinLayerService } from './BinLayerService';
import { GCircle } from './GCircle';
import * as L from 'leaflet';
import { MapEvent } from './Event';

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
        let fn: Function = function () {
            console.log("Everyting Working");
        };
        map.addEvent(MapEvent.CLICK,fn);
        map.addLayer({ref:L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")});

        const ele:HTMLElement = document.getElementById("map-click-off");
        ele.onclick = function() {
            console.log("Removing Map Event");
            map.removeEvent(MapEvent.CLICK,fn);
        }
    }
}

class GoogleMapApplication {
    initialize() {
        let map = new GMap();
        map.create('my-map2',{
            center: [51.505, -0.09],
            zoom: 13
        })
        const gc = new GCircle();
        const ref = gc.create({ latitude: 51.505, longitude: -0.09},{radius: 100});
        map.addLayer(ref);
    }
}

class MapBoxMapApplication {
    initialize() {
        let map = new MBMap();
        map.create('my-map3', {
            center: [51.505, -0.09],
            zoom: 13
        })
    }
}

class MapTalksMapApplication {
    initialize() {
        let map = new MTMap();
        map.create('my-map4', {
            center: [51.505, -0.09],
            zoom: 13
        })
    }
}

class OpenLayersMapApplication {
    initialize() {
        let map = new OLMap();
        map.create('my-map5', {
            center: [51.505, -0.09],
            zoom: 13
        })
    }
}

const app = new LeafletApplication();
app.initialize();
const app2 = new GoogleMapApplication();
app2.initialize();
const app3 = new MapBoxMapApplication();
app3.initialize();
const app4 = new MapTalksMapApplication();
app4.initialize();
const app5 = new OpenLayersMapApplication();
app5.initialize();