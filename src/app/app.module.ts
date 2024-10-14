import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AgGridAngular, AgGridModule } from 'ag-grid-angular'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BuyTradeComponent } from './components/buy-trade/buy-trade.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http'
import { SellTradeComponent } from './components/sell-trade/sell-trade.component'
import { SellButtonComponent } from './grid-renderers/sell-button/sell-button.component'
import { MatDialogModule } from '@angular/material/dialog'
import { InvestmentPreferenceComponent } from './components/investment-preference/investment-preference.component'
import { RoboAdvisorComponent } from './components/robo-advisor/robo-advisor.component'
import { ProfileComponent } from './components/profile/profile.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { ClientLoginComponent } from './components/client-login/client-login.component'
import { ClientRegistrationComponent } from './components/client-registration/client-registration.component'
import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'
import { BackButtonDisableModule } from 'angular-disable-browser-back-button'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ReportClientActivityComponent } from './components/report-client-activity/report-client-activity.component'
import { TradeHistoryComponent } from './components/trade-history/trade-history.component'
import { PortfolioViewComponent } from './components/portfolio-view/portfolio-view.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDividerModule } from '@angular/material/divider'
import { BuyButtonComponent } from './grid-renderers/buy-button/buy-button.component'
@NgModule({
  declarations: [
    AppComponent,
    BuyTradeComponent,
    SellTradeComponent,
    SellButtonComponent,
    AppComponent,
    InvestmentPreferenceComponent,
    RoboAdvisorComponent,
    ProfileComponent,
    ClientLoginComponent,
    ClientRegistrationComponent,
    LandingPageComponent,
    DashboardComponent,
    NavbarComponent,
    ReportClientActivityComponent,
    TradeHistoryComponent,
    PortfolioViewComponent,
    BuyButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    AgGridAngular,
    AgGridModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    BackButtonDisableModule.forRoot({
      preserveScroll: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
