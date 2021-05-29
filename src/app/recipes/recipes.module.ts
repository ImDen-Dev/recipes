import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { SharedModule } from '../shared/shared.module';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    AddRecipeComponent,
  ],
  imports: [SharedModule, RecipesRoutingModule],
  exports: [],
})
export class RecipesModule {}
