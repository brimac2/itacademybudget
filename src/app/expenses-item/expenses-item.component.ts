import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpensesService } from '../services/expenses.service';
import { Expense } from '../shared/expense';

@Component({
  selector: 'app-expenses-item',
  templateUrl: './expenses-item.component.html',
  styleUrls: ['./expenses-item.component.css'],
})
export class ExpensesItemComponent implements OnInit {
  expense: Expense | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private expensesService: ExpensesService
  ) {
    const expenseId: string | null =
      this.activatedRoute.snapshot.paramMap.get('id');
    this.expense = this.expensesService.getExpense(expenseId);
  }

  ngOnInit(): void {}
}
