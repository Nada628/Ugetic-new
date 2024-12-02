import { Component } from '@angular/core';

@Component({
  selector: 'app-store-tabs',
  templateUrl: './store-tabs.component.html',
  styleUrls: ['./store-tabs.component.css']
})
export class StoreTabsComponent {
  selectedTab: number = 1;
  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
