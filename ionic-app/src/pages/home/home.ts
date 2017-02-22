import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  teste:string = 'Teste';
  constructor(public navCtrl: NavController) {

  }

}
