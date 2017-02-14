import { Component } from "@angular/core";

@Component({
    selector: "counter",
    moduleId: module.id,
    templateUrl: "./counter.component.html"
})
export class CounterComponent {
    currentCount = 0;
    incrementCounter() {
        this.currentCount++;
    }
}