import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  recipeId = '';

  constructor(private route: ActivatedRoute, private rs: RecipeService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          this.recipeId = params.id;
          return this.rs.getRecipeById(this.recipeId);
        })
      )
      .subscribe((doc) => {
        if (doc.exists) {
          this.recipe = doc.data();
        }
      });
  }
}
