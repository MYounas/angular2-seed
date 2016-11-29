import {Component} from 'angular2/core';
import {VoterComponent} from './voter.component';

@Component({
    selector: 'my-app',
    template: `
    <voter [n]="vot.n"></voter>
    `,
    directives:[VoterComponent]
})
export class AppComponent { 
    
    vot={
        n:10,
    }

}