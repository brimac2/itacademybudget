import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ExpensesService } from 'src/app/servicess/expenses-service/servises-service/expenses.service';

export const regulatoryValidator =
  (expensesService: ExpensesService) =>
  (control: AbstractControl): Observable<ValidationErrors | null> => {
    return expensesService
      .validateNote(control.value)
      .pipe(
        map((response: { valid: boolean }) =>
          response.valid ? null : { regulatory: {} }
        )
      );
  };
