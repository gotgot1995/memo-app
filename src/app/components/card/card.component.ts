import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() image = '';
  @Input() title = '';
  @Input() content = '';
  @Input() action = '';
  @Input() titleClasses: string[] = [];
  @Input() contentClasses: string[] = [];
  @Input() actionClasses: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
