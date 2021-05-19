import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  private recipeCollection!: AngularFirestoreCollection<Recipe>;
  recipes!: Observable<Recipe[]>;
  constructor(private fb: AngularFirestore) {}

  ngOnInit(): void {
    this.recipeCollection = this.fb.collection<Recipe>('recipes');
    this.recipes = this.recipeCollection.snapshotChanges().pipe(
      map((recipes) =>
        recipes.map((recipe) => {
          const data = recipe.payload.doc.data() as Recipe;
          const id = recipe.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}
