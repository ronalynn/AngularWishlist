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
    new WishItem('Dyson Airwrap'),
    new WishItem('Ergonomic desk chair', true),
    new WishItem('iPhone 15 pro max')
  ];
 
  visibleItems : WishItem[] = this.items;

  newWishText = '';

  addNewWish(){
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = ''; //clear form after sumbit
  }

  toggleItem(item: WishItem){
    item.isComplete = !item.isComplete;
    console.log(item)
  }

  //filtering wishlist
  listFilter : String = '0';

  filterChanged(value: any){
    if(value === '0'){
      this.visibleItems = this.items;
    } else if (value === '1'){
      this.visibleItems = this.items.filter(item => !item.isComplete)
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete)
    }
  }
}
