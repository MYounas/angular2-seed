import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'twitter',
    template: `
        <div class="media" style="margin:5%">
            <div class="media-left media-middle">
                <a href="#">
                    <img class="media-object roundImg" [src]="ImgSrc">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading"> {{name}} <span style="color:#CCCACC">@{{tName}}</span></h4>
                {{des}}<br/>
                <span class="glyphicon glyphicon-heart" [class.hitted]="hit" (click)="onClick()"></span>
                {{n}}
            </div>
        </div>
    `,
    styles:[`
        .hitted{
            color:deeppink !important;
        }
        .glyphicon{
            cursor:pointer;
            color:#CCCACC;
        }
        .roundImg{
            border-radius:10px;
        }
    `]
})

export class TwitterComponent {

    @Input() ImgSrc;
    @Input() name;
    @Input() tName;
    @Input() des;
    @Input() hit=false;
    @Input() n=0;

    onClick(){
        this.hit=!this.hit;
        this.n+=(this.hit)?1:-1;
    }

}