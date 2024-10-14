import { Component } from '@angular/core'
import { ICellRendererAngularComp } from '@ag-grid-community/angular'
import { ICellRendererParams } from '@ag-grid-community/core'

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css'],
})
export class BuyButtonComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return true
  }
}
