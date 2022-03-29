import { AbstractControl, ValidationErrors } from '@angular/forms';

export const nameNoteValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const expenseName = control.get('name');
  const expenseNote = control.get('note');
  const invalid = expenseNote!.value.includes(expenseName!.value);

  return invalid ? { nameNote: {} } : null;
};
