import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-investment-preference',
  templateUrl: './investment-preference.component.html',
  styleUrls: ['./investment-preference.component.css'],
})
export class InvestmentPreferenceComponent {
  @Output()
  showForm = new EventEmitter<boolean>();
  form: FormGroup;
  date: Date;
  constructor(private fb: FormBuilder) {
    this.date = new Date();
    this.form = this.fb.group({
      investmentPurpose: '',
      riskTolerance: ['', Validators.required],
      incomeCategory: ['', Validators.required],
      lengthOfInvestment: ['', Validators.required],
    });
  }
  add() {
    this.form.reset({
      investmentPurpose: '',           // Explicitly reset to empty string
      riskTolerance: '',
      incomeCategory: '',
      lengthOfInvestment: ''
    }
    );
  }
  r = [
    { t: 'Conservative' },
    { t: 'Below Average' },
    { t: 'Average' },
    { t: 'Above Average' },
    { t: 'Aggressive' },
  ];
  i = [
    { c: '0 - 20000' },
    { c: '20000 - 40000' },
    { c: '40000 - 60000' },
    { c: '60000 - 80000' },
    { c: '80000 - 100000' },
    { c: '100000 - 150000' },
    { c: '150000+' },
  ];
  l = [{ i: '0-5' }, { i: '5-7' }, { i: '7-10' }, { i: '10-15' }];
  callRegistrationForm(){
    this.showForm.emit(false);
  }
}
