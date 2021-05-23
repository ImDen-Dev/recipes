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
    /*    this.route.params.subscribe((params) => {
      this.rs.getRecipeById(params.id).subscribe((recipe) => {
        if (recipe.exists) {
          this.recipe = {...recipe.data(), id: }
        }
      });
    });*/

    this.route.params
      .pipe(
        switchMap((params) => {
          this.recipeId = params.id;
          return this.rs.getRecipeById(params.id);
        })
      )
      .subscribe((doc) => {
        if (doc.exists) {
          this.recipe = doc.data();
        }
      });
  }
}
