import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewScreenComponent, ChildComponent } from './new-screen/new-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NewScreenComponent,
    ChildComponent,
    // ... other components ...
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // ... other modules ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
