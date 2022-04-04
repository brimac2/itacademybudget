export class ExpenseModel {
  constructor(
    public name: string,
    public date: string,
    public amount: string,
    public id?: string
  ) {}
}

/* čia toks labiau tip, negu pataisymui. Su aprašymu viskas gerai, iš esmės galima taip inicializuot gražiai, bet jei objektas nesudėtingas, gali aprašyt kiek paprasčiau

export interface ExpenseModel {
  name: string,
  date: string,
  amount: string,
  id?: string
}

Kartu visai useful būna tokie dalykai kaip `enum` ar `type`, o jei turi kelis objektus su sutampamčiais fields, gali daryti `extends`

export interface ExpenseModelWithNote extends ExpenseModel {
  note: string
}

toks iš esmės turės visus fields kaip ir `ExpenseModel` plius note
*/
