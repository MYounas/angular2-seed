import {Component} from 'angular2/core';
import {TwitterComponent} from './twitter.component';

@Component({
    selector: 'my-app',
    template: `
        <div *ngFor="#tweet of tweets">
            <twitter [n]="tweet.n" [hit]="tweet.hit" [ImgSrc]="tweet.ImgSrc" [name]="tweet.name" [tName]="tweet.tName" [des]="tweet.des"></twitter>
        </div>
    `,
    directives:[TwitterComponent]
})
export class AppComponent { 
 
    tweets=[
        {
            ImgSrc:"http://placeimg.com/100/100/people?1",
            name:"Windward",
            tName:"windwardstudio",
            des:"Looking for a better company reporting or docgen app?",
            n:5,
            hit:false,
        },
        {
            ImgSrc:"http://placeimg.com/100/100/people?2",
            name:"AngularJS News",
            tName:"angularjs_news",
            des:"Right Relevance:Influencers,Articles and Conversations",
            n:1,
            hit:false,
        },
        {
            ImgSrc:"http://placeimg.com/100/100/people?3",
            name:"UX & Bootstrap",
            tName:"3rdwave",
            des:"10 Reasons Why Web Projects Fail",
            n:10,
            hit:true,
        },
    ];
        
}