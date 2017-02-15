import { Component } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
    selector: "settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html"
})
export class SettingsComponent {
    language: string;
    setLanguage(lang: string) {

    }
    private sub: any;
    constructor(private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.language = params["lang"];
        });
    }
}