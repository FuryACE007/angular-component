import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface

import {
  GridApi,
  GridReadyEvent,
} from '@ag-grid-community/core';
import { TradeHistory } from 'src/app/models/trade-history';

@Component({
  selector: 'app-report-client-activity',
  templateUrl: './report-client-activity.component.html',
  styleUrls: ['./report-client-activity.component.css'],
})
export class ReportClientActivityComponent {
  private gridApi!: GridApi;
  constructor() {}

  colDefs: ColDef[] = [
    {
      field: 'Symbol',
      headerName: 'Instrument ID',
      flex: 1.1,
      filter: true,
      suppressMovable: true,
    },
    {
      field: 'Order_Date',
      headerName: 'Order_Date',
      flex: 2,
      suppressMovable: true,
      valueFormatter: (p) => String(new Date(p.value).toLocaleString()),
    },
    {
      field: 'transactionDate',
      headerName: 'transactionDate',
      flex: 2,
      suppressMovable: true,
      valueFormatter: (p) => String(new Date(p.value).toLocaleString()),
    },
    { field: 'Type', headerName: 'Direction', flex: 1, suppressMovable: true },
    { field: 'amount', headerName: 'Amount', flex: 1, suppressMovable: true },
    { field: 'price', headerName: 'Price', flex: 1, suppressMovable: true },
  ];

  public themeClass = 'ag-theme-quartz';
  public popupParent: HTMLElement | null = document.body;
  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }
  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
  tradeHistoryData: TradeHistory[] = [];
  getReport() {
    const sdate = this.range.value['start'];
    const edate = this.range.value['end'];

    const start_date = new Date(String(sdate)).toISOString().split('T')[0];
    const end_date = new Date(String(edate)).toISOString().split('T')[0];

  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
