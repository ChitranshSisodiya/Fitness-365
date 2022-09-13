import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Admin } from "../class/Admin";
import { Employee } from "../class/Employee";
import { Equipment } from "../class/Equipment";
import { Member } from "../class/Member";

@Injectable()
export class Service{

    constructor (private httpClient : HttpClient){}
    link : string = "http://localhost:8081";

    editEmployee(employee: Employee) : Observable<any> {

        return this.httpClient.put(this.link+"/editEmployee",employee);

    }

    getAllEmployee() : Observable<any>{

        return this.httpClient.get(this.link+"/getAllEmployee");
        
    }

    getAllMember() : Observable<any>{
        return this.httpClient.get(this.link+"/getAllMember")
    }

    getAllEquipment(): Observable<any>{
        return this.httpClient.get(this.link+"/getAllEquipment")
    }

    login(user : Admin) : Observable<any>{
        
        return this.httpClient.post(this.link+"/login",user);
    }
    deleteEmployee(id : number) : Observable<any>{

        return this.httpClient.delete(this.link+"/deleteEmployee/"+id);

    } 
    deleteEquipment(id : number) : Observable<any>{

        return this.httpClient.delete(this.link+"/deleteEquipment/"+id);

    } 
    deleteMember(id : number) : Observable<any>{

        return this.httpClient.delete(this.link+"/deleteMember/"+id);

    } 

    editEquipment(equipment : Equipment) : Observable<any> {

        return this.httpClient.put(this.link+"/editEquipment",equipment);

    }

    editMember(member : Member) : Observable<any> {

        return this.httpClient.put(this.link+"/editMember",member);

    }

    addEmployee(employee : Employee) : Observable<any>{

        return this.httpClient.post(this.link+"/saveEmployee",employee);

    }

    addMember(member : Member) : Observable<any>{

        return this.httpClient.post(this.link+"/saveMember",member);

    }

    addEquipment(equipment : Equipment) : Observable<any>{

        return this.httpClient.post(this.link+"/addEquipment",equipment);

    }

    
}
