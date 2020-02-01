import {IMap} from './IMap';
import { ILayer } from './ILayer';

export class GMap implements IMap {
    ref: any;
    layers: Array<ILayer>;
    create(id: string, options: any) {
        this.ref = new google.maps.Map(document.getElementById(id), options);
        this.layers = [];
        return this.ref;
    }    
    destroy(ref:any): boolean {
        try{
            return true;
        } catch(e){
            throw new Error(e);
        }        
    }
    setView() {

    }
    addLayer(layer: ILayer): boolean {
        try {
            this.layers.push(layer);
            return true;
        }catch(e){
            throw new Error(e);
        }
    }
    removeLayer(layer: ILayer): boolean {
        try {
            return true;
        } catch(e) {
            throw new Error(e);
        }
    }
    addLayers(layers: Array<ILayer>):boolean  {
        return null;
    }
    
    removeLayers(layers: Array<ILayer>): boolean{
        return null;
    }
    
    refreshLayer(layer: ILayer): boolean {
        return null;
    }
    
    refreshLayers(layers: Array<ILayer>) :boolean{
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