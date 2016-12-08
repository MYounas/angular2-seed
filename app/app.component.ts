import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
    <div *ngFor="#user of data">
        <zippy [title]="user.title">
            <div>{{user.content}}</div>
        </zippy>
    </div>
    `,
    directives:[ZippyComponent]
})
export class AppComponent {
    data=[
        {
            title:"Who can see my stuff?",
            content:"Content who can see my status"
        },
        {
            title:"Who can contact me?",
            content:"My friends can contact me"
        },
    ] 
}

