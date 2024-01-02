import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Ronalyn\'s Wishlist';

  items : WishItem[] = [
    // new WishItem('Dyson Airwrap'),
    // new WishItem('Ergonomic desk chair', true),
    // new WishItem('iPhone 15 pro max')
  ];
 
  newWishText = '';

  addNewWish(){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = ''; //clear form after sumbit
  }

  toggleItem(item: WishItem){
    item.isComplete = !item.isComplete;
    console.log(item)
  }
}
