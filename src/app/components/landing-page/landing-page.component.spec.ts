import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LandingPageComponent } from './landing-page.component'
import { ClientLoginComponent } from '../client-login/client-login.component'
import { MatCardModule } from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

describe('LandingPageComponent', () => {
  let component: LandingPageComponent
  let fixture: ComponentFixture<LandingPageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageComponent, ClientLoginComponent],
      imports: [MatCardModule, FormsModule, ReactiveFormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(LandingPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should toggle the value of showLogin when toggleForm() is called', () => {
    component.showLogin = true; // Initial value
    component.toggleForm();
    expect(component.showLogin).toBeFalse(); // Expect it to be false after toggle

    component.toggleForm();
    expect(component.showLogin).toBeTrue(); // Expect it to be true after another toggle
  });

  it('should set regFormVisible to the given value in showForm()', () => {
    component.showForm(true);
    expect(component.regFormVisible).toBeTrue(); // Expect it to be true

    component.showForm(false);
    expect(component.regFormVisible).toBeFalse(); // Expect it to be false
  });

  it('should set regFormVisible to the given value in showRegForm()', () => {
    component.showRegForm(true);
    expect(component.regFormVisible).toBeTrue(); // Expect it to be true

    component.showRegForm(false);
    expect(component.regFormVisible).toBeFalse(); // Expect it to be false
  }); 

})
