import {Component} from 'angular2/core';
import {BootstrapPanel} from './bootstrap.panel.component';

@Component({
    selector: 'my-app',
    template: `
        <bs-panel>
            <div class="heading">Name</div>
            <div class="body">Hi Younas!</div>
        </bs-panel>
    `,
    directives:[BootstrapPanel]
})
export class AppComponent { 
}

