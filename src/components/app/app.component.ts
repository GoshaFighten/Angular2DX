import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    navigationMenu: any[];
    toolbarLinks: any[];
    constructor(private router: Router) {
        const caption = "Angular DX Application";
        let links = router.config.filter(route => {
            return route.data && route.data["title"];
        }).map(route => {
            return {
                title: route.data["title"],
                path: "/" + route.path
            };
        });
        this.navigationMenu = [{
            key: caption,
            items: links
        }];
        this.toolbarLinks = links.map(link => {
            return {
                title: link.title,
                path: link.path,
                locateInMenu: "always"
            };
        });
        this.toolbarLinks.push({
            title: caption,
            locateInMenu: "never",
            location: "before"
        });
    }
}