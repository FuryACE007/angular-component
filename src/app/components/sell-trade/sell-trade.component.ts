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
import { PortfolioService } from '../../services/portfolio.service'
import { ClientPortfolio } from '../../models/client-portfolio'

@Component({
  selector: 'app-sell-trade',
  templateUrl: './sell-trade.component.html',
  styleUrls: ['./sell-trade.component.css'],
})
export class SellTradeComponent implements OnInit {
  sellForm: FormGroup
  client: Client = new Client('', 0)
  portfolioInstruments: ClientPortfolio[] = []
  selectedInstrumentCost: Price | undefined

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private instrumentService: InstrumentService,
    private priceService: PriceService,
    private fmtService: FmtsService,
    private portfolioService: PortfolioService,
    private snackBar: MatSnackBar,
  ) {
    this.sellForm = this.fb.group({
      instrumentId: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      targetPrice: ['', [Validators.required, Validators.min(0)]],
    })
  }

  ngOnInit(): void {
    this.loadClientData()
    this.loadPortfolioInstruments()

    this.sellForm
      .get('instrumentId')
      ?.valueChanges.subscribe((instrumentId) => {
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

  loadPortfolioInstruments() {
    this.portfolioService
      .getClientPortfolio(parseInt(this.client.id))
      .subscribe({
        next: (portfolioData: ClientPortfolio[]) => {
          this.portfolioInstruments = portfolioData
        },
        error: (error) => {
          console.error('Error loading portfolio instruments:', error)
          this.snackBar.open('Error loading portfolio instruments', 'Close', {
            duration: 3000,
          })
        },
      })
  }

  onSubmit() {
    if (this.sellForm.valid && this.isTargetPriceValid()) {
      const order = new Order(
        this.sellForm.value.instrumentId,
        this.sellForm.value.quantity,
        this.sellForm.value.targetPrice,
        'S',
        this.client.id,
      )
      this.fmtService.executeTrade(order).subscribe(
        (response) => {
          console.log('Trade executed:', response)
          this.snackBar.open('Trade executed successfully', 'Close', {
            duration: 3000,
          })
          this.sellForm.reset()
          // Reset form validation state
          Object.keys(this.sellForm.controls).forEach((key) => {
            const control = this.sellForm.get(key)
            control?.setErrors(null)
          })
          // Reload client data and portfolio instruments to reflect updates
          this.loadClientData()
          this.loadPortfolioInstruments()
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
      const targetPrice = this.sellForm.value.targetPrice
      const minAllowedPrice = this.selectedInstrumentCost.bidPrice * 0.95
      return targetPrice >= minAllowedPrice
    }
    return false
  }
}
