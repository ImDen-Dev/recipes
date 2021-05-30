import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  editMode = false;
  constructor(private afs: AngularFirestore, private route: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  get ingredientsControls(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  get stepsControls(): AbstractControl[] {
    return (this.recipeForm.get('steps') as FormArray).controls;
  }

  private initForm(): void {
    this.recipeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      time_for_preparing: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(0),
      ]),
      portions: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(0),
      ]),
      ingredients: new FormArray([
        new FormGroup({
          name: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
          ]),
          amount: new FormControl('', [
            Validators.required,
            Validators.pattern('^[0-9]*$'),
            Validators.min(0),
          ]),
          measure: new FormControl(''),
        }),
      ]),
      steps: new FormArray([
        new FormGroup({
          text: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
          ]),
        }),
      ]),
    });
  }

  onSubmit(): void {
    const recipe: Recipe = {
      ...this.recipeForm.value,
      images: [],
    };
    this.afs
      .collection<Recipe>('recipes')
      .add(recipe)
      .then((data) => {
        this.route.navigate(['/recipes']);
        console.log(data);
      })
      .catch((reason) => console.log(reason));
  }

  addIngredientField(): void {
    const ingredientGroup = this.recipeForm.get('ingredients') as FormArray;
    ingredientGroup.push(
      new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        amount: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.min(0),
        ]),
        measure: new FormControl(''),
      })
    );
  }

  removeIngredientField(i: number): void {
    const ingredientGroup = this.recipeForm.get('ingredients') as FormArray;
    ingredientGroup.removeAt(i);
  }

  addStepField(): void {
    const stepGroup = this.recipeForm.get('steps') as FormArray;
    stepGroup.push(
      new FormGroup({
        text: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
      })
    );
  }

  removeStepField(i: number): void {
    const stepGroup = this.recipeForm.get('steps') as FormArray;
    stepGroup.removeAt(i);
  }
}
