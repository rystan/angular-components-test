import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mtg-card',
  templateUrl: './mtg-card.component.html',
  styleUrls: ['./mtg-card.component.css']
})
export class MtgCardComponent implements OnInit {
  @Input() name: string;
  @Input() cardset: string;
  bgimage: string;
  fullCard: string;


  constructor() { }

  ngOnInit() {
    let imgurl = `https://api.scryfall.com/cards/named?exact=${this.name}&set=${this.cardset}&format=image&version=`;
    this.bgimage = imgurl + 'art_crop';
    this.fullCard = imgurl + 'border_crop';

  }

}