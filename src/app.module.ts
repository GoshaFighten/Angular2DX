import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { CounterComponent } from "./components/counter/counter.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { DevExtremeModule } from "devextreme-angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppTranslateModule } from "./app-translate.module";

@NgModule({
    imports: [
        AppRoutingModule,
        AppTranslateModule,
        BrowserModule,
        DevExtremeModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        CounterComponent,
        SettingsComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}