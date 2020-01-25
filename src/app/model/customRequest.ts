import { Doctor } from './doctor';

export class CustomRequest<T>{
    success:Boolean;
    status:number;
    object:T[];
    constructor(success:boolean,status:number,object:T[]){
        this.success=success;
        this.status=status;
        this.object=object;
    }

}