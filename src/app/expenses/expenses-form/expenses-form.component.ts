import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ExpensesService } from 'src/app/expenses.service';
import { ExpenseModel } from './expense.model';

@Component({
  selector: 'app-expenses-form',
  templateUrl: './expenses-form.component.html',
  styleUrls: ['./expenses-form.component.css'],
})
export class ExpensesFormComponent implements OnInit {
  expense: ExpenseModel = new ExpenseModel('', '', '');
  @Output() expenseUpdated: EventEmitter<void> = new EventEmitter();

  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {}

  addExpense() {
    this.expensesService.addExpense(this.expense).subscribe(() => {
      this.expense = new ExpenseModel('', '', '');
      this.expenseUpdated.emit();
    });
  }

  resetExpense() {
    this.expense = new ExpenseModel('', '', '');
  }
}
