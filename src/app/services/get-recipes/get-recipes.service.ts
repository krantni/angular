import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

@Injectable()
export class GetRecipesService {
  private recipesURL: string = "https://angular-b6d9c.firebaseio.com/recipes.json";
  constructor(private http: Http) { }


  getRecipe():Observable<any>{
    return this.http.get(this.recipesURL).map(this.getBody);
  }

  getBody(res: Response){
    return res.json();
  }
}
