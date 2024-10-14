import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ReportClientActivityComponent } from './report-client-activity.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { AgGridAngular } from 'ag-grid-angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

describe('ReportClientActivityComponent', () => {
  let component: ReportClientActivityComponent
  let fixture: ComponentFixture<ReportClientActivityComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportClientActivityComponent],
      imports: [
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        AgGridAngular,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(ReportClientActivityComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
