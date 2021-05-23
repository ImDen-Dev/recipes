/*
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RecipeResolver implements Resolve<Recipe[]> {
  constructor(private rs: RecipeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    const recipes = this.rs.getRecipes();
    console.log(recipes);
    if (recipes.length === 0) {
      return this.rs.fetchAllRecipes();
    } else {
      return recipes;
    }
  }
}
*/
