import { Component } from '@angular/core';
import { FavoriteChangedEvent } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 canSave=true;

}

