import { AbstractControl, ValidationErrors } from '@angular/forms';

export const nameNoteValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const expenseName = control.get('name');
  const expenseNote = control.get('note');
  const invalid = expenseNote!.value.includes(expenseName!.value);
  /*Vietomis galima pagerinti pastovumą, daryti panašias sąlygas validatoriams, kad pvz.: vienas tikrinamas su valid, kitas su invalid (su valid tikrini regulatory.validator.ts
    Turint pastovumą bus sunkiau susipainioti.*/
  return invalid ? { nameNote: {} } : null;
};
