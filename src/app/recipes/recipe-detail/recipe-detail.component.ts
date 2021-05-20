import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private fb: AngularFirestore) {}

  ngOnInit(): void {}
}
