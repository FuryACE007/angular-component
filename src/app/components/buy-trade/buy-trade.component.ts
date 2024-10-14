import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Client } from '../../models/client'
import { Instrument } from '../../models/instrument'
import { ClientService } from '../../services/client.service'
import { InstrumentService } from '../../services/instrument.service'
import { FmtsService } from '../../services/fmts.service'
import { Order } from '../../models/order'
import { Price } from '../../models/price'
import { PriceService } from '../../services/price.service'

@Component({
  selector: 'app-buy-trade',
  templateUrl: './buy-trade.component.html',
  styleUrls: ['./buy-trade.component.css'],
})
export class BuyTradeComponent implements OnInit {
  buyForm: FormGroup
  client: Client = new Client('', 0)
  instruments: Instrument[] = []
  selectedInstrumentCost: Price | undefined

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private instrumentService: InstrumentService,
    private priceService: PriceService,
    private fmtService: FmtsService,
    private snackBar: MatSnackBar,
  ) {
    this.buyForm = this.fb.group({
      instrumentId: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      targetPrice: ['', [Validators.required, Validators.min(0)]],
    })
  }

  ngOnInit(): void {
    this.loadClientData()
    this.loadInstruments()

    this.buyForm.get('instrumentId')?.valueChanges.subscribe((instrumentId) => {
      if (instrumentId) {
        this.priceService
          .getLivePriceByInstrumentId(instrumentId)
          .subscribe((price) => {
            this.selectedInstrumentCost = price
          })
      }
    })
  }

  loadClientData() {
    this.clientService.getClientData().subscribe((clientData: Client) => {
      this.client = clientData
    })
  }

  loadInstruments() {
    this.instrumentService
      .getInstruments()
      .subscribe((instrumentData: Instrument[]) => {
        this.instruments = instrumentData
      })
  }

  onSubmit() {
    if (this.buyForm.valid && this.isTargetPriceValid()) {
      const order = new Order(
        this.buyForm.value.instrumentId,
        this.buyForm.value.quantity,
        this.buyForm.value.targetPrice,
        'B',
        this.client.id,
      )
      this.fmtService.executeTrade(order).subscribe(
        (response) => {
          console.log('Trade executed:', response)
          this.snackBar.open('Trade executed successfully', 'Close', {
            duration: 3000,
          })
          this.buyForm.reset()
          // Reset form validation state
          Object.keys(this.buyForm.controls).forEach((key) => {
            const control = this.buyForm.get(key)
            control?.setErrors(null)
          })
          // Reload client data to reflect updated cash balance
          this.loadClientData()
        },
        (error) => {
          console.error('Trade execution failed: ', error)
          this.snackBar.open(error.error || 'Trade execution failed', 'Close', {
            duration: 3000,
          })
        },
      )
    }
  }

  public isTargetPriceValid(): boolean {
    if (this.selectedInstrumentCost) {
      const targetPrice = this.buyForm.value.targetPrice
      const maxAllowedPrice = this.selectedInstrumentCost.askPrice * 1.05
      return targetPrice <= maxAllowedPrice
    }
    return false
  }
}
