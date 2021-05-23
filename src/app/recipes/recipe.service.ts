import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from './recipe.model';
import { map, tap } from 'rxjs/operators';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor(private afs: AngularFirestore) {}

  fetchAllRecipes(): Observable<any> {
    return this.afs
      .collection<Recipe>('recipes')
      .snapshotChanges()
      .pipe(
        map((docArray) =>
          docArray.map((doc) => {
            const id = doc.payload.doc.id;
            const data = doc.payload.doc.data() as Recipe;
            return { id, ...data };
          })
        )
      );
  }

  /*  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }*/

  getRecipeById(recipeId: string): Observable<any> {
    return this.afs.collection('recipes').doc(recipeId).get();
  }
}
