import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
 
  IngredientChange=new EventEmitter<Ingredient[]>();

 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 20),
    new Ingredient('tomato', 10),
  ];

constructor() { }

getIngredient(){
  return this.ingredients.slice();
}

addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient);
  this.IngredientChange.emit(this.ingredients.slice());
}
addIngredients(ingredients:Ingredient[]){
  this.ingredients.push(...ingredients);
  this.IngredientChange.emit(this.ingredients.slice());
}
}
