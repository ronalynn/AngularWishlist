import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    new WishItem('Complete Angular tutorial'),
    new WishItem('Book hair appointment', true),
    new WishItem('Read two chapters of Red Rising')
  ];
  title = 'Ronalyn!';
}
