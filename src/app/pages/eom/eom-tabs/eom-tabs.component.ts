import { Component } from '@angular/core';

@Component({
  selector: 'app-eom-tabs',
  templateUrl: './eom-tabs.component.html',
  styleUrls: ['./eom-tabs.component.css']
})
export class EomTabsComponent {
  selectedTab: number = 1;
  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
