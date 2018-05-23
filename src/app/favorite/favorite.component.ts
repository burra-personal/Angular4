import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {

 @Input() isFavorite: boolean;

@Output() change= new EventEmitter(); 

  onClick(){
    this.isFavorite=!this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }

}

export interface FavoriteChangedEvent{

  newValue:boolean
}