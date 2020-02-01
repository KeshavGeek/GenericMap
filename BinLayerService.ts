import {Circle} from './Circle';
import { CircleLayerService } from './CircleLayerService';
import { IResponseOptions } from './IResponseOptions';
import { ILayer } from './ILayer';

export class BinLayerService {
    private ref: ILayer;
    add(list: Array<any>, options: IResponseOptions): ILayer{
        const layer:Array<ILayer> = [];
        list.map((field:Array<any>)=>{
            let latitude = field[options.property.latitudeIndex];
            let longitude = field[options.property.longitudeIndex];
            let circle = new Circle();
            let refx = circle.create({latitude, longitude},{radius: 10});
            layer.push(refx);
        });
        const circleLayerService = new CircleLayerService();
        const ref = circleLayerService.createLayer(layer);
        this.ref = ref;
        return this.ref;
    }
    remove() {
        //map.removeLayer(this.ref.ref);
    }
}
