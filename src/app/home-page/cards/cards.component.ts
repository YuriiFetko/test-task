import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Card} from '../../shared/interfaces';
import {DataService} from '../../shared/data.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {

  public cards$!: Observable<Card[]>;
  public searchText = '';

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.cards$ = this.dataService.getData();
  }

  public search(event: Event): void {
    this.searchText = (event.target as HTMLInputElement).value;
  }

}
