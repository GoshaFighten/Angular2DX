import { NgModule } from "@angular/core";
import { RouterModule, Routes, RouteReuseStrategy } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CounterComponent } from "./components/counter/counter.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { CustomReuseStrategy } from "./custom-reuse-strategy";

const appRoutes: Routes = [
    {
        path: ":lang/home",
        component: HomeComponent,
    },
    {
        path: "home",
        redirectTo: "/de/home",
        data: {
            title: "NavMenu.Home"
        }
    },
    {
        path: "",
        redirectTo: "/de/home",
        pathMatch: "full"
    },
    {
        path: ":lang/counter",
        component: CounterComponent
    },
    {
        path: "counter",
        redirectTo: "/de/counter",
        data: {
            title: "NavMenu.Counter"
        }
    },
    {
        path: ":lang/settings",
        component: SettingsComponent
    },
    {
        path: "settings",
        redirectTo: "/de/settings",
        data: {
            title: "NavMenu.Settings"
        }
    },
    {
        path: "**",
        redirectTo: "/home"
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