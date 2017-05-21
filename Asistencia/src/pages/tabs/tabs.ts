import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { InicioPage } from '../inicio/inicio';
import { PrincipalPage } from '../principal/principal';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = InicioPage;
  tab5Root = LoginPage;
  tab6Root = PrincipalPage;

  constructor() {

  }
}
