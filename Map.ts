import {IMap} from './IMap';
import * as L from 'leaflet';
import { ILayer } from './ILayer';

class Map implements IMap {
    ref: any;
    create(id: string, options) {
        this.ref = L.map(id, options);
        return id;
    }    
    destroy(ref:any) {
        try{
            this.ref.remove();
            return true;
        } catch(e){
            return false;
        }        
    }
    addLayer(layer: ILayer): ILayer {
        this.ref.addLayer(layer.ref);
        return null;
    }
    removeLayer(layer: ILayer): boolean {
        try {
            this.ref.removeLayer(layer.ref);
            return true;
        } catch(e) {
            return false;
        }
    }
    addLayers(layers: Array<ILayer>): Array<ILayer>  {
        return null;
    }
    
    removeLayers(layers: Array<ILayer>): Array<boolean>{
        return null;
    }
    
    refreshLayer(layer: ILayer): boolean {
        return null;
    }
    
    refreshLayers(layers: Array<ILayer>) : Array<boolean>{
        return null;
    }
    
    show() {
        //TODO
        this.ref._container.show();
    }
    hide() {
        //TODO
        this.ref._container.hide();
    }
}