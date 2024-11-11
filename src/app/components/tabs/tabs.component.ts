import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  selectedTab: number = 1;
  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }
}
