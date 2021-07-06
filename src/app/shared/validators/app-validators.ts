import { Validators as NGValidators, AbstractControl, ValidationErrors } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export class AppValidators extends NGValidators {

  constructor(public translateService: TranslateService) {
    super();
  }

  static minLength(length): any {
    return (control: any) =>
      super.minLength(length)(control)
        ? { minLength: 'ველის სიგრძე არ შეიძლება იყოს ' + length + '-ზე ნაკლები' }
        : undefined;
  };

  static maxLength(length): any {
    return (control) =>
      super.maxLength(length)(control)
        ? { maxLength: 'ველის სიგრძე არ შეიძლება იყოს ' + length + '-ზე მეტი' }
        : undefined;
  };

  static required(control): any {
    return super.required(control)
      ? { required: 'ველი აუცილებელია' }
      : undefined;
  };

  static pattern(pattern: string | RegExp, patternDescription?: string): any {
    return (control: AbstractControl) => {
      if (super.pattern(pattern)(control)) {
        return {
          minLength: `გთხოვთ დაიცვათ შაბლონი '${patternDescription || pattern.toString()}'`
        };
      }
    };
  };

  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    return (control.value as string)?.indexOf(' ') !== -1 ? { cannotContainSpace: 'დაუშვებელია space-ები' } : undefined;
  };

  static minNumber(control: AbstractControl): ValidationErrors | null {
    return (control.value as number) < 1 ? { minValue: 'გთხოვთ შეიყვანოთ მინიმუმ 1' } : undefined;
  };

  static email(control: AbstractControl) {
    return super.email(control) ? { required: 'გთხოვთ შეიყვანოთ სწორი მეილი' } : undefined;
  }

  static matchValues(matchTo: string): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return  !!control.parent &&
              !!control.parent.value &&
              control.value === control.parent.controls[matchTo].value ?
              undefined : { isMatching: 'პაროლები არ ემთხვევა' };
    };
  };
}
