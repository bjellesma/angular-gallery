import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GalleryCardComponent } from './components/gallery-card/gallery-card.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryModalComponent } from './components/gallery-modal/gallery-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalleryCardComponent,
    GalleryComponent,
    GalleryModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
