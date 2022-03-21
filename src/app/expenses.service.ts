import { Injectable } from '@angular/core';
import { expensesList } from './shared/DATA';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  constructor() {}

  loadExpenses() {
    return expensesList;
  }
}
