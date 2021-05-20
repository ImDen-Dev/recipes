import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AngularFirestore } from '@angular/fire/firestore';

import { Recipe } from './recipe.model';
import { FetchAllRecipes } from './recipes.actions';
import { map } from 'rxjs/operators';

export interface RecipesStateModel {
  recipes: Recipe[];
}

@State<RecipesStateModel>({
  name: 'recipes',
  defaults: {
    recipes: [],
  },
})
@Injectable()
export class RecipesState {
  constructor(private fb: AngularFirestore) {}

  @Selector()
  static fetchAllRecipes(state: RecipesStateModel): Recipe[] {
    return state.recipes;
  }

  @Action(FetchAllRecipes)
  fetchAllRecipes(ctx: StateContext<RecipesStateModel>): void {
    const state = ctx.getState();
    this.fb
      .collection<Recipe>('recipes')
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc) => {
            const data = doc.payload.doc.data() as Recipe;
            const id = doc.payload.doc.id;
            return { id, ...data };
          });
        })
      )
      .subscribe((rec) => {
        const recipes: Recipe[] = rec;
        console.log(recipes);
        ctx.setState({
          ...state,
          recipes: [...recipes],
        });
      });
  }
}
