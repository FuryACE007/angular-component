import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { BuyTradeComponent } from './components/buy-trade/buy-trade.component'
import { SellTradeComponent } from './components/sell-trade/sell-trade.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { RoboAdvisorComponent } from './components/robo-advisor/robo-advisor.component'
import { TradeHistoryComponent } from './components/trade-history/trade-history.component'
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'tradehistory', component: TradeHistoryComponent },
  { path: 'roboadvisor', component: RoboAdvisorComponent },
  { path: 'buy', component: BuyTradeComponent },
  { path: 'sell', component: SellTradeComponent },
  { path: 'portfolio', component: PortfolioViewComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
