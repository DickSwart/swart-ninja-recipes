import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'snr-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input('model') recipe: Recipe;

  constructor() {}

  ngOnInit() {
    // console.error('XXX - ',this.recipe);
  }
}
