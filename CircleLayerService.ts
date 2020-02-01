import { ICircleLayerService } from './ICircleLayerService';
import {ILayer} from './ILayer';
import * as L from 'leaflet';

export class CircleLayerService implements ICircleLayerService {
    createLayer(list: ILayer[]) : ILayer{
        let ref = L.layerGroup([]);
        list.map((ele)=>{
            ref.addLayer(ele.ref)
        })
        return {ref};
    }
}
