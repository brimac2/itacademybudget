import { FilterExpenseGuard } from './guards/filter-expense.guard';
import { ComponentFixture } from '@angular/core/testing';
import { ExpenseDetailsComponent } from './expense-details/expense-details.component';
import { Expense } from './shared/expense';
import { BudgetsComponent } from './budgets/budgets.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  {
    path: 'expense/:id',
    component: ExpenseDetailsComponent,
    canActivate: [FilterExpenseGuard],
  },
  { path: 'budgets', component: BudgetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
