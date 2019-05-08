import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { DettagliAlbumComponent } from './dettagli-album/dettagli-album.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    DettagliAlbumComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
