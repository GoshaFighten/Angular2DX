import { NgModule } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { TranslateModule, TranslateService } from "ng2-translate";
import { loadMessages, locale } from "devextreme/localization";
import "devextreme-intl";
let messagesDe = require("devextreme/localization/messages/de.json!json");

loadMessages(messagesDe);

@NgModule({
    imports: [
        TranslateModule.forRoot()
    ],
    exports: [TranslateModule]
})
export class AppTranslateModule {
    sub: any;
    constructor(
        private translate: TranslateService,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        router.events.map(event => event instanceof NavigationEnd)
            .subscribe((val) => {
                if (val) {
                    this.sub = this.route.params.subscribe(params => {
                        let defaultLang = "de";
                        let currentLang = params["lang"] ? params["lang"] : defaultLang;
                        this.translate.setDefaultLang(defaultLang);
                        this.translate.use(currentLang);
                        locale(currentLang);
                    });
                }
            });
    }
}