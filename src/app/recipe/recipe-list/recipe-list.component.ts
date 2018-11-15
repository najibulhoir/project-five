import { Recipe } from '../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes:Recipe[];

  // recipes: Recipe[] = [


  //   new Recipe('A Test Recipe', 'This simply a tes', 'https://static.businessinsider.sg/2018/02/02/5a7dc169d03072af008b4bf2.png'),

  //   new Recipe('A Test Recipe two', 'This simply a tes', 'assets/img/asdq.jpg')
  // ];

  constructor(private recipeService:RecipeService,
              private router:Router,
              private route:ActivatedRoute) { 
  }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

}
