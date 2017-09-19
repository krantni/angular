import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

@Injectable()
export class GetSocialMediaService {
  private socialmediaURL: string = "https://angular-b6d9c.firebaseio.com/socialmedia.json";
  constructor(private http: Http) { }


  getSocialMedia():Observable<any>{
    return this.http.get(this.socialmediaURL).map(this.getBody);
  }

  getBody(res: Response){
    return res.json();
  }
}