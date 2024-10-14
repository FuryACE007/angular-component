import { Injectable } from '@angular/core'
import { Order } from '../models/order'
import { Observable } from 'rxjs'
import { Trade } from '../models/trade'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class FmtsService {
  private apiUrl = 'http://localhost:8080/api' // Adjust this to your backend URL

  constructor(private http: HttpClient) {}

  executeTrade(order: Order): Observable<Trade> {
    return this.http.post<Trade>(`${this.apiUrl}/trades`, order)
  }
}
