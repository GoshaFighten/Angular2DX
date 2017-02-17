import { NgModule } from "@angular/core";
import { Location } from "@angular/common";
import { TranslateModule, TranslateService } from "ng2-translate";
import { LocalizeRouterModule, LocalizeParser, LocalizeRouterService } from "localize-router/localize-router";
import { AppManualParserLoader } from "./app-manual-parser-loader";
import { appRoutes } from "./app.routes";
import { loadMessages } from "devextreme/localization";
import "devextreme-intl";
let messagesDe = require("devextreme/localization/messages/de.json!json");

loadMessages(messagesDe);

@NgModule({
    imports: [
        TranslateModule.forRoot(),
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