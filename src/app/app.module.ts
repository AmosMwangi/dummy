import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailComponent,
    QuoteFormComponent,
    StrikethroughDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    
  ],
  entryComponents:[QuoteFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
