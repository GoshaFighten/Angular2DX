import { NgModule } from "@angular/core";
import { Location } from "@angular/common";
import { HttpModule, Http } from "@angular/http";
import { TranslateModule, TranslateService, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LocalizeRouterModule, LocalizeParser, LocalizeRouterService } from "localize-router/localize-router";
import { AppManualParserLoader } from "./app-manual-parser-loader";
import { appRoutes } from "./app.routes";
import { loadMessages } from "devextreme/localization";
import "devextreme-intl";
let messagesDe = require("devextreme/localization/messages/de.json!json");

loadMessages(messagesDe);

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    imports: [
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        LocalizeRouterModule.forRoot(appRoutes, {
            provide: LocalizeParser,
            useFactory: (translate: TranslateService, location: Location) =>
                new AppManualParserLoader(translate, location, ["en", "de"]),
            deps: [TranslateService, Location]
        }),
    ],
    exports: [
        TranslateModule,
        LocalizeRouterModule
    ]
})
export class AppTranslateModule {
}