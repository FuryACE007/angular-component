import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ClientLoginComponent } from '../client-login/client-login.component'
import { InvestmentPreferenceComponent } from './investment-preference.component'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

describe('InvestmentPreferenceComponent', () => {
  let component: InvestmentPreferenceComponent
  let fixture: ComponentFixture<InvestmentPreferenceComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestmentPreferenceComponent, ClientLoginComponent],
      imports: [
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(InvestmentPreferenceComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should initialize the form with default values', () => {
    const form = component.form;
    expect(form).toBeDefined();
    expect(form.get('investmentPurpose').value).toBe('');
    expect(form.get('riskTolerance').value).toBe('');
    expect(form.get('incomeCategory').value).toBe('');
    expect(form.get('lengthOfInvestment').value).toBe('');
  })

  it('should require riskTolerance, incomeCategory, and lengthOfInvestment fields', () => {
    const form = component.form;
    expect(form.get('riskTolerance').valid).toBeFalse();
    expect(form.get('incomeCategory').valid).toBeFalse();
    expect(form.get('lengthOfInvestment').valid).toBeFalse();
  })

  it('should enable submit button when form is valid', () => {
    const form = component.form;
    form.get('riskTolerance').setValue('Average');
    form.get('incomeCategory').setValue('40000 - 60000');
    form.get('lengthOfInvestment').setValue('5-7');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(button.disabled).toBeFalse();
  });

  it('should reset the form when add() is called', () => {
    const form = component.form;
    form.get('investmentPurpose').setValue('Retirement');
    form.get('riskTolerance').setValue('Average');
    form.get('incomeCategory').setValue('40000 - 60000');
    form.get('lengthOfInvestment').setValue('5-7');

    component.add();
    expect(form.get('investmentPurpose').value).toBe('');
    expect(form.get('riskTolerance').value).toBe('');
    expect(form.get('incomeCategory').value).toBe('');
    expect(form.get('lengthOfInvestment').value).toBe('');
  });

  it('should emit false when callRegistrationForm() is called', () => {
    spyOn(component.showForm, 'emit');

    component.callRegistrationForm();

    expect(component.showForm.emit).toHaveBeenCalledWith(false);
  });

  it('should have correct options for risk tolerance, income category, and length of investment', () => {
    expect(component.r.length).toBe(5);
    expect(component.i.length).toBe(7);
    expect(component.l.length).toBe(4);

    expect(component.r[0].t).toBe('Conservative');
    expect(component.i[0].c).toBe('0 - 20000');
    expect(component.l[0].i).toBe('0-5');
  });




})
