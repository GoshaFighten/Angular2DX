import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./components/app/app.component";
import { HomeComponent } from "./components/home/home.component";
import { CounterComponent } from "./components/counter/counter.component";
import { DevExtremeModule } from "devextreme-angular";
const appRoutes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        data: {
            title: "Home"
        }
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "counter",
        component: CounterComponent,
        data: {
            title: "Counter"
        }
    },
    {
        path: "**",
        redirectTo: "/home"
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
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
export class AppModule { }