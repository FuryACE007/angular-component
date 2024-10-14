import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community'; 
import { TradeHistory } from 'src/app/models/trade-history';
import { TradeHistoryService } from 'src/app/trade-history.service';


@Component({
  selector: 'app-trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css'],
})
export class TradeHistoryComponent implements OnInit {
  constructor(private tradeHistoryService : TradeHistoryService){}
  
  
  colDefs : ColDef[] = [
    { field: 'Symbol', headerName: 'Instrument ID' ,flex:1.1,filter:true,suppressMovable: true},
    { field: 'Order_Date', headerName: 'Order_Date' ,flex:2, suppressMovable: true },
    { field: 'transactionDate', headerName: 'transactionDate' ,flex:2,suppressMovable: true },
    { field: 'Type', headerName: 'Direction',flex:1 ,suppressMovable: true },
    { field: 'amount', headerName: 'Amount',flex:1 ,suppressMovable: true },
    { field: 'price', headerName: 'Price',flex:1,suppressMovable: true}
  ];




  
  tradeHistoryData:TradeHistory[] = [];
  getTradeHistory() : void{
    this.tradeHistoryService.getTradeHistory()
    .subscribe(tradeHistoryData => this.tradeHistoryData = tradeHistoryData)
    console.log(this.tradeHistoryData[0])
  }
  ngOnInit(): void {
    this.getTradeHistory();
  }
}
