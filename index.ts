import {Map} from './Map';
import {BinLayerService} from './BinLayerService';

class LeafletApplication {
    initialize() {
        let map = new Map();
        map.create('my-map',{
            center: [51.505, -0.09],
            zoom: 13
        });
        let binLayerService = new BinLayerService()       
        let ref = binLayerService.add([[51.505, -0.09], [51.515, -0.09]],{visual: 1, property : {latitudeIndex: 0, longitudeIndex: 1}});
        map.addLayer(ref);
    }
}

const app = new LeafletApplication();
app.initialize();