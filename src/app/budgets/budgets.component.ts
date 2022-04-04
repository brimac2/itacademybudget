import { Component, OnInit } from '@angular/core';
/**
 * Nors componento tiesiogiai ir nerašei, bet vienas tip for the future, kaip palaikyt cleaner code. Čia gali išimti `styleUrls` ir tada ištrint css failą, jei nenaudojamas.
 * Toliau gali ištrinti constructor ir ngOnInit ir kartu implements OnInit ir jo importą. Taip komponentas atrodys daug paprasčiau.
 */
@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

//example:
/*
import { Component } from '@angular/core';

 @Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
})
export class BudgetsComponent {}
*/
