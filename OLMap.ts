import { IMap } from './IMap';
import { ILayer } from './ILayer';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { MapEvent } from './Event';

export class OLMap implements IMap {
    ref: any;
    layers: Array<ILayer>;
    create(id: string, options: any) {
        this.ref = new Map({
            target: id,
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [options.center[1], options.center[0]],
                zoom: options.zoom
            })
        });
        this.layers = [];
        return this.ref;
    }
    destroy(ref: any): boolean {
        try {
            this.ref.remove();
            return true;
        } catch (e) {
            throw new Error(e);
        }
    }
    setView() {

    }
    addEvent(mapEvent: MapEvent, fn: Function): any {
        console.log(mapEvent);

        this.ref.on(mapEvent, fn);
    }
    addLayer(layer: ILayer): boolean {
        try {
            this.ref.addLayer(layer.ref);
            this.layers.push(layer);
            return true;
        } catch (e) {
            throw new Error(e);
        }
    }
    removeLayer(layer: ILayer): boolean {
        try {
            this.ref.removeLayer(layer.ref);
            return true;
        } catch (e) {
            throw new Error(e);
        }
    }
    addLayers(layers: Array<ILayer>): boolean {
        return null;
    }

    removeLayers(layers: Array<ILayer>): boolean {
        return null;
    }

    refreshLayer(layer: ILayer): boolean {
        return null;
    }

    refreshLayers(layers: Array<ILayer>): boolean {
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