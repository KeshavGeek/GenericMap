import { ILayer } from "./ILayer";
import {MapEvent} from './Event';

export interface IMap {
    ref: any;
    layers: Array<ILayer>;
    create(id: string, options: any): any;
    destroy(ref: any): boolean;
    addLayer(layer: ILayer): boolean;
    removeLayer(layer: ILayer): boolean;
    addLayers(layers: Array<ILayer>): boolean;
    removeLayers(layers: Array<ILayer>): boolean;
    refreshLayer(layer: ILayer): boolean;
    refreshLayers(layers: Array<ILayer>): boolean;
    addEvent(mapEvents: MapEvent, fn: Function): any;
    //show()
    //hide()    
}
