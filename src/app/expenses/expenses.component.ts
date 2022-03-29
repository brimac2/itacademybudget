import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';
import { Expense } from '../shared/expense';
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit {
  expensesList$: Observable<Expense[]> = of();
  totalAmount: number = 0;

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expensesList$ = this.expensesService.loadExpenses().pipe(
      tap((expenses: Expense[]) => {
        expenses.map((item: Expense) => {
          this.totalAmount += parseFloat(item.amount);
        });
      })
    );
  }
}
