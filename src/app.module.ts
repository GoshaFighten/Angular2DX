import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./components/home/home.component";
import { DevExtremeModule } from "devextreme-angular";

@NgModule({
    imports: [
        BrowserModule,
        DevExtremeModule
    ],
    declarations: [
        HomeComponent
    ],
    bootstrap: [HomeComponent]
})
export class AppModule {
}