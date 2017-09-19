import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

@Injectable()
export class GetExperienceService {
  private jobsURL: string = "https://angular-b6d9c.firebaseio.com/jobs.json";
  constructor(private http: Http) { }


  getExperience():Observable<any>{
    return this.http.get(this.jobsURL).map(this.getBody);
  }

  getBody(res: Response){
    return res.json();
  }
}

