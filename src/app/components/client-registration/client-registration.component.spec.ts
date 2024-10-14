import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegistrationComponent } from './client-registration.component';
import { ClientService } from 'src/app/services/client.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

describe('ClientRegistrationComponent', () => {
  let component: ClientRegistrationComponent;
  let fixture: ComponentFixture<ClientRegistrationComponent>;
  let mockClientService: jasmine.SpyObj<ClientService>;

  beforeEach(async () => {
    mockClientService = jasmine.createSpyObj('ClientService', [
      'isEmailRegistered',
      'isIdentificationValueRegistered',
      'registerClient',
    ]);
    await TestBed.configureTestingModule({
      declarations: [ClientRegistrationComponent],
      imports: [ReactiveFormsModule, MatCardModule],
      providers: [{ provide: ClientService, useValue: mockClientService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require the name field to be valid', () => {
    const nameControl = component.registrationForm.get('name');
    nameControl?.setValue('');
    expect(nameControl?.valid).toBeFalse();
    nameControl?.setValue('Jake');
    expect(nameControl?.valid).toBeTrue();
  });
  it('should require the email field to be valid', () => {
    const emailControl = component.registrationForm.get('email');
    emailControl?.setValue('');
    expect(emailControl?.valid).toBeFalse();
    emailControl?.setValue('testMail');
    expect(emailControl?.valid).toBeFalse();
    emailControl?.setValue('testMail@gmail.com');
    expect(emailControl?.valid).toBeTrue();
  });
  it('should require the country field to be selected', () => {
    const countryControl = component.registrationForm.get('country');
    countryControl?.setValue('');
    expect(countryControl?.valid).toBeFalse();
    countryControl?.setValue('US');
    expect(countryControl?.valid).toBeTrue();
  });

  it('should emit true when callInvestmentPrefForm is called', () => {
    spyOn(component.showForm, 'emit'); // Spy on the emit function

    component.callInvestmentPrefForm();

    expect(component.showForm.emit).toHaveBeenCalledWith(true); // Check if true is emitted
  });

  it('should clear identificationType and remove validators when country is not US or India', () => {
    // Set country to an unsupported value
    component.registrationForm.get('country')?.setValue('Canada');

    component.onCountryChange();

    expect(component.registrationForm.get('identificationType')?.value).toBe('');
    expect(component.registrationForm.get('identificationValue')?.validator).toBeNull();
  });

  it('should validate SSN for US', () => {
    component.registrationForm.get('country')?.setValue('US');
    component.onCountryChange();
    const identificationValueControl = component.registrationForm.get(
      'identificationValue'
    );
    identificationValueControl?.setValue('');
    expect(identificationValueControl?.valid).toBeFalse();
    identificationValueControl?.setValue('12-34-678');
    expect(identificationValueControl?.valid).toBeFalse();
    identificationValueControl?.setValue('123-45-6789');
    expect(identificationValueControl?.valid).toBeTrue();
  });

  it('should validate PAN for India', () => {
    component.registrationForm.get('country')?.setValue('India');
    component.onCountryChange();
    const identificationValueControl = component.registrationForm.get(
      'identificationValue'
    );
    identificationValueControl?.setValue('');
    expect(identificationValueControl?.valid).toBeFalse();
    identificationValueControl?.setValue('12-34-678');
    expect(identificationValueControl?.valid).toBeFalse();
    identificationValueControl?.setValue('ABCDE1234F');
    expect(identificationValueControl?.valid).toBeTrue();
  });

  it('should display error if the email is already registered', () => {
    mockClientService.isEmailRegistered.and.returnValue(true);
    component.registrationForm.setValue({
      name: 'Jake',
      email: 'user1@fmr.com',
      country: 'US',
      identificationType: 'ssn',
      identificationValue: '123-45-6789',
      password: 'password1',
    });
    component.onSubmit();
    expect(component.registrationStatus).toBe('Email already registered!');
  });

  it('should not submit the form if the form is invalid', () => {
    component.registrationForm.setValue({
      name: 'Terry',
      email: 'user1@fmr.com',
      country: 'US',
      identificationType: 'ssn',
      identificationValue: '123-45-6789',
      password: '',
    });
    component.onSubmit();
    expect(component.registrationStatus).toBe('');
  });

  it('should not allow a new user with existing identification value', () => {
    mockClientService.isEmailRegistered.and.returnValue(false);
    mockClientService.isIdentificationValueRegistered.and.returnValue(true);

    component.registrationForm.setValue({
      name: 'Terry',
      email: 'user3@fmr.com',
      country: 'US',
      identificationType: 'ssn',
      identificationValue: '123-45-6789',
      password: 'password3',
    });
    component.onSubmit();
    expect(component.registrationStatus).toBe(
      'Identification value already registered!'
    );
  });

  it('should register successfully if email and identification value do not exist already', () => {
    mockClientService.isEmailRegistered.and.returnValue(false);
    mockClientService.isIdentificationValueRegistered.and.returnValue(false);

    component.registrationForm.setValue({
      name: 'Terry',
      email: 'user3@fmr.com',
      country: 'US',
      identificationType: 'ssn',
      identificationValue: '123-45-6777',
      password: 'password3',
    });
    component.onSubmit();
    expect(component.registrationStatus).toBe(
      'Client successfully registered!'
    );
  });
});
