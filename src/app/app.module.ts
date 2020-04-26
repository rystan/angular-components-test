import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MtgCardComponent } from './mtg-card/mtg-card.component';
import { PageBackgroundImageComponent } from './page-background-image/page-background-image.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ScryfallService } from './scryfall.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MtgCardComponent, PageBackgroundImageComponent, CopyrightComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ScryfallService]
})
export class AppModule { }
