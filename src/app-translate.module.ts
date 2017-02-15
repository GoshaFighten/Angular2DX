import { NgModule } from "@angular/core";
import { Location } from "@angular/common";
import { TranslateModule, TranslateService } from "ng2-translate";
import { LocalizeRouterModule, LocalizeParser, ManualParserLoader, LocalizeRouterService } from "localize-router/localize-router";
import { appRoutes } from "./app.routes";
import { loadMessages, locale } from "devextreme/localization";
import "devextreme-intl";
let messagesDe = require("devextreme/localization/messages/de.json!json");

loadMessages(messagesDe);

@NgModule({
    imports: [
        TranslateModule.forRoot(),
        LocalizeRouterModule.forRoot(appRoutes, {
            provide: LocalizeParser,
            useFactory: (translate: TranslateService, location: Location) =>
                new ManualParserLoader(translate, location, ["en", "de"]),
            deps: [TranslateService, Location]
        }),
    ],
    exports: [
        TranslateModule,
        LocalizeRouterModule
    ]
})
export class AppTranslateModule {
    constructor(private localizeService: LocalizeRouterService) {
        locale(localizeService.parser.currentLang);
        localizeService.routerEvents.subscribe((language: string) => {
            debugger
            locale(language);
        });
    }
}