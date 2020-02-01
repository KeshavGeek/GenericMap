import {Circle} from './Circle';
import { CircleLayerService } from './CircleLayerService';
import { IResponse } from './IResponse';
import { ILayer } from './ILayer';
import { map } from 'leaflet';

class BinLayerService {
    private ref: ILayer;
    add(list: Array<any>, options: IResponse) : void{
        const layer = [];
        list.map((field:Array<any>)=>{
            let latitude = field[options.latitudeIndex];
            let longitude = field[options.longitudeIndex];
            let circle = new Circle();
            circle.create({latitude, longitude},{radius: 10});
            layer.push(circle);
        });
        const circleLayerService = new CircleLayerService();
        const ref = circleLayerService.createLayer(layer);
        this.ref = ref;
        //map.addLayer(this.ref.ref);
    }
    remove() {
        //map.removeLayer(this.ref.ref);
    }
}
