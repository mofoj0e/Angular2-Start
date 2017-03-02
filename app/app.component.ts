import {Component} from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <title>{{pageTitle}}</title>
        <div>
            <h1>{{pageTitle}}</h1>
            <div>My first component</div>
        </div>    
            `
})
export class AppComponent {
    pageTitle: string = "Acme Product Management"
 }
