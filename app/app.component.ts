import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
        <zippy title="1st title">
            My name is younas
        </zippy>
        <zippy title="second title">
            SOftware engineer
        </zippy>
    `,
    directives:[ZippyComponent]
})
export class AppComponent {
     
}

