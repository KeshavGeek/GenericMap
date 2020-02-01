import {ILayer} from './ILayer';

export interface ICircleLayerService {
    createLayer(list:ILayer[]): ILayer;
}
