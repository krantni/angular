import { Component, OnInit } from '@angular/core';
import { animateRecipeOpenClose } from './recipes.animations';
import { GetRecipesService } from '../../services/get-recipes/get-recipes.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [GetRecipesService],
  animations: [ animateRecipeOpenClose ]
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

  public openRecipe(recipeId){
    let recipeIterator:any;
    for(recipeIterator in this.recipes){
      let recipe:any = this.recipes[recipeIterator];
      if(recipeId != recipe.id){
        document.getElementById(recipe.id+"Body").classList.remove("open");
        document.getElementById(recipe.id+"Body").classList.add("closed");
        document.getElementById(recipe.id+"sign").innerHTML = "+"
      } else if(document.getElementById(recipe.id+"Body").classList.contains("open")){
          document.getElementById(recipe.id+"Body").classList.remove("open");
          document.getElementById(recipe.id+"Body").classList.add("closed");
          document.getElementById(recipe.id+"sign").innerHTML = "+"
        } else {
          document.getElementById(recipe.id+"Body").classList.remove("closed");
          document.getElementById(recipe.id+"Body").classList.add("open");
          document.getElementById(recipe.id+"sign").innerHTML = "-"
      }
    }
  }

}