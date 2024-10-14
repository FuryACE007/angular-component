import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-robo-advisor',
  templateUrl: './robo-advisor.component.html',
  styleUrls: ['./robo-advisor.component.css']
})
export class RoboAdvisorComponent {
  // @Input()
  // clientId : number;
  checklist = [
    { id: 1, value: "Yes", isSelected: false },
    { id: 2, value: "No", isSelected: false }
  ];

  constructor() {}

  isAllSelected(item:any) {
    this.checklist.forEach(val => {
      if (val.id == item.id) val.isSelected = !val.isSelected;
      else {
        val.isSelected = false;
      }
    });
  }
  stocks = [
    {
      ticker: 'APPL',
      price: '296$',
      suggest: 'Buy'
    },
    {
      ticker: 'QUAL',
      price: '196$',
      suggest: 'Sell'
    },
    {
      ticker: 'GAP',
      price: '66$',
      suggest: 'Buy'
    },
    {
      ticker: 'Key',
      price: '6$',
      suggest: 'Buy'
    }
  ];
}
