import { Component } from '@angular/core';
import { DxButton } from 'devextreme-angular2';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [DxButton]
})
export class AppComponent {
    helloWorld() {
        alert('Hello world!');
    }
}