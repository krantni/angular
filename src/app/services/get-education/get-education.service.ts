import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

@Injectable()
export class GetEducationService {
  private schoolsURL: string = "https://angular-b6d9c.firebaseio.com/schools.json";
  constructor(private http: Http) { }


  getEducation():Observable<any>{
    return this.http.get(this.schoolsURL).map(this.getBody);
  }

  getBody(res: Response){
    return res.json();
  }
}
