import { ICellRendererAngularComp } from '@ag-grid-community/angular'
import { ICellRendererParams } from '@ag-grid-community/core'
import { Component } from '@angular/core'

@Component({
  selector: 'app-sell-button',
  templateUrl: './sell-button.component.html',
  styleUrls: ['./sell-button.component.css'],
})
export class SellButtonComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return true
  }
}
