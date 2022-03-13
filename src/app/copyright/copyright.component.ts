import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {
  @Input() symbol: string;
  @Input() startYear: string;
  @Input() prefix: string;
  currentYear: string = new Date().getFullYear().toString()
  yearRange: string;

  constructor() { }

  ngOnInit() {
    this.symbol = (this.symbol === undefined) ? '\u00A9' : this.symbol;
    this.yearRange = (this.startYear == this.currentYear) ? this.currentYear : `${this.startYear} \u2010 ${this.currentYear}`;
  }

}