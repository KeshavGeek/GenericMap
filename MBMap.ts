import { IMap } from './IMap';
import { ILayer } from './ILayer';
import mapboxgl from 'mapbox-gl';
import { MapEvent } from './Event';

export class MBMap implements IMap {
    ref: any;
    layers: Array<ILayer>;
    create(id: string, options: any) {
        options.center = [options.center[1], options.center[0]];
        this.ref = new mapboxgl.Map({
            accessToken: 'pk.eyJ1Ijoia2VzaGF2c2hhcm1hIiwiYSI6ImNqdHgzY3JiMjA0NWYzeXBuc3BzMW9ic3gifQ.g36F4_s9oNQloGmWw-gvWg',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: options.center,
            zoom: options.zoom,
            container: id
        });
        this.layers = [];
        return this.ref;
    }
    destroy(ref: any): boolean {
        try {
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
            this.layers.push(layer);
            return true;
        } catch (e) {
            throw new Error(e);
        }
    }
    removeLayer(layer: ILayer): boolean {
        try {
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