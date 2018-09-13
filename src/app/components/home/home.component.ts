import { Component, OnInit } from '@angular/core';

const LOREM = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Magnam dicta aperiam tempore aut pariatur eum eius optio modi numquam omnis!`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _list: any[] = [];
  constructor() {
    this._list = [
      {date : '09-09-2018', title : '', color : 'yellow', picture : true, content : LOREM},
      {date : '10-09-2018', title : '', color : 'yellow', picture : false, content : LOREM},
      {date : '11-09-2018', title : '', color : 'yellow', picture : false, content : LOREM},
      {date : '12-09-2018', title : '', color : 'yellow', picture : false, content : LOREM}
    ];
  }

  ngOnInit() {

  }

}
