import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoginComponent } from './client-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClientLoginComponent', () => {
  let component: ClientLoginComponent;
  let fixture: ComponentFixture<ClientLoginComponent>;
  let mockClientService: jasmine.SpyObj<ClientService>;
  let router:Router

  beforeEach(async () => {
    mockClientService = jasmine.createSpyObj('ClientService', [
      'verifyCredentials',
    ]);
    await TestBed.configureTestingModule({
      declarations: [ClientLoginComponent],
      imports: [ReactiveFormsModule, MatCardModule, RouterTestingModule],
      providers: [{ provide: ClientService, useValue: mockClientService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientLoginComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow login with invalid credentials', () => {
    mockClientService.verifyCredentials.and.returnValue(false);
    component.loginForm.setValue({
      username: 'user1@fmr.com',
      password: 'wrongpassword',
    });
    component.onSubmit();
    expect(component.loginStatus).toBe('Invalid username or password');
  });

  it('should set loginStatus to "Please enter valid credentials" when form is invalid', () => {
    // Making the form invalid by not providing required values
    component.loginForm.controls['username'].setValue('');
    component.loginForm.controls['password'].setValue('');

    component.onSubmit();

    expect(component.loginStatus).toBe('Please enter valid credentials');
  });

  it('should allow login with correct credentials', () => {
    spyOn(router,'navigate');
    mockClientService.verifyCredentials.and.returnValue(true);
    component.loginForm.setValue({
      username: 'user1@fmr.com',
      password: 'password1',
    });
    component.onSubmit();
    expect(component.loginStatus).toBe('Login Successful!');
    expect(router.navigate).toHaveBeenCalledWith(['/home'])
  });

  it('should navigate to /home on successful login',()=>{
    spyOn(router,'navigate');
    mockClientService.verifyCredentials.and.returnValue(true);
    component.loginForm.controls['username'].setValue('user1@fmr.com');
    component.loginForm.controls['password'].setValue('password1');

    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  })
});
