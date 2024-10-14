import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AppComponent } from 'src/app/app.component'
import { MatDialogModule } from '@angular/material/dialog'
import { PortfolioViewComponent } from '../portfolio-view/portfolio-view.component'
import { HomePageComponent } from '../home-page/home-page.component'
import { AgGridAngular } from 'ag-grid-angular'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule } from '@angular/material/menu'
import { RouterTestingModule } from '@angular/router/testing'

describe('PortfolioViewComponent', () => {
  let component: PortfolioViewComponent
  let fixture: ComponentFixture<PortfolioViewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioViewComponent, AppComponent, HomePageComponent],
      imports: [
        MatDialogModule,
        AgGridAngular,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        RouterTestingModule,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(PortfolioViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
