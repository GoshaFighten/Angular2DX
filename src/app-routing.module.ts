import { NgModule } from "@angular/core";
import { RouterModule, Routes, RouteReuseStrategy } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CounterComponent } from "./components/counter/counter.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { CustomReuseStrategy } from "./custom-reuse-strategy";

const appRoutes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        data: {
            title: "NavMenu.Home"
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
            title: "NavMenu.Counter"
        }
    },
    {
        path: "settings",
        component: SettingsComponent,
        data: {
            title: "NavMenu.Settings"
        }
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: [
        {
            provide: RouteReuseStrategy,
            useClass: CustomReuseStrategy
        }
    ]
})
export class AppRoutingModule {
}