import { NgModule } from "@angular/core";
import { Location } from "@angular/common";
import { Http } from "@angular/http";
import { TranslateModule, TranslateService } from "ng2-translate";
import { LocalizeRouterModule, LocalizeParser, StaticParserLoader } from "localize-router/localize-router";
import { appRoutes } from "./app.routes";
import { loadMessages, locale } from "devextreme/localization";
import "devextreme-intl";
let messagesDe = require("devextreme/localization/messages/de.json!json");

loadMessages(messagesDe);

locale("de");

@NgModule({
    imports: [
        TranslateModule.forRoot(),
        LocalizeRouterModule.forRoot(appRoutes, {
            provide: LocalizeParser,
            useFactory: (translate: TranslateService, location: Location, http: Http) =>
                new StaticParserLoader(translate, location, http, "i18n/locales.json"),
            deps: [TranslateService, Location, Http]
        }),
    ],
    exports: [
        TranslateModule,
        LocalizeRouterModule
    ]
})
export class AppTranslateModule {
    constructor(private translate: TranslateService) {
        locale("de");
        this.translate.setDefaultLang("de");
        this.translate.use("de");
    }
}