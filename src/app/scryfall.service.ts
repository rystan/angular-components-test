import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScryfallService {
  private baseApi = 'https://api.scryfall.com/';

  constructor(
    private http: HttpClient
  ) { }

  getCardImage(cardName: string, version: string = 'large') : string {
    return '';
  }
}