import { IMap } from './IMap';
import { ILayer } from './ILayer';
import { MapEvent } from './Event';
var maptalks = require('maptalks/dist/maptalks.min.js');

export class MTMap implements IMap {
    ref: any;
    layers: Array<ILayer>;
    create(id: string, options: any) {
        this.ref = new maptalks.Map(id, {
            center: [options.center[1], options.center[0]],
            zoom: options.zoom,
            baseLayer: new maptalks.TileLayer('base', {
                urlTemplate: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                subdomains: ['a', 'b', 'c', 'd'],
                attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
            })
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