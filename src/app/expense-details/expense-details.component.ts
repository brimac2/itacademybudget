import { ExpensesService } from 'src/app/expenses.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { observable, of, Observable } from 'rxjs';
import { Expense } from '../shared/expense';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.css'],
})
export class ExpenseDetailsComponent implements OnInit {
  expense$: Observable<Expense> = of();
  id: string | null = '';
  constructor(
    private expensesService: ExpensesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.expense$ = this.expensesService.getExpense(this.id);
    }
  }
}
