import {ICircle} from './ICircle';
import { IOptions} from './IOptions';
import { ILatLng } from './ILatLng';
import { ILayer} from './ILayer';
import * as L from 'leaflet';

export class Circle implements ICircle{
    id: number;
    ref: L.Circle<any>;
    options: IOptions;
    create(latLngs: ILatLng, options: IOptions): ILayer {
        this.ref = L.circle([latLngs.latitude, latLngs.longitude], options);
        return {ref:this.ref};
    }
    remove(id: number): boolean {
        throw new Error("Method Not Implemented.");
    }
    updateOptions(options: IOptions): void{
        this.ref.setStyle(options);
    }
}
