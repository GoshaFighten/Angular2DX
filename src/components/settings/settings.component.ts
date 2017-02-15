import { Component } from "@angular/core";
import { LocalizeRouterService } from "localize-router/localize-router";

@Component({
    selector: "settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent {
    constructor(private localizeService: LocalizeRouterService) {
        this.language = localizeService.parser.currentLang;
    }
    language: string;
    setLanguage() {
        this.localizeService.changeLanguage(this.language);
    }
}