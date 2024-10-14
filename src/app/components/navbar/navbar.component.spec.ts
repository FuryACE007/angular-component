import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NavbarComponent } from './navbar.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { RouterTestingModule } from '@angular/router/testing'

describe('NavbarComponent', () => {
  let component: NavbarComponent
  let fixture: ComponentFixture<NavbarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        RouterTestingModule,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(NavbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
