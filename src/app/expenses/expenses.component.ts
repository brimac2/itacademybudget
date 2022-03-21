import { expensesList } from './../shared/DATA';
import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  expenses: {
    id: string;
    name: string;
    date: string;
    amount: string;
  }[] = [];

  constructor(private expensesList: ExpensesService) {}

  ngOnInit(): void {
    this.expenses = this.expensesList.loadExpenses();
  }
}
