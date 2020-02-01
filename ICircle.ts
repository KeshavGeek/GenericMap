import {IOptions} from './IOptions';
import {ILatLng} from './ILatLng';
import { ILayer } from './ILayer';
export interface ICircle {
    id: number;
    options: IOptions;
    create(latLngs: ILatLng, options: IOptions): ILayer;
    remove(id: number): boolean;
    //addEvent(EventClassRef): ;
    //removeEvent(EventClassRef): ;
}
