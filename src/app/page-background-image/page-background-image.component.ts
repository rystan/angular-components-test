import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-background-image',
  templateUrl: './page-background-image.component.html',
  styleUrls: ['./page-background-image.component.css']
})
export class PageBackgroundImageComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() opacity: string;

  constructor() { }

  ngOnInit() {
    this.opacity =(this.opacity === 'undefined') ? '.33' : this.opacity;
  }

}