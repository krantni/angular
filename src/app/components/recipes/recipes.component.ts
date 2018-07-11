import { Component, OnInit } from '@angular/core';
import { animateJob } from './recipes.animations';
import { GetRecipesService } from '../../services/get-recipes/get-recipes.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [GetRecipesService],
  animations: [ animateJob ]
})
export class RecipesComponent implements OnInit {

  public recipes: JSON[];
  recipeState:string = 'inactive';

  constructor(private getRecipe: GetRecipesService) { }

  ngOnInit() {
    this.getRecipe.getRecipe().subscribe(data => this.recipes = data);
    this.recipeState = 'active';
  }

  public has(detail){
    return detail === "";
  }

}