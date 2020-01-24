import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'snr-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apple",2,"units"),
    new Ingredient("Sugar",6,"tbls"),
    new Ingredient("Butter",240,"g")
  ];

  constructor() { }

  ngOnInit() {
  }

}
