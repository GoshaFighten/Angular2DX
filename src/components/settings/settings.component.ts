import { Component } from "@angular/core";
import { TranslateService } from "ng2-translate";

@Component({
    selector: "settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent {
    constructor(private translate: TranslateService) {
        this.language = translate.currentLang;
    }
    language: string;
    setLanguage() {

    }
}