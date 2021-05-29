import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  editMode = false;
  constructor() {}

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
      description: new FormControl(''),
      time: new FormControl('', [
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
          name: new FormControl(''),
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
          stepName: new FormControl(''),
        }),
      ]),
    });
  }

  onSubmit(): void {
    console.log(this.recipeForm);
  }

  addIngredientField(): void {
    const ingredientGroup = this.recipeForm.get('ingredients') as FormArray;
    ingredientGroup.push(
      new FormGroup({
        name: new FormControl(''),
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
        stepName: new FormControl(''),
      })
    );
  }

  removeStepField(i: number): void {
    const stepGroup = this.recipeForm.get('steps') as FormArray;
    stepGroup.removeAt(i);
  }
}
