export class FetchAllRecipes {
  static readonly type = '[Recipes] Get Recipes';
}

export class FetchRecipe {
  static readonly type = '[Recipes] Get Recipe';
  constructor(public id: string) {}
}
