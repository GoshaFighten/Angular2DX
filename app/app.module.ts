import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxButton } from 'devextreme-angular2';
import { AppComponent }  from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, DxButton],
    bootstrap: [AppComponent]
})
export class AppModule { }