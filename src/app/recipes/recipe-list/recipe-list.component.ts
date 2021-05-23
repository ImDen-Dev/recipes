import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private rs: RecipeService) {}

  ngOnInit(): void {
    this.rs.fetchAllRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
}
