import { ICircle } from './ICircle';
import { IOptions } from './IOptions';
import { ILatLng } from './ILatLng';
import { ILayer } from './ILayer';

export class GCircle implements ICircle {
    id: number;
    options: IOptions;
    create(latLngs: ILatLng, options: IOptions): ILayer {
        const ref = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            center: { lat: latLngs.latitude, lng: latLngs.longitude },
            radius: options.radius
        });
        return { ref };
    }
    remove(id: number): boolean {
        throw new Error("Method Not Implemented.");
    }
}
