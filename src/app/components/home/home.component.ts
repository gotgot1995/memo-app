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
      {
        date : '09-09-2018',
        title : 'Test card 1',
        color : 'YELLOW',
        image : 'assets/test_bg.png',
        content : LOREM,
        action: 'Bonjour bonjour'
      },
      { date : '10-09-2018', title : 'Test card 2', color : 'BLUE', picture : false, content : LOREM, action: 'Bonjour bonjour' },
      { date : '11-09-2018', title : 'Test card 3', color : 'RED', picture : false, content : LOREM, action: 'Bonjour bonjour' },
      { date : '12-09-2018', title : 'Test card 4', color : 'PURPLE', picture : false, content : LOREM, action: 'Bonjour bonjour' },
      { date : '13-09-2018', title : 'Test card 5', color : 'TEAL', picture : false, content : LOREM, action: 'Bonjour bonjour' }
    ];
  }

  public get list() {
    return this._list;
  }

  ngOnInit() {
  }
}
