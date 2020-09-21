import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    public someBoolean: boolean;
    public someOtherBoolean: boolean;

    constructor() {
        setTimeout(() => {
            this.someBoolean = true;
            this.someOtherBoolean = true;
        });
    }
}
