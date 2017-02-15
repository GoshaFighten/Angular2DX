import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { CounterComponent } from "./components/counter/counter.component";
import { DevExtremeModule } from "devextreme-angular";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        DevExtremeModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CounterComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}