import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    new WishItem('Dyson Airwrap'),
    new WishItem('Ergonomic desk chair', true),
    new WishItem('iPhone 15 pro max')
  ];
  title = 'Ronalyns Wishlist';
}
