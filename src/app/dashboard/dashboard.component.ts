import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit(){
    window.dispatchEvent(new Event('resize'));
    document.body.className = 'skin-blue sidebar-mini';
  }
  ngOnDestroy(): void {
    document.body.className = '';
  }

}
