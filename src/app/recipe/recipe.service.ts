import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

  recipeSelected=new EventEmitter<Recipe>();

  recipes: Recipe[] = [


    new Recipe('A Test Recipe', 'This simply a tes', 'https://static.businessinsider.sg/2018/02/02/5a7dc169d03072af008b4bf2.png',
    
    [
      new Ingredient('meal',1),
      new Ingredient('tomato',2)
    ]),

    new Recipe('A Test Recipe two', 'This simply a tes', 'assets/img/asdq.jpg',
    [
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ])
  ];

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

constructor(private slsService:ShoppingListService) { }

}
