import { Component, OnInit } from '@angular/core';

// Omar El Tokhy 1300207 importing Tabspage
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nextPage = TabsPage;

  constructor() { }

  ngOnInit() {
  }

}
