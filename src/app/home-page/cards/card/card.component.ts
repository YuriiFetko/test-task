import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../shared/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input()
  public card!: Card;


  constructor() {
  }

  ngOnInit(): void {

  }

}
