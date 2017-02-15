import { Component } from "@angular/core";
import { LocalizeRouterService } from "localize-router/localize-router";

@Component({
    selector: "settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent {
    constructor(private localizeService: LocalizeRouterService) {
        this.languages = localizeService.parser.locales;
        this.language = localizeService.parser.currentLang;
    }
    language: string;
    languages: string[];
    setLanguage() {
        this.localizeService.changeLanguage(this.language);
    }
}