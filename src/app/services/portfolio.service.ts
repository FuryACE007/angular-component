import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ClientPortfolio } from '../models/client-portfolio'

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private apiUrl = 'http://localhost:8080/api' // Adjust this to your backend URL

  constructor(private http: HttpClient) {}

  getClientPortfolio(clientId: number): Observable<ClientPortfolio[]> {
    return this.http.get<ClientPortfolio[]>(
      `${this.apiUrl}/portfolios/${clientId}`,
    )
  }
}
