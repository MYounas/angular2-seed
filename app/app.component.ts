import {Component} from 'angular2/core';
import {SubFormComponent} from './sub-form.component'

@Component({
    selector: 'my-app',
    template: `
        <sub-form></sub-form>
    `,
    directives:[SubFormComponent]
})
export class AppComponent {
     
}

