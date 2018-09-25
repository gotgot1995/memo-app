import { Component, OnInit, Input } from '@angular/core';
import AppConfig from '../../app.config';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public COLORS = AppConfig.COLOR_SCALES;

  // the card image decorator
  @Input() image = '';

  // the card title
  @Input() title = '';

  // the card body
  @Input() content = '';

  // the card footer
  @Input() action = '';

  // the card color scale
  @Input() colorScale = '';

  // the note date
  @Input() date = '';

  // color of the card body (generated with given color scale)
  public contentColor: string[] = [];

  // color of the card footer (generated with given color scale)
  public actionColor: string[] = [];

  constructor() { }

  ngOnInit() {
    if (this.colorScale) {
      this.contentColor = AppConfig.COLOR_SCALES[this.colorScale].primary;
      this.actionColor = AppConfig.COLOR_SCALES[this.colorScale].accent;
    }
  }
}
