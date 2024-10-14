import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HomePageComponent } from '../home-page/home-page.component'
import { RoboAdvisorComponent } from './robo-advisor.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { MatCardModule } from '@angular/material/card'
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

describe('RoboAdvisorComponent', () => {
  let component: RoboAdvisorComponent
  let fixture: ComponentFixture<RoboAdvisorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoboAdvisorComponent, HomePageComponent],
      imports: [
        MatDialogModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        RouterLink,
        RouterModule,
        RouterTestingModule,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(RoboAdvisorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
