import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondcontent',
  templateUrl: './secondcontent.component.html',
  styleUrls: ['./secondcontent.component.css']
})
export class SecondcontentComponent implements OnInit {

  constructor(private router: Router) { }
  test(){
    this.router.navigate(['dashboard']);
  }
  ngOnInit(): void {
  }

}
