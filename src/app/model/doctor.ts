export class Doctor{
    pkUserId:number;
    username:string;
    email:string;
    password:string;
    roleId:number;
    specialist:string;
    patientList:[];

    constructor(pkUserId:number,username:string,email:string,password:string,roleId:number,specialist:string,patientList:[]){
        this.pkUserId=pkUserId;
        this.username=username;
        this.email=email;
        this.password=password;
        this.roleId=2;
        this.specialist=specialist;
        this.patientList=patientList;
    }
}