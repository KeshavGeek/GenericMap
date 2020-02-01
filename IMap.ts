import { ILayer } from "./ILayer";

export interface IMap {
    ref: any;
    create(id: string, options): any;
    destroy(ref: any): boolean;
    addLayer(layer: ILayer): ILayer;
    removeLayer(layer: ILayer): boolean;
    addLayers(layers: Array<ILayer>): Array<ILayer>;
    removeLayers(layers: Array<ILayer>): Array<boolean>;
    refreshLayer(layer: ILayer): boolean;
    refreshLayers(layers: Array<ILayer>): Array<boolean>;
    //show()
    //hide()    
}
