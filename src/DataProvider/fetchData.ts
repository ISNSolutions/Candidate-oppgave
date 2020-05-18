import { IShip } from "../Models/IShip";
import ships from './ships.json';

export class fetchData {
    public static getShips(): Promise<IShip[]> {
        return new Promise((resolve)=>{
            resolve(ships);
        }) 
    }
}