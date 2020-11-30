import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public logout($event: Event): void {
    event?.preventDefault();
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
