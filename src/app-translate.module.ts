import { NgModule } from "@angular/core";
import { TranslateModule, TranslateService } from "ng2-translate";
import { loadMessages, locale } from "devextreme/localization";
import "devextreme-intl";
let messagesDe = require("devextreme/localization/messages/de.json!json");

loadMessages(messagesDe);

locale("de");

@NgModule({
    imports: [
        TranslateModule.forRoot()
    ],
    exports: [TranslateModule]
})
export class AppTranslateModule {
    constructor(private translate: TranslateService) {
        locale("de");
        this.translate.setDefaultLang("de");
        this.translate.use("de");
    }
}