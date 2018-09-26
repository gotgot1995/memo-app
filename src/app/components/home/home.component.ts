import { Component, OnInit } from '@angular/core';

const LOREM = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Magnam dicta aperiam tempore aut pariatur eum eius optio modi numquam omnis!`;

const RAW_DATA = [
  { date : '15-09-2018', title : 'Une journée merveilleuse', color : 'LIGHT_GREEN', image : 'assets/test_bg.png', content : LOREM, action: '' },
  { date : '14-09-2018', title : 'Une journée merveilleuse', color : 'TEAL', image : 'assets/test_bg.png', content : LOREM, action: '' },
  { date : '13-09-2018', title : 'Plein d\'opportunités', color : 'LIGHT_GREEN', image : 'assets/test_bg.png', content : LOREM, action: '' },
  { date : '12-09-2018', title : 'Galère, galère...', color : 'TEAL', image : 'assets/test_bg.png', content : LOREM, action: '' },
  { date : '11-09-2018', title : 'Pas de travail pas de dignité', color : 'LIGHT_GREEN', image : 'assets/test_bg.png', content : LOREM, action: '' },
  { date : '10-09-2018', title : 'On fait pas d\'omelettes sans casser d\'oeufs', color : 'TEAL', image : 'assets/test_bg.png', content : LOREM, action: '' }
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private _list: any[] = [];

  public rows = 0;
  constructor() {
    this.rows = Math.floor(RAW_DATA.length / 4);
    this._list = RAW_DATA;
  }

  public get list() {
    return this._list;
  }

  ngOnInit() {
  }
}
