import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { of, throwError } from 'rxjs'
import { SellTradeComponent } from './sell-trade.component'
import { FmtsService } from '../../services/fmts.service'
import { PriceService } from '../../services/price.service'
import { Price } from '../../models/price'
import { Instrument } from '../../models/instrument'
import { Trade } from 'src/app/models/trade'
import { NavbarComponent } from '../navbar/navbar.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'

describe('SellTradeComponent', () => {
  let component: SellTradeComponent
  let fixture: ComponentFixture<SellTradeComponent>
  let fmtServiceSpy: jasmine.SpyObj<FmtsService>
  let priceServiceSpy: jasmine.SpyObj<PriceService>

  beforeEach(async () => {
    fmtServiceSpy = jasmine.createSpyObj('FmtsService', ['executeTrade'])
    priceServiceSpy = jasmine.createSpyObj('PriceService', [
      'getLivePriceByInstrumentId',
    ])

    await TestBed.configureTestingModule({
      declarations: [SellTradeComponent, NavbarComponent],
      imports: [
        ReactiveFormsModule,
        MatSnackBarModule,
        MatDialogModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatMenuModule,
      ],
      providers: [
        { provide: FmtsService, useValue: fmtServiceSpy },
        { provide: PriceService, useValue: priceServiceSpy },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(SellTradeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })

  xit('should execute trade when form is valid and target price is within 5%', () => {
    const trade = { cashValue: 100 }
    fmtServiceSpy.executeTrade.and.returnValue(of(trade as Trade))
    const mockPrice: Price = new Price(
      '1',
      100,
      105,
      'timestamp',
      {} as Instrument,
    )
    priceServiceSpy.getLivePriceByInstrumentId.and.returnValue(of(mockPrice))

    component.sellForm.setValue({
      instrumentId: '1',
      quantity: 10,
      targetPrice: 105,
    })

    component.onSubmit()

    expect(fmtServiceSpy.executeTrade).toHaveBeenCalled()
    expect(component['snackBar'].open).toHaveBeenCalledWith(
      'Trade executed successfully',
      'Close',
      { duration: 3000 },
    )
  })

  xit('should not execute trade when target price is more than 5%', () => {
    const mockPrice: Price = new Price(
      '1',
      100,
      105,
      'timestamp',
      {} as Instrument,
    )
    priceServiceSpy.getLivePriceByInstrumentId.and.returnValue(of(mockPrice))

    component.sellForm.setValue({
      instrumentId: '1',
      quantity: 10,
      targetPrice: 110,
    })

    component.onSubmit()

    expect(fmtServiceSpy.executeTrade).not.toHaveBeenCalled()
  })
})
