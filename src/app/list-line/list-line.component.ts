import { Component, OnInit } from '@angular/core';
import { RestApiService }    from '../rest-api.service';

@Component({
  selector: 'app-list-line',
  templateUrl: './list-line.component.html',
  styleUrls: ['./list-line.component.css']
})
export class ListLineComponent implements OnInit {
  dataLine: Object;
  constructor(private rest: RestApiService) { }

  async ngOnInit() {
    try{
      const data=await this.rest.get(
        'http://localhost/pwiweb/index.php/common/getArea'
      );
      this.dataLine=data;
    }catch(error){
      console.log(error);
    }
    
  }

}
