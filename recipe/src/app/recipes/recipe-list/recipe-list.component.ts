import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('meatballs', 'simple yummy dinner', 'https://images-gmi-pmc.edge-generalmills.com/a7d7f227-8d99-4ebd-b224-f5338c0f0749.jpg'),
    new Recipe('soup', 'hearty meal', 'https://food-images.files.bbci.co.uk/food/recipes/chickensoup_1918_16x9.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
