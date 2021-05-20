import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipe } from '../recipe.model';
import { Select, Store } from '@ngxs/store';
import { RecipesState } from '../recipes.state';
import * as RecipesActions from '../recipes.actions';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Select(RecipesState.fetchAllRecipes) recipes$:
    | Observable<Recipe[]>
    | undefined;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new RecipesActions.FetchAllRecipes());
  }
}
