import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { DxDataGrid } from "devextreme-angular2";
import { AppComponent }  from "./app.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, DxDataGrid],
    bootstrap: [AppComponent]
})
export class AppModule { }