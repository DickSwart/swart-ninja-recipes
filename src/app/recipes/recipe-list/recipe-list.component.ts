import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'snr-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('Garlic-Lemon Double Stuffed Chicken Breasts','Not your everyday chicken dish! Stuffed with Cheddar and cream cheeses, then drenched with a garlic-lemon-butter sauce, your friends and family will be begging you to make this recipe - believe me, I know!','http://aucdn.ar-cdn.com/recipes/port250/b85a0f1e-104b-4936-82d3-7b42b1c75897.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
