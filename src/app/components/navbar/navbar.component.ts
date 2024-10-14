import { Component } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { InvestmentPreferenceComponent } from '../investment-preference/investment-preference.component'
import { ReportClientActivityComponent } from '../report-client-activity/report-client-activity.component'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}
  showPreferenceForm() {
    const dialogRef = this.dialog.open(InvestmentPreferenceComponent, {
      width: '550px',
      height: '700px',
    })
  }
  showReport() {
    const dialogRef = this.dialog.open(ReportClientActivityComponent, {
      width: '550px',
      height: '500px',
    })
  }
}
