import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsComponent } from './budgets/budgets.component';
import { ExpensesItemComponent } from './expenses-item/expenses-item.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { FilterExpenseGuard } from './filter-expense.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  {
    path: 'expense/:id',
    component: ExpensesItemComponent,
    canActivate: [FilterExpenseGuard],
  },
  { path: 'budgets', component: BudgetsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
