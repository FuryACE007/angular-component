import { Component, OnInit } from '@angular/core'
import { ColDef } from 'ag-grid-community'
import { ClientPortfolio } from '../../models/client-portfolio'
import { PortfolioService } from '../../services/portfolio.service'

@Component({
  selector: 'app-portfolio-view',
  templateUrl: './portfolio-view.component.html',
  styleUrls: ['./portfolio-view.component.css'],
})
export class PortfolioViewComponent implements OnInit {
  portfolioData: ClientPortfolio[] = []

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.loadPortfolioData()
  }

  loadPortfolioData() {
    // For now, we'll use a hardcoded client ID. This should be replaced with the actual client ID when available.
    const clientId = 1
    this.portfolioService.getClientPortfolio(clientId).subscribe(
      (data) => {
        this.portfolioData = data
      },
      (error) => {
        console.error('Error fetching portfolio data:', error)
      },
    )
  }

  colDefs: ColDef[] = [
    {
      field: 'portfolioId',
      headerName: 'Portfolio ID',
      flex: 1,
      filter: true,
      suppressMovable: true,
    },
    {
      field: 'instrumentId',
      headerName: 'Instrument ID',
      flex: 1,
      filter: true,
      suppressMovable: true,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      flex: 1,
      filter: true,
      suppressMovable: true,
    },
    {
      field: 'cashValue',
      headerName: 'Cash Value',
      flex: 1,
      filter: true,
      suppressMovable: true,
      valueFormatter: (params) => `$${params.value.toFixed(2)}`,
    },
  ]
}
