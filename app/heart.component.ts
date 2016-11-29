import {Component,Input} from 'angular2/core';

@Component({
    selector:'heart',
    template:`
        <i class="glyphicon glyphicon-heart" [class.hitted]="hit" (click)="onClick()"></i>
        <span>{{ n }}</span>
    `,
    styles:[`
        .glyphicon-heart{
            color:#ccc;
            cursor:pointer;
        }
        .hitted{
            color:deeppink;
        }
    `]
})

export class HeartComponent{

    @Input() hit=false;
    @Input() n=0;

    onClick(){
        this.hit=!this.hit;
        this.n+=(this.hit)?1:-1;
    }

}