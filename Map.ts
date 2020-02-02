import {IMap} from './IMap';
import * as L from 'leaflet';
import { ILayer } from './ILayer';
import { MapEvent } from './Event';

export class Map implements IMap {
    ref: any;
    layers: Array<ILayer>;
    create(id: string, options: any) {
        this.ref = L.map(id, options);
        this.layers = [];
        return this.ref;
    }    
    destroy(ref:any): boolean {
        try{
            this.ref.remove();
            return true;
        } catch(e){
            throw new Error(e);
        }        
    }
    setView() {

    }
    addEvent(mapEvent: MapEvent, fn: Function) : any{
        return this.ref.on(mapEvent, fn);
    }
    removeEvent(mapEvent: MapEvent, fn: Function): boolean{
        this.ref.off(mapEvent, fn);
        return true
    }
    addControl(){

    }
    removeControl(){

    }
    addFilter(){
        //Useless Method As Of Now
    }
    addFilterToLayer(){

    }
    removeFilterFromLayer(){

    }
    applyFilterToLayer(){
        
    }
    addLayer(layer: ILayer): boolean {
        try {
            this.ref.addLayer(layer.ref);
            this.layers.push(layer);
            return true;
        }catch(e){
            throw new Error(e);
        }
    }
    removeLayer(layer: ILayer): boolean {
        try {
            this.ref.removeLayer(layer.ref);
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