import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  goToRecipe(id: string): void {
    if (!id || id === '') {
      // TODO handle empty id
      return;
    }
    this.router.navigate([id], { relativeTo: this.route });
  }
}
