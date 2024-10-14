import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { TradeHistory } from './models/trade-history';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TradeHistoryService {
  private tradeHistoryUrl = 'http://localhost:3000/tradehistory';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }
  
  getTradeHistory(): Observable<TradeHistory[]> {
    return this.http.get<TradeHistory[]>(this.tradeHistoryUrl)
  }

}



