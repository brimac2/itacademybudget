import { expensesList } from './../shared/DATA';
import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../shared/expense';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expenses = this.expensesService.loadExpenses();
  }
}
