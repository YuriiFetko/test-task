import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Card} from '../../../shared/interfaces';
import {from, Observable} from 'rxjs';
import {DataService} from '../../../shared/data.service';
import {filter, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.sass']
})
export class CardPageComponent implements OnInit {

  public paramsId!: any;

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      // @ts-ignore
      this.paramsId = +params.params.id;
    });
  }

}
