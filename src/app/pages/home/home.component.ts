import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { selectCustomerList } from 'src/app/services/state/actions.selector';
import * as ServiceActions from 'src/app/services/state/service.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home';

  customers$ = this.store.select(selectCustomerList);

  constructor(
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
  }
}
