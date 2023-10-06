import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    constructor(private http : HttpClient) {

    }

    public addElement(arr:any[], element:any) {
        arr.push(element);
    }
    public deleteElement(arr:any[]){
        arr.pop();

    }

    public getEmployees() : Observable<any> {
        return this.http.get("https://dummy.restapiexample.com/api/v1/employees");

    }
}
